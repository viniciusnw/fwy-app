export class UserReduxType {
  login = {
    loading: false,
    success: false,
    error: false,
  }
  data = null
}

export const UserState = new UserReduxType