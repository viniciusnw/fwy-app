import ReconnectingWebSocket from 'reconnecting-websocket';

export default {

  saveWs: (params: ReconnectingWebSocket | null) => {
    return {
      type: 'WS-CONN',
      payload: params,
    };
  },
};
