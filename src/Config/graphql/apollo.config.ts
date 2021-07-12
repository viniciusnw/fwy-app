import { Store } from '@Redux/Store';
import { Container } from 'typedi';
import Config from 'react-native-config';

// import { onError } from "@apollo/client/link/error";
// import { ApolloLink, Operation, NextLink } from '@apollo/client/link/core';
// import { createHttpLink, ApolloClient, InMemoryCache } from '@apollo/client';

import { onError } from 'apollo-link-error';
import Snackbar from 'react-native-snackbar';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, NextLink, Operation } from 'apollo-link';

import { FASTING } from '@Config/constants';

const getSnackbarDuration = (time: 's' | 'l' | 'i') => {
  switch (time) {
    case 's': return Snackbar.LENGTH_SHORT
    case 'l': return Snackbar.LENGTH_LONG
    case 'i': return Snackbar.LENGTH_INDEFINITE
  }
}

export function showSnackbar(
  message,
  type: 'error' | 'success',
  time: 's' | 'l' | 'i',
  onPress?: Function
) {
  const duration = getSnackbarDuration(time)
  const textColor = type == 'error' ? '#FF0033' : '#28A745'

  Snackbar.show({
    text: message,
    duration,
    action: {
      textColor,
      text: 'Close',
      onPress: () => onPress && onPress(),
    },
  });
}

export function configureApolloClient(APP_NAME: string) {
  const { API_URL } = Config;

  const httpLink = createHttpLink({ uri: API_URL });

  const errorLink = onError((Error) => {
    const { graphQLErrors, networkError } = Error;

    if (graphQLErrors)
      graphQLErrors?.map(erro => showSnackbar(
        erro.message,
        'error',
        'i'
      ))
    if (networkError) showSnackbar(
      networkError.message,
      'error',
      's'
    )

    console.warn("[ApolloClient][Error]: ", Error)
  });

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

  Container.set(FASTING.ApolloClient, client);
}