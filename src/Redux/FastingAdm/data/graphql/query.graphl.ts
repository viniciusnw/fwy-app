import { Container } from 'typedi';
import { Store } from '@Redux/Store';
import { APP_NAME_TYPE } from '@Config/types';
import { GraphqlApi } from '@Config/graphql';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export class Query extends GraphqlApi {

  public login = (params) => {
    const { store } = Store[APP_NAME_TYPE.FASTING];

    console.log(params)
    console.log(store.getState())
    console.log(this.ApolloClient)

    // return new Promise((res) => setTimeout(() => res({ name: 'teste' }), 1500))
  }
}