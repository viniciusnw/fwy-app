import ReconnectingWebSocket from 'reconnecting-websocket';
export class GeneralReduxType {
  ws: ReconnectingWebSocket | null = null;
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