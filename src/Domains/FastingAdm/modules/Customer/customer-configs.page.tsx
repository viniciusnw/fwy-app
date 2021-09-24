import React from 'react';
import { connect } from 'react-redux';
import { withTranslation, WithTranslation } from 'react-i18next';
import { Text, ActivityIndicator, Switch } from 'react-native';

import { Icon, Input } from '@Components';
import { CustomerConfigsInput } from '@Config/graphql';
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

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'CustomerConfigs'>;
class CustomerConfigs extends React.Component<
  RoutePropsType & ReduxPropsType & PagePropsType & WithTranslation,
  any
> {
  static setPageConfigs = {
    pageConfig: { backgroundSolidColor: 'secondary' },
    topBarConfig: {
      title: 'Configurations',
      menu: false,
      color: '#FFF',
      back: true,
    },
  };

  constructor(props) {
    super(props);
    const { customer } = props.useRedux.Customer;
    this.state = {
      chatValue: !!customer.data?.configs?.chat,
    };

    console.log(customer)
  }

  render() {
    const configs = [
      {
        name: 'Chat',
        callback: () =>
          this.setState({ chatValue: !this.state.chatValue }, () => {
            this.changeConfigs({
              chat: this.state.chatValue,
            });
          }),
      },
    ];

    return (
      <Container>
        <ListMenu>
          {configs.map((cf, idx) => (
            <MenuItem onPress={cf.callback} key={idx}>
              <MenuTitle>{cf.name}</MenuTitle>
              <Switch
                onValueChange={cf.callback}
                value={this.state.chatValue}
                ios_backgroundColor="#3e3e3e"
                trackColor={{ false: '#767577', true: '#222842' }}
                thumbColor={this.state.chatValue ? '#8B4F9F' : '#f4f3f4'}
              />
            </MenuItem>
          ))}
        </ListMenu>
      </Container>
    );
  }

  private changeConfigs(configs: CustomerConfigsInput) {
    const { customer } = this.props.useRedux.Customer;
    this.props.useDispatch.setConfigs({
      customerId: customer.data?._id,
      configs,
    });
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
      setConfigs: (_) => dispatch(ReduxActions.setConfigs(_)),
    },
  };
}

export default withTranslation('CustomerConfigs')(
  connect(mapStateToProps, mapDispatchToProps)(CustomerConfigs),
);
