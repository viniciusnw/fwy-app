export default {
  actionName: 'SEND-MESSAGES',
  reducer: (state, action) => {
    switch (action.type) {
      case 'SEND-MESSAGES_PENDING': {
        return {
          ...state,
          sendMessages: {
            loading: true,
            success: false,
            error: false,
            errorMessage: null,
          }
        };
      }

      case 'SEND-MESSAGES_FULFILLED': {
        return {
          ...state,
          sendMessages: {
            loading: false,
            success: true,
            error: false,
            errorMessage: null,
          },
        };
      }

      case 'SEND-MESSAGES_REJECTED': {
        return {
          ...state,
          sendMessages: {
            loading: true,
            success: false,
            error: true,
            errorMessage: action.payload,
          }
        };
      }

      default: return state;
    }
  }
}