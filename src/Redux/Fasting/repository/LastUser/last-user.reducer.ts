export default {
  actionName: 'LOGIN',
  actionName2: 'REGISTER',
  reducer: (state, action) => {
    switch (action.type) {
      case 'LOGIN_FULFILLED': {
        return {
          ...state,
          user: action.payload.lastUser
        };
      }

      case 'REGISTER_FULFILLED': {
        return {
          ...state,
          user: {
            email: action.payload.email
          }
        };
      }
      default: return state;
    }
  }
}