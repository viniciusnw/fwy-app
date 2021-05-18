import { Container } from 'typedi';
import { Mutate, Query } from '@Redux/Fasting/data/graphql'

import { Fasting } from './state'
import { sendChatMessageVariables, getChatMessagesVariables } from '@Config/graphql'

export default {

  clearFasting: () => {
    return {
      type: 'RESET-FAST',
    };
  },

  getFastings: (params: string) => {
    return {
      type: 'GET-FASTS',
      payload: () => Promise.resolve(params),
    };
  },

  createFasting: (params: Fasting) => {
    return {
      type: 'CREATE-FAST',
      payload: () => Promise.resolve({
        id: 'stringFastingIdMock',
        fasting: params
      }),
    };
  },
};
