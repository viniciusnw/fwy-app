import { LastUserReduxType } from './repository/LastUser';
import Chat, { ChatReduxType } from './repository/Chat';
import User, { UserReduxType } from './repository/User';
import General, { GeneralReduxType } from './repository/General';
import Customer, { CustomerReduxType } from './repository/Customer';

class ReduxActionsType {
  saveWs = General.actions.saveWs

  login = User.actions.login
  logout = User.actions.logout

  listCustomer = Customer.actions.list
  searchCustomer = Customer.actions.search

  newChatMessage = Chat.actions.newChatMessage
  getChatMessages = Chat.actions.getChatMessages
  sendChatMessage = Chat.actions.sendChatMessage
  getMoreChatMessages = Chat.actions.getMoreChatMessages
  addQueueChatMessage = Chat.actions.addQueueChatMessage
  completeQueueChatMessage = Chat.actions.completeQueueChatMessage
}
export type ReduxStateType = {
  User: UserReduxType;
  Chat: ChatReduxType;
  LastUser: LastUserReduxType;
  General: GeneralReduxType;
  Customer: CustomerReduxType
}

// ==
export interface ReduxPropsType {
  useRedux: ReduxStateType
  useDispatch: ReduxActionsType
}
export const ReduxActions = new ReduxActionsType;