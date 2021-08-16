export default {
  actionName: 'LOGIN',
  reducer: (state, action) => {
    switch (action.type) {
      case 'LOGIN_FULFILLED': {
        return {
          ...state,
          user: action.payload.lastUser
        };
      }

      default: return state;
    }
  }
}