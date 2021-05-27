import { FastingsState } from './state'

import fastingGet from './get-fasting.reducer'
import fastingEnd from './end-fasting.reducer'
import fastingPresets from './get-presets.reducer'
import fastingsActive from './get-actives.reducer'
import fastingCreate from './create-fasting.reducer'

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
    case fastingPresets.actionName: return fastingPresets.reducer(state, action)
    
    case fastingEnd.actionName: return fastingEnd.reducer(state, action)

    case fastingsActive.actionName: return fastingsActive.reducer(state, action)
    default: return state
  }
}
