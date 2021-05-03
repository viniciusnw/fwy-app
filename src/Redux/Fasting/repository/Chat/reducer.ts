import { ChatState } from './state'

import loadMessages from './load-messages.reducer'
import sendMessages from './send-messages.reducer'
import queueMessages from './queue-messages.reducer'

export default function reducer(
  state = ChatState,
  action,
) {
  const { type } = action
  const actionName = type.split('_')[0];
  
  switch (actionName) {
    case sendMessages.actionName: return sendMessages.reducer(state, action)
    case loadMessages.actionName: return loadMessages.reducer(state, action)
    case queueMessages.actionName: return queueMessages.reducer(state, action)
    case queueMessages.actionName2: return queueMessages.reducer(state, action)
    default: return state
  }
}
