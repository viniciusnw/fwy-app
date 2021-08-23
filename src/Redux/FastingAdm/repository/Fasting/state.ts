import {
  getLastFasting_getLastFasting
} from '@Config/graphql'

interface Last {
  loading: boolean,
  error: boolean,
  success: boolean,
  errorMessage: string | null,
  data: getLastFasting_getLastFasting | null
}

export class FastingReduxType {
  last: Last = {
    loading: false,
    success: false,
    error: false,
    errorMessage: null,
    data: null
  }
}

export const FastingState = new FastingReduxType