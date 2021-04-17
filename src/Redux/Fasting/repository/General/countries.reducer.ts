export default {
  actionName: 'COUNTRIES',
  reducer: (state, action) => {
    switch (action.type) {
      case 'COUNTRIES_PENDING': {
        return {
          ...state,
          countries: {
            loading: true,
            success: false,
            error: false,
            data: null,
            errorMessage: null
          }
        };
      }

      case 'COUNTRIES_FULFILLED': {
        return {
          ...state,
          countries: {
            loading: false,
            success: true,
            error: false,
            errorMessage: null,
            data: action.payload,
          }
        };
      }

      case 'COUNTRIES_REJECTED': {
        return {
          ...state,
          countries: {
            loading: false,
            success: false,
            error: true,
            data: null,
            errorMessage: action.payload
          }
        };
      }

      default: return state;
    }
  }
}