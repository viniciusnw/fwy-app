export default {
  actionName: 'REGISTER',
  reducer: (state, action) => {
    switch (action.type) {
      case 'REGISTER_PENDING': {
        return {
          ...state,
          register: {
            loading: true,
            success: false,
            error: false,
          }
        };
      }

      case 'REGISTER_FULFILLED': {
        return {
          ...state,
          register: {
            loading: false,
            success: true,
            error: false,
          },
          error: null,
          data: action.payload,
        };
      }

      case 'REGISTER_REJECTED': {
        return {
          ...state,
          register: {
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