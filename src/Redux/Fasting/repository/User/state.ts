import {
  customerLoginVariables,
  customerLogin_customerLogin,
  customerRegister_customerRegister,
  customerUpdate_customerUpdate
} from '@Config/graphql'

export class UserReduxType {
  login = {
    loading: false,
    success: false,
    error: false,
  }
  register = {
    loading: false,
    success: false,
    error: false,
  }
  update = {
    loading: false,
    success: false,
    error: false,
  }
  errorMessage = null
  lastUser: customerLoginVariables | null = null
  data: customerLogin_customerLogin | customerRegister_customerRegister | customerUpdate_customerUpdate | null = null
}

export const UserState = new UserReduxType