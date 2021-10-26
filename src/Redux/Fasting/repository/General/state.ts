import ReconnectingWebSocket from 'reconnecting-websocket';

import { TimeToShowEnum } from '@Config/constants';
export class GeneralReduxType {
  ws: ReconnectingWebSocket | null = null;
  timerPage_TimeToDisplay: TimeToShowEnum = TimeToShowEnum.remaining;
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