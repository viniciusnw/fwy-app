export default {
  actionName: 'CREATE-FAST',
  actionName2: 'RESET-FAST',
  reducer: (state, action) => {
    switch (action.type) {

      case 'RESET-FAST': {
        return {
          ...state,
          createFasting: {
            loading: false,
            success: false,
            error: false,
            errorMessage: null,
          },
          endFasting: {
            loading: false,
            success: false,
            error: false,
            errorMessage: null,
          },
          fasting: null
        };
      }

      case 'CREATE-FAST_PENDING': {
        return {
          ...state,
          createFasting: {
            loading: true,
            success: false,
            error: false,
            errorMessage: null,
          }
        };
      }

      case 'CREATE-FAST_FULFILLED': {
        return {
          ...state,
          createFasting: {
            loading: false,
            success: true,
            error: false,
            errorMessage: null,
            data: action.payload
          },
        };
      }

      case 'CREATE-FAST_REJECTED': {
        return {
          ...state,
          createFasting: {
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