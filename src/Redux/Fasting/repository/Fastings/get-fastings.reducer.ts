export default {
  actionName: 'GET-FASTS',
  reducer: (state, action) => {
    switch (action.type) {

      case 'GET-FASTS_PENDING': {
        return {
          ...state,
          getFastings: {
            loading: true,
            success: false,
            error: false,
            errorMessage: null,
          }
        };
      }

      case 'GET-FASTS_FULFILLED': {
        return {
          ...state,
          getFastings: {
            loading: false,
            success: true,
            error: false,
            errorMessage: null,
            data: action.payload
          },
          fasting: state.fasting
        };
      }

      case 'GET-FASTS_REJECTED': {
        return {
          ...state,
          getFastings: {
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