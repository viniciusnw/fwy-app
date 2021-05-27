export default {
  actionName: 'GET-ACTIVES',
  reducer: (state, action) => {
    switch (action.type) {

      case 'GET-ACTIVES_PENDING': {
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

      case 'GET-ACTIVES_FULFILLED': {
        return {
          ...state,
          getFastings: {
            loading: false,
            success: true,
            error: false,
            errorMessage: null,
          },
          fastings: action.payload.map(f => ({
            ...f,
            endDate: new Date(f.endDate),
            startDate: new Date(f.startDate)
          }))
        };
      }

      case 'GET-ACTIVES_REJECTED': {
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