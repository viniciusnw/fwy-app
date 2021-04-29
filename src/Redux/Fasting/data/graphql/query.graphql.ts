import { Service } from 'typedi';
import { GraphqlApi, countriesAndStatesVariables } from '@Config/graphql';

import countriesAndStatesQuery from './docs/countriesAndStates.query.graphql'

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
}