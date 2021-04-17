export class GeneralReduxType {
  countries = {
    loading: false,
    success: false,
    error: false,
    data: null,
    errorMessage: null,
  }
  states = {
    loading: false,
    success: false,
    error: false,
    data: null,
    errorMessage: null,
  }
}

export const GeneralState = new GeneralReduxType