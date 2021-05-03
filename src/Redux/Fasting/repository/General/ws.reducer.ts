export default {
  actionName: 'WS-CONN',
  reducer: (state, action) => {
    switch (action.type) {
      case 'WS-CONN': {
        return {
          ...state,
          ws: action.payload,
        };
      }

      default: return state;
    }
  }
}