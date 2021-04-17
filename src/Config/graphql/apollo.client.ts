import { Container } from 'typedi';
import { FetchResult } from '@apollo/client/link/core';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export class GraphqlApi {

  protected ApolloClient: ApolloClient<InMemoryCache>

  constructor() {
    this.ApolloClient = Container.get('APOLLO_CLIENT');
  }

  protected mapResponse(response: FetchResult<any>, reponseObjName: string) {
    try {
      return response.data[reponseObjName]
    }
    catch (err) {
      return Promise.reject(err)
    }
  }

  protected mapError(err) {
    try {
      return Promise.reject(err.message)
    }
    catch (e) {
      return Promise.reject({ ...err, ...e })
    }
  }
}