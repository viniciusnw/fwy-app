import { Container } from 'typedi';
import { Mutate } from '@Redux/Fasting/data/graphql'

import { customerLoginVariables, customerRegisterVariables, customerUpdateVariables, setCustomerConfigsVariables } from '@Config/graphql'

export default {

  register: (params: customerRegisterVariables) => {
    return {
      type: 'REGISTER',
      payload: () => Container.get(Mutate).register(params)
    };
  },

  login: (params: customerLoginVariables) => {
    return {
      type: 'LOGIN',
      payload: () => Container.get(Mutate).login(params)
    };
  },

  update: (params: customerUpdateVariables) => {
    return {
      type: 'UPDATE',
      payload: () => Container.get(Mutate).update(params)
    };
  },

  updateConfig: (params: setCustomerConfigsVariables) => {
    return {
      type: 'UPDATE-CONFIG',
      payload: () => Container.get(Mutate).updateConfig(params)
    };
  },

  logout: () => {
    return {
      type: 'LOGOUT',
    };
  },
};
