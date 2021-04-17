import Base, { BaseReduxType } from './repository/Base';
import User, { UserReduxType } from './repository/User';
class ReduxActionsType {
  saveWsStatus = Base.actions.saveWsStatus
  login = User.actions.login
  logout = User.actions.logout
}
export const ReduxActions = new ReduxActionsType;

export type ReduxStateType = {
  Base: BaseReduxType;
  User: UserReduxType;
}
export interface ReduxPropsType { 
  useRedux: ReduxStateType
  useDispatch: ReduxActionsType
}
