import { LastUserState } from './state'

import lastUser from './last-user.reducer'

export default function reducer(
  state = LastUserState,
  action,
) {
  const { type } = action
  const actionName = type.split('_')[0];

  switch (actionName) {
    case lastUser.actionName: return lastUser.reducer(state, action)
    default: return state
  }

}
