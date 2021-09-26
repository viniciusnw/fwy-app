
import { Container } from 'typedi';
import { Query } from '@Redux/FastingAdm/data/graphql'
import { Mutate } from '@Redux/FastingAdm/data/graphql'

import { listCustomersVariables, getCustomerVariables, setCustomerConfigsVariables } from '@Config/graphql'

export default {
  get: (params: getCustomerVariables) => {
    return {
      type: 'GET-CUSTOMER',
      payload: Container.get(Query).getCustomer(params),
    };
  },

  list: (params: listCustomersVariables) => {
    return {
      type: 'LIST-CUSTOMER',
      payload: Container.get(Query).listCustomers(params),
    };
  },

  search: (params: listCustomersVariables) => {
    return {
      type: 'SEARCH-CUSTOMER',
      payload: Container.get(Query).listCustomers(params),
    };
  },

  configs: (params: setCustomerConfigsVariables) => {
    return {
      type: 'CUSTOMER-CONFIGS',
      payload: Container.get(Mutate).customerConfigs(params),
    };
  },
};
