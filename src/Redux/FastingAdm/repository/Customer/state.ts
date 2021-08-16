import {
  listCustomers_listCustomers,
} from '@Config/graphql'

interface List {
  loading: boolean,
  success: boolean,
  error: boolean,
  errorMessage: string | null,
  data: listCustomers_listCustomers,
}

export class CustomerReduxType {
  list: List = {
    loading: false,
    success: false,
    error: false,
    errorMessage: null,
    data: {
      __typename: 'CustomerList',
      customers: null,
      nextPagination: {
        __typename: 'NextPagination',
        nPerPage: 15,
        pageNumber: 1,
        nextPageNumber: null
      }
    }
  }
  search: List = {
    loading: false,
    success: false,
    error: false,
    errorMessage: null,
    data: {
      __typename: 'CustomerList',
      customers: null,
      nextPagination: {
        __typename: 'NextPagination',
        nPerPage: 15,
        pageNumber: 1,
        nextPageNumber: null
      }
    }
  }
}

export const CustomerState = new CustomerReduxType