import { Container } from 'typedi';
import { Mutate, Query } from '@Redux/Fasting/data/graphql'

import { MessageQueue, Message } from './state'
import { sendChatMessageVariables, getChatMessagesVariables } from '@Config/graphql'

export default {

  newChatMessage: (params: Message) => {
    return {
      type: 'NEW-MESSAGE',
      payload: params,
    };
  },

  addQueueChatMessage: (params: MessageQueue) => {
    return {
      type: 'ADD-QUEUE-MESSAGES',
      payload: params,
    };
  },

  completeQueueChatMessage: (params: { message: Message, index: number }) => {
    return {
      type: 'COMPLETE-QUEUE-MESSAGES',
      payload: params,
    };
  },

  sendChatMessage: (params: sendChatMessageVariables) => {
    return {
      type: 'SEND-MESSAGES',
      payload: Container.get(Mutate).sendChatMessage(params),
    };
  },

  getChatMessages: (params: getChatMessagesVariables) => {
    return {
      type: 'LOAD-MESSAGES',
      payload: Container.get(Query).getChatMessages(params),
    };
  },

  getMoreChatMessages: (params: getChatMessagesVariables) => {
    return {
      type: 'LOAD-MORE-MESSAGES',
      payload: Container.get(Query).getChatMessages(params),
    };
  },
};
