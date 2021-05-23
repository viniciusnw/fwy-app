import { Service } from 'typedi';
import {
  GraphqlApi,
  getFastsVariables,
  getChatMessagesVariables,
  countriesAndStatesVariables,
} from '@Config/graphql';

import countriesAndStatesQuery from './docs/countriesAndStates.query.graphql'
import getChatMessagesQuery from './docs/getChatMessages.query.graphql'
import getFastsQuery from './docs/getFasts.query.graphql'
import getPresetsQuery from './docs/getPresets.query.graphql'

@Service()
export class Query extends GraphqlApi {

  public countriesAndStates = (params: countriesAndStatesVariables) => {
    return this.ApolloClient.query({
      query: countriesAndStatesQuery,
      variables: params,
      fetchPolicy: 'cache-first',
    }).then(response => this.mapResponse(response, 'countriesAndStates'))
      .catch(err => this.mapError(err))
  }

  public getChatMessages = (params: getChatMessagesVariables) => {
    return this.ApolloClient.query({
      query: getChatMessagesQuery,
      variables: params,
    }).then(response => this.mapResponse(response, 'getChatMessages'))
      .catch(err => this.mapError(err))
  }

  public getFasts = (params: getFastsVariables) => {
    return this.ApolloClient.query({
      query: getFastsQuery,
      variables: params,
    }).then(response => this.mapResponse(response, 'getFasts'))
      .catch(err => this.mapError(err))
  }

  public getPresets = () => {
    return this.ApolloClient.query({
      query: getPresetsQuery
    }).then(response => this.mapResponse(response, 'getPresets'))
      .catch(err => this.mapError(err))
  }
}