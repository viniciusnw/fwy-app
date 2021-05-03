export default {
  actionName: 'ADD-QUEUE-MESSAGES',
  actionName2: 'COMPLETE-QUEUE-MESSAGES',
  reducer: (state, action) => {
    switch (action.type) {
      case 'ADD-QUEUE-MESSAGES': {
        return {
          ...state,
          chat: {
            ...state.chat,
            messageQueue: [...state.chat.messageQueue, action.payload]
          }
        };
      }

      case 'COMPLETE-QUEUE-MESSAGES': {
        return {
          ...state,
          sendMessages: {
            loading: false,
            success: false,
            error: false,
            errorMessage: null,
          },
          chat: {
            chat: {
              ...state.chat,
              messages: [...state.chat.menssages, action.payload.message],
              messageQueue: state.chat.messageQueue.splice(action.payload.index, 1),
            }
          }
        };
      }
      default: return state;
    }
  }
}