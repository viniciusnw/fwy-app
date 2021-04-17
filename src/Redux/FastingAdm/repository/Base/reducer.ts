import { BaseState } from './state'

export default function reducer(
  state = BaseState,
  action,
) {
  switch (action.type) {

    case 'WS_STATUS': {
      return {
        ...state,
        ws_status: action.payload,
      };
    }

    default: return state;
  }
}
