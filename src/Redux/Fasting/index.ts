import General, { GeneralReduxType } from './repository/General';
import User, { UserReduxType } from './repository/User';
import { LastUserReduxType } from './repository/LastUser';
import Chat, { ChatReduxType } from './repository/Chat';
import Fastings, { FastingsReduxType } from './repository/Fastings';

class ReduxActionsType {
  saveWs = General.actions.saveWs
  getStates = General.actions.getStates
  getCountries = General.actions.getCountries

  login = User.actions.login
  logout = User.actions.logout
  update = User.actions.update
  updateConfig = User.actions.updateConfig
  register = User.actions.register

  newChatMessage = Chat.actions.newChatMessage
  getChatMessages = Chat.actions.getChatMessages
  sendChatMessage = Chat.actions.sendChatMessage
  getMoreChatMessages = Chat.actions.getMoreChatMessages
  addQueueChatMessage = Chat.actions.addQueueChatMessage
  completeQueueChatMessage = Chat.actions.completeQueueChatMessage

  getPresets = Fastings.actions.getPresets
  createPreset = Fastings.actions.createPreset

  getFasting = Fastings.actions.getFasting
  endFasting = Fastings.actions.endFasting
  editFasting = Fastings.actions.editFasting
  updatePreset = Fastings.actions.updatePreset
  clearFasting = Fastings.actions.clearFasting
  createFasting = Fastings.actions.createFasting
  getActivesFastings = Fastings.actions.getActives
}
export type ReduxStateType = {
  General: GeneralReduxType;
  User: UserReduxType;
  LastUser: LastUserReduxType;
  Chat: ChatReduxType;
  Fastings: FastingsReduxType;
}

// ====
export interface ReduxPropsType {
  useRedux: ReduxStateType
  useDispatch: ReduxActionsType
}
export const ReduxActions = new ReduxActionsType;
