import { CustomerState } from './state'

import list from './list.reducer'
import search from './search.reducer'
import get from './get.reducer'
import configs from './configs.reducer'

export default function reducer(
  state = CustomerState,
  action,
) {
  const { type } = action
  const actionName = type.split('_')[0];

  switch (actionName) {
    case list.actionName: return list.reducer(state, action)
    case search.actionName: return search.reducer(state, action)
    case get.actionName: return get.reducer(state, action)
    case configs.actionName: return configs.reducer(state, action)
    default: return state
  }

}
