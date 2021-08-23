import {
  listCustomers_listCustomers,
  getCustomer_getCustomer
} from '@Config/graphql'

interface List {
  loading: boolean,
  success: boolean,
  error: boolean,
  errorMessage: string | null,
  data: listCustomers_listCustomers,
}

interface Customer {
  loading: boolean,
  error: boolean,
  success: boolean,
  errorMessage: string | null,
  data: getCustomer_getCustomer | null
}

export class CustomerReduxType {
  customer: Customer = {
    loading: false,
    success: false,
    error: false,
    errorMessage: null,
    data: null
  }
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