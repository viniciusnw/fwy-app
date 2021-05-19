import { FastingsState } from './state'

import fastingCreate from './create-fasting.reducer'
import fastingGet from './get-fastings.reducer'

export default function reducer(
  state = FastingsState,
  action,
) {
  const { type } = action
  const actionName = type.split('_')[0];

  switch (actionName) {
    case fastingCreate.actionName: return fastingCreate.reducer(state, action)
    case fastingCreate.actionName2: return fastingCreate.reducer(state, action)
    
    case fastingGet.actionName: return fastingGet.reducer(state, action)
    default: return state
  }
}
