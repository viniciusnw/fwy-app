import { Container } from 'typedi';
import { Mutate, Query } from '@Redux/Fasting/data/graphql'

import { countriesAndStatesVariables } from '@Config/graphql'

export default {

  getStates: (params: countriesAndStatesVariables) => {
    return {
      type: 'STATES',
      payload: () => Container.get(Query).countriesAndStates(params)
    };
  },

  getCountries: (params: countriesAndStatesVariables) => {
    return {
      type: 'COUNTRIES',
      payload: () => Container.get(Query).countriesAndStates(params)
    };
  },
};
