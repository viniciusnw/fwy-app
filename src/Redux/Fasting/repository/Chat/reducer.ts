import { ChatState } from './state'

export default function reducer(
  state = ChatState,
  action,
) {
  switch (action.type) {

    case 'WS_CONN': {
      return {
        ...state,
        ws: action.payload,
      };
    }


    default: return state;
  }
}
