import { UserState } from './state'

import login from './login.reducer'
import register from './register.reducer'
import update from './register.reducer'

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
    default: return state
  }

}
