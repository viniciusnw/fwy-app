export default {
  actionName: 'END-FAST',
  reducer: (state, action) => {
    switch (action.type) {

      case 'END-FAST_PENDING': {
        return {
          ...state,
          endFasting: {
            loading: true,
            success: false,
            error: false,
            errorMessage: null,
          }
        };
      }

      case 'END-FAST_FULFILLED': {
        return {
          ...state,
          endFasting: {
            loading: false,
            success: true,
            error: false,
            errorMessage: null,
          },
          fasting: null
        };
      }

      case 'END-FAST_REJECTED': {
        return {
          ...state,
          endFasting: {
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