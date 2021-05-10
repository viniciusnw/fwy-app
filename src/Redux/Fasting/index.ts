import General, { GeneralReduxType } from './repository/General';
import User, { UserReduxType } from './repository/User';
import Chat, { ChatReduxType } from './repository/Chat';

class ReduxActionsType {
  saveWs = General.actions.saveWs
  getStates = General.actions.getStates
  getCountries = General.actions.getCountries
  
  login = User.actions.login
  logout = User.actions.logout
  register = User.actions.register
  
  newChatMessage = Chat.actions.newChatMessage
  getChatMessages = Chat.actions.getChatMessages
  sendChatMessage = Chat.actions.sendChatMessage
  getMoreChatMessages = Chat.actions.getMoreChatMessages
  addQueueChatMessage = Chat.actions.addQueueChatMessage
  completeQueueChatMessage = Chat.actions.completeQueueChatMessage
}
export type ReduxStateType = {
  General: GeneralReduxType;
  User: UserReduxType;
  Chat: ChatReduxType;
}

// ====
export interface ReduxPropsType {
  useRedux: ReduxStateType
  useDispatch: ReduxActionsType
}
export const ReduxActions = new ReduxActionsType;
