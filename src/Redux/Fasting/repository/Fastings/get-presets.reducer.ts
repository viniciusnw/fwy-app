export default {
  actionName: 'GET-PRESETS',
  reducer: (state, action) => {
    switch (action.type) {

      case 'GET-PRESETS_PENDING': {
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

      case 'GET-PRESETS_FULFILLED': {
        return {
          ...state,
          getFastings: {
            loading: false,
            success: true,
            error: false,
            errorMessage: null,
          },
          presets: action.payload
        };
      }

      case 'GET-PRESETS_REJECTED': {
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