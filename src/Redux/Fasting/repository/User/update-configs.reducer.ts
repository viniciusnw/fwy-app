export default {
  actionName: 'UPDATE-CONFIG',
  reducer: (state, action) => {
    switch (action.type) {
      case 'UPDATE-CONFIG_PENDING': {
        return {
          ...state,
          configs: {
            loading: true,
            success: false,
            error: false,
          }
        };
      }

      case 'UPDATE-CONFIG_FULFILLED': {
        return {
          ...state,
          configs: {
            loading: false,
            success: true,
            error: false,
            data: action.payload,
          },
        };
      }

      case 'UPDATE-CONFIG_REJECTED': {
        return {
          ...state,
          configs: {
            loading: false,
            success: false,
            error: true,
          },
        };
      }

      default: return state;
    }
  }
}