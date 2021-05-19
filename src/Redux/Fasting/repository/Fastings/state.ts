export interface Fasting {
  name: string,
  startDate: Date,
  endDate: Date,
  color: string,
  index: number,
  finished: boolean
}

export class FastingsReduxType {
  fastings: Array<Fasting> = []
  fasting: Fasting | null = null
  createFasting = {
    loading: false,
    success: false,
    error: false,
    data: null,
    errorMessage: null,
  }
  getFastings = {
    loading: false,
    success: false,
    error: false,
    errorMessage: null,
  }
}

export const FastingsState = new FastingsReduxType