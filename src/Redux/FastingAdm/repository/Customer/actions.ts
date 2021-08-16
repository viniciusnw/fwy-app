
import { Container } from 'typedi';
import { Query } from '@Redux/FastingAdm/data/graphql'

import { listCustomersVariables } from '@Config/graphql'

export default {

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
};
