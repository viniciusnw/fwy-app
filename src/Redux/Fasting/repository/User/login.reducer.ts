export default {
  actionName: 'LOGIN',
  reducer: (state, action) => {
    switch (action.type) {
      case 'LOGIN_PENDING': {
        return {
          ...state,
          login: {
            loading: true,
            success: false,
            error: false,
          }
        };
      }

      case 'LOGIN_FULFILLED': {
        return {
          ...state,
          login: {
            loading: false,
            success: true,
            error: false,
          },
          error: null,
          data: action.payload,
        };
      }

      case 'LOGIN_REJECTED': {
        return {
          ...state,
          login: {
            loading: false,
            success: false,
            error: true,
          },
          data: null,
          error: action.payload,
        };
      }

      default: return state;
    }
  }
}