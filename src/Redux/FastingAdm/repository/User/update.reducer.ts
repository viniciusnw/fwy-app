export default {
  actionName: 'UPDATE',
  reducer: (state, action) => {
    switch (action.type) {
      case 'UPDATE_PENDING': {
        return {
          ...state,
          update: {
            loading: true,
            success: false,
            error: false,
          }
        };
      }

      case 'UPDATE_FULFILLED': {
        return {
          ...state,
          update: {
            loading: false,
            success: true,
            error: false,
          },
          errorMessage: null,
          data: action.payload,
        };
      }

      case 'UPDATE_REJECTED': {
        return {
          ...state,
          update: {
            loading: false,
            success: false,
            error: true,
          },
          errorMessage: action.payload,
        };
      }

      default: return state;
    }
  }
}