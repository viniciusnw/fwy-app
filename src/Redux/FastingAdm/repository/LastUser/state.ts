import {
  customerLoginVariables,
} from '@Config/graphql'

export class LastUserReduxType {
  user: customerLoginVariables | null = null
}

export const LastUserState = new LastUserReduxType