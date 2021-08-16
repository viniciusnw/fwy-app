import { GeneralState } from './state'

import ws from './ws.reducer'

export default function reducer(
  state = GeneralState,
  action,
) {
  const { type } = action
  const actionName = type.split('_')[0];

  switch (actionName) {
    case ws.actionName: return ws.reducer(state, action)
    default: return state
  }
}
