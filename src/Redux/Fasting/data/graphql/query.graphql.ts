import { Service } from 'typedi';
import {
  GraphqlApi,
  countriesAndStatesVariables,
  getChatMessagesVariables
} from '@Config/graphql';

import countriesAndStatesQuery from './docs/countriesAndStates.query.graphql'
import getChatMessagesQuery from './docs/getChatMessages.query.graphql'

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

  public getChatMessagesQuery = (params: getChatMessagesVariables) => {
    return this.ApolloClient.query({
      query: getChatMessagesQuery,
      variables: params,
    }).then(response => this.mapResponse(response, 'getChatMessages'))
      .catch(err => this.mapError(err))
  }
}