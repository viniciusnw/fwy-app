
import { Container } from 'typedi';
import { Query } from '@Redux/FastingAdm/data/graphql'

import { getLastFastingVariables } from '@Config/graphql'

export default {
  getLast: (params: getLastFastingVariables) => {
    return {
      type: 'LAST-FASTING',
      payload: Container.get(Query).getLastFasting(params),
    };
  },
};
