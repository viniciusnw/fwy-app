import { UserState } from './state'

import login from './login.reducer'
import register from './register.reducer'
import update from './update.reducer'
import updateConfigs from './update-configs.reducer'

export default function reducer(
  state = UserState,
  action,
) {
  const { type } = action
  const actionName = type.split('_')[0];

  switch (actionName) {
    case login.actionName: return login.reducer(state, action)
    case register.actionName: return register.reducer(state, action)
    case update.actionName: return update.reducer(state, action)
    case updateConfigs.actionName: return updateConfigs.reducer(state, action)
    default: return state
  }

}
