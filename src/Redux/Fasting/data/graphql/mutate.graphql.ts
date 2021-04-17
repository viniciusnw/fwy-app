import { Service } from 'typedi';
import { Store } from '@Redux/Store';
import { APP_NAME_TYPE } from '@Config/types';

import { GraphqlApi, customerLoginVariables, customerRegisterVariables, updateCustomerVariables } from '@Config/graphql'

import customerLoginMutate from './docs/customerLogin.mutate.graphql'
import customerRegisterMutate from './docs/customerRegister.mutate.graphql'
import customerUpdateMutate from './docs/customerUpdate.mutate.graphql'

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
    }).then(response => this.mapResponse(response, 'customerLogin'))
      .catch(err => this.mapError(err))
  }

  public update = (params: updateCustomerVariables) => {
    return this.ApolloClient.mutate({
      mutation: customerUpdateMutate,
      variables: params,
    }).then(response => this.mapResponse(response, 'customerUpdate'))
      .catch(err => this.mapError(err))
  }
}