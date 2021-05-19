export default {
  actionName: 'GET-FAST',
  reducer: (state, action) => {
    switch (action.type) {

      case 'GET-FAST_PENDING': {
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

      case 'GET-FAST_FULFILLED': {
        return {
          ...state,
          getFastings: {
            loading: false,
            success: true,
            error: false,
            errorMessage: null,
          },
          fasting: {
            ...action.payload[0],
            endDate: new Date(action.payload[0].endDate),
            startDate: new Date(action.payload[0].startDate)
          }
        };
      }

      case 'GET-FAST_REJECTED': {
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