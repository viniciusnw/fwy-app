import React from 'react';
import { connect } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';

import { StyledText } from './login.style';
import { Button, Icon, Logo, Input } from '@Components';
import { View, Text, TouchableOpacity } from 'react-native';
import { UnloogedStackParamList, PagePropsType } from '@Navigation';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';

import LoginForm from './components/login-form.component';

type RoutePropsType = StackScreenProps<UnloogedStackParamList, 'Login'>;
class Login extends React.Component<
  RoutePropsType & ReduxPropsType & PagePropsType,
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
    } = this.props.useRedux;
    const { loading } = login;

    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 40,
        }}>
        <LoginForm
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
          <StyledText>Cadastre-se</StyledText>
        </TouchableOpacity>

        <Logo width={80} height={40} color={'white'} />
      </View>
    );
  }
}

function mapStateToProps({ User }: ReduxStateType) {
  return {
    useRedux: {
      User,
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
