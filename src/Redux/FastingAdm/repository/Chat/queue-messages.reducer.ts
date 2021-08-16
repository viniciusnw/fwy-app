export default {
  actionName: 'ADD-QUEUE-MESSAGES',
  actionName2: 'COMPLETE-QUEUE-MESSAGES',
  actionName3: 'NEW-MESSAGE',
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
            ...state.chat,
            messageQueue: state.chat.messageQueue.splice(action.payload, 1),
          }
        };
      }

      case 'NEW-MESSAGE': {
        return {
          ...state,
          chat: {
            ...state.chat,
            messages: [...state.chat.messages, {
              ...action.payload,
              date: new Date(action.payload.date)
            }],
          }
        };
      }
      default: return state;
    }
  }
}