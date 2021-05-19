import { Container } from 'typedi';
import { Mutate, Query } from '@Redux/Fasting/data/graphql'

import { createFastingVariables, getFastsVariables } from '@Config/graphql'

export default {

  clearFasting: () => {
    return {
      type: 'RESET-FAST',
    };
  },

  getFasting: (params: getFastsVariables) => {
    return {
      type: 'GET-FAST',
      payload: () => Container.get(Query).getFasts(params),
    };
  },

  getActives: () => {
    return {
      type: 'GET-ACTIVES',
      payload: () => Container.get(Query).getFasts({ actives: true }),
    };
  },

  createFasting: (params: createFastingVariables) => {
    return {
      type: 'CREATE-FAST',
      payload: () => Container.get(Mutate).createFasting(params)
    };
  },
};
