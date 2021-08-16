import React from 'react';
import { connect } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';

import { Icon, Input } from '@Components';
import CustomerItem from './components/customer-item.component';
import SearchInput from './components/search-input.component';
import * as ASSETS from '@Config/assets';
import { FASTING_ADM } from '@Config/constants';
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
  static setPageConfigs = {
    topBarConfig: { title: null, menu: true, color: '#FFF' },
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
          {this.state.searchTerm ? (
            <ScrollCustomers
              onEndReachedThreshold={0}
              data={search.data.customers}
              extraData={search.data.customers}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => `${index}`}
              onEndReached={() => this.loadMoreSearchCustomers()}
              renderItem={({ item }: { item: any }) => (
                <CustomerItem customer={item} />
              )}
              ListFooterComponent={() => (
                <>
                  {search.loading ? (
                    <ActivityIndicator size="large" color={'#FFF'} />
                  ) : (
                    <React.Fragment />
                  )}
                </>
              )}
            />
          ) : (
            <ScrollCustomers
              onEndReachedThreshold={0}
              data={list.data.customers}
              extraData={list.data.customers}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => `${index}`}
              onEndReached={() => this.loadMoreCustomers()}
              renderItem={({ item }: { item: any }) => (
                <CustomerItem customer={item} />
              )}
              ListFooterComponent={() => (
                <>
                  {list.loading ? (
                    <ActivityIndicator size="large" color={'#FFF'} />
                  ) : (
                    <React.Fragment />
                  )}
                </>
              )}
            />
          )}
        </CustomerContainer>
      </Container>
    );
  }
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
