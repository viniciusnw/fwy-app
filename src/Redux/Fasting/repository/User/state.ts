import { customerLogin_customerLogin, customerRegister_customerRegister, updateCustomer_updateCustomer } from '@Config/graphql'

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
  data: customerLogin_customerLogin | customerRegister_customerRegister | updateCustomer_updateCustomer | null = null
}

export const UserState = new UserReduxType