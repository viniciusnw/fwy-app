import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import { View, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { withTranslation, WithTranslation } from 'react-i18next';

import { StyledText } from './login.style';
import { Logo, DismissKeyboard } from '@Components';
import { UnloogedStackParamList, PagePropsType } from '@Navigation';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';

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

  goSignUp = () => {
    const { navigation } = this.props;
    navigation.navigate('SignUp');
  };

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

          {/* Social Login */}
          {/* <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ marginHorizontal: 8 }}>
            <Icon size={30} color={'#FFF'} icon="facebook-square" />
          </TouchableOpacity>

          <TouchableOpacity style={{ marginHorizontal: 8 }}>
            <Icon size={30} color={'#FFF'} icon="googleplus" />
          </TouchableOpacity>

          <TouchableOpacity style={{ marginHorizontal: 8 }}>
            <Icon size={30} color={'#FFF'} icon="instagram" />
          </TouchableOpacity>
        </View> */}

          <TouchableOpacity
            style={{ marginTop: 16, marginBottom: 60 }}
            onPress={this.goSignUp}>
            <StyledText>{this.t('signup')}</StyledText>
          </TouchableOpacity>

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
