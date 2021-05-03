import General, { GeneralReduxType } from './repository/General';
import User, { UserReduxType } from './repository/User';
import Chat, { ChatReduxType } from './repository/Chat';

class ReduxActionsType {
  getStates = General.actions.getStates
  getCountries = General.actions.getCountries
  saveWs = General.actions.saveWs
  
  login = User.actions.login
  register = User.actions.register
  logout = User.actions.logout
  
  getChatMessages = Chat.actions.getChatMessages
  sendChatMessage = Chat.actions.sendChatMessage
  addQueueChatMessage = Chat.actions.addQueueChatMessage
  completeQueueChatMessage = Chat.actions.completeQueueChatMessage
}
export const ReduxActions = new ReduxActionsType;

export type ReduxStateType = {
  General: GeneralReduxType;
  User: UserReduxType;
  Chat: ChatReduxType;
}
export interface ReduxPropsType {
  useRedux: ReduxStateType
  useDispatch: ReduxActionsType
}
