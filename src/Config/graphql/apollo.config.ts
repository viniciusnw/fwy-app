import { Container } from 'typedi';
import Config from 'react-native-config';
import { onError } from "@apollo/client/link/error";
import { ApolloLink, Operation, NextLink } from '@apollo/client/link/core';
import { createHttpLink, ApolloClient, InMemoryCache } from '@apollo/client';

import { Store } from '@Redux/Store';

const { API_URL } = Config;

export function configureApolloClient(APP_NAME: string) {

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