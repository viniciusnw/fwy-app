import {
  customerLogin_customerLogin,
  customerUpdate_customerUpdate
} from '@Config/graphql'

export class UserReduxType {
  login = {
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
  data: customerLogin_customerLogin | customerUpdate_customerUpdate | null = null
}

export const UserState = new UserReduxType