export default {
  actionName: 'SEARCH-CUSTOMER',
  reducer: (state, action) => {
    switch (action.type) {
      case 'SEARCH-CUSTOMER_PENDING': {
        return {
          ...state,
          search: {
            loading: true,
            error: false,
            success: false,
            errorMessage: null,
            data: state.search.data,
          }
        };
      }

      case 'SEARCH-CUSTOMER_FULFILLED': {
        return {
          ...state,
          search: {
            error: false,
            success: true,
            loading: false,
            errorMessage: null,
            data: {
              ...action.payload,
              customers: [
                ...(action.payload.nextPagination.pageNumber != 1 ? state.search.data.customers : []),
                ...action.payload.customers
              ]
            }
          },
        };
      }

      case 'SEARCH-CUSTOMER_REJECTED': {
        return {
          ...state,
          search: {
            loading: false,
            success: false,
            error: true,
            data: state.search.data,
            errorMessage: action.payload,
          },
        };
      }
      default: return state;
    }
  }
}