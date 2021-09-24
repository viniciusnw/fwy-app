import React from 'react';
import { connect } from 'react-redux';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Text, ActivityIndicator } from 'react-native';

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
  LastFastContent,
  FastValue,
  FastValueDesc,
  LastFastTitle,
} from './customer.style';

import CustomerItem from './components/customer-item.component';

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'Customer'>;
class Customer extends React.Component<
  RoutePropsType & ReduxPropsType & PagePropsType & WithTranslation,
  any
> {
  static setPageConfigs = {
    topBarConfig: { title: 'Customer informations', menu: false, color: '#FFF', back: true },
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
        callback: () => this.goChatPage(),
      },
      {
        label: 'Configurations',
        callback: () => this.goConfigsPage(),
      },
    ];

    const startDate = this.getDateTime('startDate');
    const endDate = this.getDateTime('finished');

    return (
      <Container>
        <CustomerContainer>
          {(isLoading && (
            <LoadContent>
              <ActivityIndicator size="large" color={'#FFF'} />
            </LoadContent>
          )) || <CustomerItem customer={customer.data} />}
        </CustomerContainer>

        <LastFastContent>
          <LastFastTitle>Last fast</LastFastTitle>

          <FastValue>
            <FastValueDesc>Start time: </FastValueDesc>
            {startDate[0]} {startDate[1]}
          </FastValue>

          <FastValue>
            <FastValueDesc>End time: </FastValueDesc>
            {endDate[0]} {endDate[1]}
          </FastValue>

          <FastValue>
            <FastValueDesc>Initial time: </FastValueDesc>
            {this.initialHours}h
          </FastValue>
        </LastFastContent>

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

  private goChatPage = () => {
    const { navigation } = this.props;
    navigation.navigate('Chat');
  };

  private goConfigsPage = () => {
    const { navigation } = this.props;
    navigation.navigate('CustomerConfigs');
  };

  getDateTime = (searchDate: 'startDate' | 'finished') => {
    const {
      last: { data: lastFasting },
    } = this.props.useRedux.Fasting;
    if (!lastFasting) return '-';
    if (!lastFasting[searchDate]) return ['Em andamento', ''];

    const phoneLanguage = this.props.i18n.language;
    const time = lastFasting[searchDate]
      .toLocaleTimeString(phoneLanguage)
      .split(':');
    const timeAux = time[2].split(' ')[1] || '';
    const date = lastFasting[searchDate].toLocaleDateString(phoneLanguage, {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

    return [`${date}`, `${time[0]}:${time[1]}${timeAux}`];
  };

  private get initialHours() {
    const {
      last: { data: lastFasting },
    } = this.props.useRedux.Fasting;

    if (lastFasting?.initialTotalHours) return lastFasting.initialTotalHours;
    else return '- ';
  }

  private get customerId() {
    const {
      route: { params },
    } = this.props;
    return params.customerId;
  }

  private t = (value: string, variables?: any) =>
    this.props.t && this.props.t(value, variables);
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

export default withTranslation('Customer')(
  connect(mapStateToProps, mapDispatchToProps)(Customer),
);
