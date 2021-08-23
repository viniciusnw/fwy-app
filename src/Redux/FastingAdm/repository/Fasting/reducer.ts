import { FastingState } from './state'

import last from './last.reducer'

export default function reducer(
  state = FastingState,
  action,
) {
  const { type } = action
  const actionName = type.split('_')[0];

  switch (actionName) {
    case last.actionName: return last.reducer(state, action)
    default: return state
  }

}
