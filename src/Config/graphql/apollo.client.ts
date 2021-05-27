import { Container } from 'typedi';
// import { FetchResult } from '@apollo/client/link/core';
// import { ApolloClient, InMemoryCache } from '@apollo/client';

import {  FetchResult } from 'apollo-link';
import { ApolloClient, ApolloError } from 'apollo-client';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';

export class GraphqlApi {

  protected ApolloClient: ApolloClient<NormalizedCacheObject>

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

  protected mapError(err: ApolloError) {
    try {
      return Promise.reject(err.message)
    }
    catch (e) {
      return Promise.reject({ ...err, ...e })
    }
  }
}