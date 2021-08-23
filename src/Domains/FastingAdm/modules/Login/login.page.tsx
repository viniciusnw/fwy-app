import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { View, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { withTranslation, WithTranslation } from 'react-i18next';

import { StyledText } from './login.style';
import { Logo, DismissKeyboard } from '@Components';
import { UnloogedStackParamList, PagePropsType } from '@ADMNavigation';
import {
  ReduxActions,
  ReduxPropsType,
  ReduxStateType,
} from '@Redux/FastingAdm';

import LoginForm from './components/login-form.component';

type RoutePropsType = StackScreenProps<UnloogedStackParamList, 'Login'>;
class Login extends React.Component<
  RoutePropsType & ReduxPropsType & PagePropsType & WithTranslation,
  any
> {
  static setPageConfigs = {
    pageConfig: { backgroundImage: 'tertiary' },
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      User: { login },
      LastUser: { user: lastUser },
    } = this.props.useRedux;
    const { loading } = login;

    return (
      <DismissKeyboard>
        <Container>
          <LoginForm
            lastUser={lastUser}
            loginLoading={loading}
            dispatchLogin={this.props.useDispatch.login}
          />
          <Logo width={80} height={40} color={'white'} />
        </Container>
      </DismissKeyboard>
    );
  }

  private t = (value: string) => this.props.t && this.props.t(value);
}

function mapStateToProps({ User, LastUser }: ReduxStateType) {
  return {
    useRedux: {
      User,
      LastUser,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    useDispatch: {
      login: (_) => dispatch(ReduxActions.login(_)),
    },
  };
}

export default withTranslation('Login')(
  connect(mapStateToProps, mapDispatchToProps)(Login),
);

const Container = styled(View)`
  flex: 1;
  padding: 0 40px;
  align-items: center;
  justify-content: center;
`;
