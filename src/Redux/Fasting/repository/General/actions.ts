import { Container } from 'typedi';
import ReconnectingWebSocket from 'reconnecting-websocket';

import { Mutate, Query } from '@Redux/Fasting/data/graphql'
import { countriesAndStatesVariables } from '@Config/graphql'

export default {

  changeTimerToDisplay: () => {
    return {
      type: 'TIMER-PAGE-TIMER-DISPLAY',
    };
  },

  saveWs: (params: ReconnectingWebSocket | null) => {
    return {
      type: 'WS-CONN',
      payload: params,
    };
  },

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
