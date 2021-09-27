import React from 'react';
import { connect } from 'react-redux';
import {
  NativeSyntheticEvent,
  NativeScrollEvent,
  ActivityIndicator,
} from 'react-native';

import CustomerItem from './components/customer-item.component';
import SearchInput from './components/search-input.component';
import { StackScreenProps } from '@react-navigation/stack';
import { LoggedStackParamList, PagePropsType } from '@ADMNavigation';
import {
  ReduxActions,
  ReduxPropsType,
  ReduxStateType,
} from '@Redux/FastingAdm';

import {
  Container,
  CustomerContainer,
  SearchContainer,
  ScrollCustomers,
} from './home.style';

const debounce = require('lodash.debounce');

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'Home'>;
class Home extends React.Component<
  RoutePropsType & ReduxPropsType & PagePropsType,
  any
> {
  public _flatList;
  static setPageConfigs = {
    topBarConfig: { title: 'List customers', menu: false, color: '#FFF' },
  };

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  componentDidMount() {
    this.loadCustomers();
  }

  private loadCustomers = () => {
    const {
      list: {
        data: { nextPagination },
      },
    } = this.props.useRedux.Customer;

    const pagination = {
      pageNumber: 1,
      nPerPage: nextPagination.nPerPage,
    };

    this.props.useDispatch.listCustomer({ pagination });
  };

  private loadMoreCustomers() {
    const {
      list: {
        loading,
        data: { nextPagination },
      },
    } = this.props.useRedux.Customer;
    if (loading) return;
    if (!nextPagination.nextPageNumber) return;

    this.props.useDispatch.listCustomer({
      pagination: {
        pageNumber: nextPagination.nextPageNumber
          ? nextPagination.nextPageNumber
          : 1,
        nPerPage: nextPagination.nPerPage,
      },
    });
  }

  private searchCustomers = () => {
    const {
      search: {
        data: { nextPagination },
      },
    } = this.props.useRedux.Customer;

    const pagination = {
      pageNumber: 1,
      nPerPage: nextPagination.nPerPage,
    };

    this.props.useDispatch.searchCustomer({
      pagination,
      term: this.state.searchTerm,
    });
  };

  private loadMoreSearchCustomers() {
    const {
      search: {
        loading,
        data: { nextPagination },
      },
    } = this.props.useRedux.Customer;
    if (loading) return;
    if (!nextPagination.nextPageNumber) return;

    this.props.useDispatch.searchCustomer({
      pagination: {
        pageNumber: nextPagination.nextPageNumber
          ? nextPagination.nextPageNumber
          : 1,
        nPerPage: nextPagination.nPerPage,
      },
      term: this.state.searchTerm,
    });
  }

  private onScrollCustomers(event: NativeSyntheticEvent<NativeScrollEvent>) {
    // this.setState({ scrollPosition: event.nativeEvent.contentOffset.y });
  }

  render() {
    const { list } = this.props.useRedux.Customer;
    const { search } = this.props.useRedux.Customer;

    return (
      <Container>
        <SearchContainer>
          <SearchInput
            initialValue={this.state.searchTerm}
            onChange={debounce((value: string) => {
              this.setState({ searchTerm: value }, () => {
                if (value) this.searchCustomers();
              });
            }, 500)}
          />
        </SearchContainer>

        <CustomerContainer>
          <ScrollCustomers
            numColumns={3}
            onScroll={this.onScrollCustomers}
            onEndReachedThreshold={0}
            data={
              this.state.searchTerm
                ? search.data.customers
                : list.data.customers
            }
            extraData={
              this.state.searchTerm
                ? search.data.customers
                : list.data.customers
            }
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => `${index}`}
            onEndReached={() =>
              this.state.searchTerm
                ? this.loadMoreSearchCustomers()
                : this.loadMoreCustomers()
            }
            renderItem={({ item }: any) => (
              <CustomerItem onClick={this.goCustomerPage} customer={item} />
            )}
            ListFooterComponent={() => (
              <>
                {list.loading || search.loading ? (
                  <ActivityIndicator size="large" color={'#FFF'} />
                ) : (
                  <React.Fragment />
                )}
              </>
            )}
          />
        </CustomerContainer>
      </Container>
    );
  }

  private goCustomerPage = (customerId: string) => {
    const { navigation } = this.props;
    navigation.navigate('Customer', { customerId });
  };
}

function mapStateToProps({ Customer }: ReduxStateType) {
  return {
    useRedux: {
      Customer,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    useDispatch: {
      listCustomer: (_) => dispatch(ReduxActions.listCustomer(_)),
      searchCustomer: (_) => dispatch(ReduxActions.searchCustomer(_)),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
