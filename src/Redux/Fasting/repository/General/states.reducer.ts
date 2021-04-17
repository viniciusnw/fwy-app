export default {
  actionName: 'STATES',
  reducer: (state, action) => {
    switch (action.type) {
      case 'STATES_PENDING': {
        return {
          ...state,
          states: {
            loading: true,
            success: false,
            error: false,
            data: null,
            errorMessage: null
          }
        };
      }

      case 'STATES_FULFILLED': {
        return {
          ...state,
          states: {
            loading: false,
            success: true,
            error: false,
            errorMessage: null,
            data: action.payload,
          },
        };
      }

      case 'STATES_REJECTED': {
        return {
          ...state,
          states: {
            loading: false,
            success: false,
            error: true,
            data: null,
            errorMessage: action.payload
          },
        };
      }

      default: return state;
    }
  }
}