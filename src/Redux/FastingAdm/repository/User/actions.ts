import { Container } from 'typedi';
import { Mutate } from '@Redux/FastingAdm/data/graphql'

import {
  customerLoginVariables,
  customerUpdateVariables
} from '@Config/graphql'

export default {

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

  logout: () => {
    return {
      type: 'LOGOUT',
    };
  },
};
