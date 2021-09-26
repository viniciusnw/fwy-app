import {
  customerLogin_customerLogin,
  customerRegister_customerRegister,
  customerUpdate_customerUpdate,
  setCustomerConfigs_setCustomerConfigs
} from '@Config/graphql'

type Config = {
  loading: boolean,
  success: boolean,
  error: boolean,
  data: setCustomerConfigs_setCustomerConfigs | null
}

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
  configs: Config = {
    loading: false,
    success: false,
    error: false,
    data: null
  }
  errorMessage = null
  data: customerLogin_customerLogin | customerRegister_customerRegister | customerUpdate_customerUpdate | null = null
}

export const UserState = new UserReduxType