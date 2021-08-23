export default {
  actionName: 'LAST-FASTING',
  reducer: (state, action) => {
    switch (action.type) {
      case 'LAST-FASTING_PENDING': {
        return {
          ...state,
          last: {
            loading: true,
            error: false,
            success: false,
            errorMessage: null,
            data: null,
          }
        };
      }

      case 'LAST-FASTING_FULFILLED': {
        return {
          ...state,
          last: {
            error: false,
            success: true,
            loading: false,
            errorMessage: null,
            data: {
              ...action.payload[0],
              endDate: new Date(action.payload[0].endDate),
              startDate: new Date(action.payload[0].startDate)
            },
          },
        };
      }

      case 'LAST-FASTING_REJECTED': {
        return {
          ...state,
          last: {
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