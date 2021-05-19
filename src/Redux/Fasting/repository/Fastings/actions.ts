import { Container } from 'typedi';
import { Mutate, Query } from '@Redux/Fasting/data/graphql'

import { createFastingVariables, getFastsVariables } from '@Config/graphql'

export default {

  clearFasting: () => {
    return {
      type: 'RESET-FAST',
    };
  },

  getFastings: (params: getFastsVariables) => {
    return {
      type: 'GET-FAST',
      payload: () => Container.get(Query).getFasts(params),
    };
  },

  createFasting: (params: createFastingVariables) => {
    return {
      type: 'CREATE-FAST',
      payload: () => Container.get(Mutate).createFasting(params)
    };
  },
};
