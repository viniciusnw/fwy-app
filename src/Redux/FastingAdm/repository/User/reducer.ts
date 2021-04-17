import { UserState } from './state'

export default function reducer(
  state = UserState,
  action,
) {
  switch (action.type) {
    case 'LOGIN_PENDING': {
      return {
        ...state,
        login: {
          ...state.login,
          loading: true,
          success: false,
          error: false,
        }
      };
    }

    case 'LOGIN_FULFILLED': {
      return {
        ...state,
        login: {
          loading: false,
          success: true,
          error: false,
        },
        data: action.payload,
      };
    }

    case 'LOGIN_REJECTED': {
      return {
        ...state,
        login: {
          loading: false,
          success: false,
          error: action.payload,
        },
        data: null
      };
    }

    default: return state;
  }
}
