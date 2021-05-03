export default {
  actionName: 'LOAD-MORE-MESSAGES',
  reducer: (state, action) => {
    switch (action.type) {
      case 'LOAD-MORE-MESSAGES_PENDING': {
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

      case 'LOAD-MORE-MESSAGES_FULFILLED': {
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
            messages: [...action.payload.messages, ...state.chat.messages],
          }
        };
      }

      case 'LOAD-MORE-MESSAGES_REJECTED': {
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