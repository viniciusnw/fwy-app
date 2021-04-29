import { Store } from '@Redux/Store';
import { Container } from 'typedi';
import Config from 'react-native-config';

// import { onError } from "@apollo/client/link/error";
// import { ApolloLink, Operation, NextLink } from '@apollo/client/link/core';
// import { createHttpLink, ApolloClient, InMemoryCache } from '@apollo/client';

import { onError } from 'apollo-link-error';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, NextLink, Operation } from 'apollo-link';


export function configureApolloClient(APP_NAME: string) {
  const { API_URL } = Config;

  const httpLink = createHttpLink({ uri: API_URL });

  const errorLink = onError((Error) => console.warn("[ApolloClient][Error]: ", Error));

  const authLink = new ApolloLink((operation: Operation, forward: NextLink) => {
    const { store } = Store[APP_NAME];
    const token = store.getState().User.data?.token;
    if (token) operation.setContext({
      headers: {
        authorization: token
      }
    });
    return forward(operation);
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: ApolloLink.from([authLink, errorLink, httpLink])
  });

  Container.set('APOLLO_CLIENT', client);
}