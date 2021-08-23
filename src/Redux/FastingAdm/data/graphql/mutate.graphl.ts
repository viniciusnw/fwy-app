import { Service } from 'typedi';
import {
  GraphqlApi,
  sendChatMessageVariables,
  customerUpdateVariables,
  customerLoginVariables
} from '@Config/graphql'

import customerLoginMutate from './../../../Fasting/data/graphql/docs/customerLogin.mutate.graphql'
import sendChatMessageMutate from './../../../Fasting/data/graphql/docs/sendChatMessage.mutate.graphql'
import customerUpdateMutate from './../../../Fasting/data/graphql/docs/customerUpdate.mutate.graphql'

@Service()
export class Mutate extends GraphqlApi {

  public login = (params: customerLoginVariables) => {
    return this.ApolloClient.mutate({
      mutation: customerLoginMutate,
      variables: params,
    }).then(response => ({
      lastUser: params,
      response: this.mapResponse(response, 'customerLogin')
    })).catch(err => this.mapError(err))
  }

  public sendChatMessage = (params: sendChatMessageVariables) => {
    return this.ApolloClient.mutate({
      mutation: sendChatMessageMutate,
      variables: params,
    }).then(response => this.mapResponse(response, 'sendChatMessage'))
      .catch(err => this.mapError(err))
  }

  public update = (params: customerUpdateVariables) => {
    return this.ApolloClient.mutate({
      mutation: customerUpdateMutate,
      variables: params,
    }).then(response => this.mapResponse(response, 'customerUpdate'))
      .catch(err => this.mapError(err))
  }
}