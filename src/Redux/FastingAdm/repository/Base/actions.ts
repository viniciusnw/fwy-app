export default {
  saveWsStatus: _ => {
    return {
      type: 'WS_STATUS',
      payload: _,
    };
  },
};
