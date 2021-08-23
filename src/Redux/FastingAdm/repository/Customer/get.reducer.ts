export default {
  actionName: 'GET-CUSTOMER',
  reducer: (state, action) => {
    switch (action.type) {
      case 'GET-CUSTOMER_PENDING': {
        return {
          ...state,
          customer: {
            loading: true,
            error: false,
            success: false,
            errorMessage: null,
            data: null,
          }
        };
      }

      case 'GET-CUSTOMER_FULFILLED': {
        return {
          ...state,
          customer: {
            error: false,
            success: true,
            loading: false,
            errorMessage: null,
            data: action.payload,
          },
        };
      }

      case 'GET-CUSTOMER_REJECTED': {
        return {
          ...state,
          customer: {
            loading: false,
            success: false,
            error: true,
            data: null,
            errorMessage: action.payload,
          },
        };
      }
      default: return state;
    }
  }
}