import React from 'react';
import { connect } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';

import { Icon, Input } from '@Components';
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
  ListMenu,
  MenuTitle,
  MenuItem,
  Strike,
  CustomerContainer,
  LoadContent,
} from './customer.style';

import CustomerItem from './components/customer-item.component';

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'Customer'>;
class Customer extends React.Component<
  RoutePropsType & ReduxPropsType & PagePropsType,
  any
> {
  static setPageConfigs = {
    topBarConfig: { title: null, menu: true, color: '#FFF' },
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (this.props.isFocused) {
      this.props.useDispatch.getCustomer({
        customerId: this.customerId,
      });

      this.props.useDispatch.getLastFasting({
        customerId: this.customerId,
      });
    }
  }

  render() {
    const { customer } = this.props.useRedux.Customer;
    const { last: lastFasting } = this.props.useRedux.Fasting;
    const isLoading = customer.loading || lastFasting.loading;

    const menuItens = [
      {
        label: 'Chat',
        callback: () => null,
      },
      {
        label: 'Configurations',
        callback: () => null,
      },
    ];

    return (
      <Container>
        <CustomerContainer>
          {(isLoading && (
            <LoadContent>
              <ActivityIndicator size="large" color={'#FFF'} />
            </LoadContent>
          )) || (
            <CustomerItem
              lastFasting={lastFasting.data}
              customer={customer.data}
            />
          )}
        </CustomerContainer>

        <ListMenu
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {menuItens.map((item, idx) => (
            <MenuItem onPress={item.callback} key={idx}>
              <MenuTitle>{item.label}</MenuTitle>
              <Icon icon={'right'} color={'#FFF'} size={28} />
              {idx + 1 != menuItens.length && <Strike />}
            </MenuItem>
          ))}
        </ListMenu>
      </Container>
    );
  }

  private get customerId() {
    const {
      route: { params },
    } = this.props;
    return params.customerId;
  }
}

function mapStateToProps({ Customer, Fasting }: ReduxStateType) {
  return {
    useRedux: {
      Customer,
      Fasting,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    useDispatch: {
      getCustomer: (_) => dispatch(ReduxActions.getCustomer(_)),
      getLastFasting: (_) => dispatch(ReduxActions.getLastFasting(_)),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
