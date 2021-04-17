export default {
  saveWs: param => {
    return {
      type: 'WS_CONN',
      payload: param,
    };
  },
};
