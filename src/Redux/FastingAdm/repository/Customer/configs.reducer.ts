export default {
  actionName: 'CUSTOMER-CONFIGS',
  reducer: (state, action) => {
    switch (action.type) {
      case 'CUSTOMER-CONFIGS_PENDING': {
        return {
          ...state,
          configs: {
            loading: true,
            error: false,
            success: false,
            errorMessage: null,
            data: null
          }
        };
      }

      case 'CUSTOMER-CONFIGS_FULFILLED': {
        console.log('CUSTOMER-CONFIGS_FULFILLED', action.payload)
        return {
          ...state,
          configs: {
            error: false,
            success: true,
            loading: false,
            errorMessage: null,
            data: action.payload,
          },
          customer: {
            ...state.customer,
            data: {
              ...state.customer.data,
              configs: action.payload
            }
          }
        };
      }

      case 'CUSTOMER-CONFIGS_REJECTED': {
        return {
          ...state,
          search: {
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