import { Container } from 'typedi';
import { Mutate, Query } from '@Redux/Fasting/data/graphql'

import { createFastingVariables, getFastsVariables, endFastingVariables, createPresetVariables } from '@Config/graphql'

export default {

  clearFasting: () => {
    return {
      type: 'RESET-FAST',
    };
  },

  endFasting: (params: endFastingVariables) => {
    return {
      type: 'END-FAST',
      payload: () => Container.get(Mutate).endFasting(params),
    };
  },

  getPresets: () => {
    return {
      type: 'GET-PRESETS',
      payload: () => Container.get(Query).getPresets(),
    };
  },

  createPreset: (params: createPresetVariables) => {
    return {
      type: 'CREATE-PRESET',
      payload: () => Container.get(Mutate).createPreset(params),
    };
  },

  getFasting: (params: getFastsVariables) => {
    return {
      type: 'GET-FAST',
      payload: () => Container.get(Query).getFasts(params),
    };
  },

  getActives: () => {
    return {
      type: 'GET-ACTIVES',
      payload: () => Container.get(Query).getFasts({ actives: true }),
    };
  },

  createFasting: (params: createFastingVariables) => {
    return {
      type: 'CREATE-FAST',
      payload: () => Container.get(Mutate).createFasting(params)
    };
  },
};
