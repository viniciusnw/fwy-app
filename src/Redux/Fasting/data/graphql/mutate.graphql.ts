import { Service } from 'typedi';
import { Store } from '@Redux/Store';
import { APP_NAME_TYPE } from '@Config/types';

import {
  GraphqlApi,
  endFastingVariables,
  editFastingVariables,
  createPresetVariables,
  updatePresetVariables,
  createFastingVariables,
  customerLoginVariables,
  customerUpdateVariables,
  sendChatMessageVariables,
  customerRegisterVariables,
} from '@Config/graphql'

import customerLoginMutate from './docs/customerLogin.mutate.graphql'
import customerRegisterMutate from './docs/customerRegister.mutate.graphql'
import customerUpdateMutate from './docs/customerUpdate.mutate.graphql'
import sendChatMessageMutate from './docs/sendChatMessage.mutate.graphql'
import createFastingMutate from './docs/createFasting.mutate.graphql'
import endFastingMutate from './docs/endFasting.mutate.graphql'
import editFastingMutate from './docs/editFasting.mutate.graphql'
import editStartEndFastingMutate from './docs/editStartEndFasting.mutate.graphql'
import createPresetMutate from './docs/createPreset.mutate.graphql'
import updatePresetMutate from './docs/updatePreset.mutate.graphql'

@Service()
export class Mutate extends GraphqlApi {

  public _example = async (params: any) => {
    const { store } = Store[APP_NAME_TYPE.FASTING];
    console.log(params)
    console.log(customerLoginMutate)
    console.log(store.getState())
    console.log(this.ApolloClient)
  }

  public register = (params: customerRegisterVariables) => {
    return this.ApolloClient.mutate({
      mutation: customerRegisterMutate,
      variables: params,
    }).then(response => this.mapResponse(response, 'customerRegister'))
      .catch(err => this.mapError(err))
  }

  public login = (params: customerLoginVariables) => {
    return this.ApolloClient.mutate({
      mutation: customerLoginMutate,
      variables: params,
    }).then(response => ({
      lastUser: params,
      response: this.mapResponse(response, 'customerLogin')
    })).catch(err => this.mapError(err))
  }

  public update = (params: customerUpdateVariables) => {
    return this.ApolloClient.mutate({
      mutation: customerUpdateMutate,
      variables: params,
    }).then(response => this.mapResponse(response, 'customerUpdate'))
      .catch(err => this.mapError(err))
  }

  public sendChatMessage = (params: sendChatMessageVariables) => {
    return this.ApolloClient.mutate({
      mutation: sendChatMessageMutate,
      variables: params,
    }).then(response => this.mapResponse(response, 'sendChatMessage'))
      .catch(err => this.mapError(err))
  }

  public createFasting = (params: createFastingVariables) => {
    return this.ApolloClient.mutate({
      mutation: createFastingMutate,
      variables: params,
    }).then(response => this.mapResponse(response, 'createFasting'))
      .catch(err => this.mapError(err))
  }

  public endFasting = (params: endFastingVariables) => {
    return this.ApolloClient.mutate({
      mutation: endFastingMutate,
      variables: params,
    }).then(response => this.mapResponse(response, 'endFasting'))
      .catch(err => this.mapError(err))
  }

  public editFasting = (params: editFastingVariables) => {
    return this.ApolloClient.mutate({
      mutation: editFastingMutate,
      variables: params,
      fetchPolicy: 'no-cache',
    }).then(response => this.mapResponse(response, 'editFasting'))
      .catch(err => this.mapError(err))
  }

  public editStartEndFasting = (params: editFastingVariables) => {
    return this.ApolloClient.mutate({
      mutation: editStartEndFastingMutate,
      variables: params,
      fetchPolicy: 'no-cache',
    }).then(response => this.mapResponse(response, 'editStartEndFasting'))
      .catch(err => this.mapError(err))
  }

  public createPreset = (params: createPresetVariables) => {
    return this.ApolloClient.mutate({
      mutation: createPresetMutate,
      variables: params,
    }).then(response => this.mapResponse(response, 'createPreset'))
      .catch(err => this.mapError(err))
  }

  public updatePreset = (params: updatePresetVariables) => {
    return this.ApolloClient.mutate({
      mutation: updatePresetMutate,
      variables: params,
    }).then(response => this.mapResponse(response, 'updatePreset'))
      .catch(err => this.mapError(err))
  }
}