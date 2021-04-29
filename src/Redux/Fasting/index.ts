import General, { GeneralReduxType } from './repository/General';
import User, { UserReduxType } from './repository/User';
import Chat, { ChatReduxType } from './repository/Chat';
class ReduxActionsType {
  getStates = General.actions.getStates
  getCountries = General.actions.getCountries
  saveWs = Chat.actions.saveWs
  login = User.actions.login
  register = User.actions.register
  logout = User.actions.logout
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
