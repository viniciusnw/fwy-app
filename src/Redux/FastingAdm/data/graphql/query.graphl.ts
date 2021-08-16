import { Service } from 'typedi';
import { Store } from '@Redux/Store';
import { APP_NAME_TYPE } from '@Config/types';

import {
  GraphqlApi,
  listCustomersVariables,
  getChatMessagesVariables
} from '@Config/graphql'

import listCustomersQuery from './docs/listCustomers.query.graphql'
import getChatMessagesQuery from './../../../Fasting/data/graphql/docs/getChatMessages.query.graphql'
@Service()
export class Query extends GraphqlApi {

  public test = (params) => {
    const { store } = Store[APP_NAME_TYPE.FASTING_ADM];

    console.log(params)
    console.log(store.getState())
    console.log(this.ApolloClient)

    // return new Promise((res) => setTimeout(() => res({ name: 'teste' }), 1500))
  }

  public listCustomers = (params: listCustomersVariables) => {
    return this.ApolloClient.query({
      query: listCustomersQuery,
      variables: params,
    }).then(response => this.mapResponse(response, 'listCustomers'))
      .catch(err => this.mapError(err))
  }

  public getChatMessages = (params: getChatMessagesVariables) => {
    return this.ApolloClient.query({
      query: getChatMessagesQuery,
      variables: params,
      fetchPolicy: 'network-only'
    }).then(response => this.mapResponse(response, 'getChatMessages'))
      .catch(err => this.mapError(err))
  }
}