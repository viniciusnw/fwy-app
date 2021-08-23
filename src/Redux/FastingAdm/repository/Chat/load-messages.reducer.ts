export default {
  actionName: 'LOAD-MESSAGES',
  reducer: (state, action) => {
    switch (action.type) {
      case 'LOAD-MESSAGES_PENDING': {
        return {
          ...state,
          loadMessages: {
            loading: true,
            success: false,
            error: false,
            errorMessage: null,
          }
        };
      }

      case 'LOAD-MESSAGES_FULFILLED': {
        return {
          ...state,
          loadMessages: {
            loading: false,
            success: true,
            nextPagination: action.payload.nextPagination,
            error: false,
            errorMessage: null,
          },
          chat: {
            ...state.chat,
            messages: action.payload.messages.map(message => ({
              ...message,
              date: new Date(message.date)
            })),
          }
        };
      }

      case 'LOAD-MESSAGES_REJECTED': {
        return {
          ...state,
          loadMessages: {
            loading: false,
            success: false,
            error: true,
            errorMessage: action.payload,
          },
        };
      }

      default: return state;
    }
  }
}