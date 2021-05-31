export default {
  actionName: 'EDIT-FAST',
  reducer: (state, action) => {
    switch (action.type) {

      case 'EDIT-FAST_PENDING': {
        return {
          ...state,
          editFasting: {
            loading: true,
            success: false,
            error: false,
            errorMessage: null,
          }
        };
      }

      case 'EDIT-FAST_FULFILLED': {
        return {
          ...state,
          editFasting: {
            loading: false,
            success: true,
            error: false,
            errorMessage: null,
          },
          fasting: mapEditFast(state.fasting, action.payload)
        };
      }

      case 'EDIT-FAST_REJECTED': {
        return {
          ...state,
          editFasting: {
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

function mapEditFast(oldFasting: any, responsePayload: any) {

  let fasting
  if (responsePayload?.startDate)
    fasting = {
      ...oldFasting,
      startDate: new Date(responsePayload.startDate)
    }

  if (responsePayload?.endDate)
    fasting = {
      ...oldFasting,
      endDate: new Date(responsePayload.endDate)
    }

  return fasting
}