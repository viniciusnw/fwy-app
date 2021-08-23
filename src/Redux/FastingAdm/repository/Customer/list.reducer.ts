export default {
  actionName: 'LIST-CUSTOMER',
  reducer: (state, action) => {
    switch (action.type) {
      case 'LIST-CUSTOMER_PENDING': {
        return {
          ...state,
          list: {
            loading: true,
            error: false,
            success: false,
            errorMessage: null,
            data: state.list.data,
          }
        };
      }

      case 'LIST-CUSTOMER_FULFILLED': {
        return {
          ...state,
          list: {
            error: false,
            success: true,
            loading: false,
            errorMessage: null,
            data: action.payload,
          },
        };
      }

      case 'LIST-CUSTOMER_REJECTED': {
        return {
          ...state,
          list: {
            loading: false,
            success: false,
            error: true,
            data: state.list.data,
            errorMessage: action.payload,
          },
        };
      }
      default: return state;
    }
  }
}