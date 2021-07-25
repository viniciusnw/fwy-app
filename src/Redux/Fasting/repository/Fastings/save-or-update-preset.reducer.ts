export default {
  actionName: 'SAVE-OR-UPDATE-PRESET',
  reducer: (state, action) => {
    switch (action.type) {

      case 'SAVE-OR-UPDATE-PRESET_PENDING': {
        return {
          ...state,
          saveOrUpdatePreset: {
            loading: true,
            success: false,
            error: false,
            errorMessage: null,
          }
        };
      }

      case 'SAVE-OR-UPDATE-PRESET_FULFILLED': {
        return {
          ...state,
          saveOrUpdatePreset: {
            loading: false,
            success: true,
            error: false,
            errorMessage: null,
          },
        };
      }

      case 'SAVE-OR-UPDATE-PRESET_REJECTED': {
        return {
          ...state,
          saveOrUpdatePreset: {
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