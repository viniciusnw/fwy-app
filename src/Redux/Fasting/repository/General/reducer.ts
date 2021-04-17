import { GeneralState } from './state'

import countries from './countries.reducer'
import states from './states.reducer'

export default function reducer(
  state = GeneralState,
  action,
) {
  const { type } = action
  const actionName = type.split('_')[0];

  switch (actionName) {
    case countries.actionName: return countries.reducer(state, action)
    case states.actionName: return states.reducer(state, action)
    default: return state
  }
}
