import React from 'react';
import { connect } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';

import { Button, Icon, Logo, Input } from '@Components';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyledBox, StyledField, StyledText } from './login.style'
import { UnloogedStackParamList, PagePropsType } from '@Navigation';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';


type RoutePropsType = StackScreenProps<UnloogedStackParamList, 'Login'>;
class Login extends React.Component<RoutePropsType & ReduxPropsType & PagePropsType, any> {

  constructor(props) {
    super(props)
    this.props.setPageConfigs({
      pageConfig: { backgroundImage: 'tertiary' },
    });

    this.state = {
      form: {
        email: 'viniciusnw@hotmail.com.br',
        password: '123456',
      }
    }
  }
  
  componentDidUpdate() {
    console.log("Login=>componentDidUpdate: ", this.props)
  }

  goSignUp = () => {
    const { navigation } = this.props;
    navigation.navigate('SignUp');
  }

  private formChangeField = (field, value) => this.setState({ form: { ...this.state.form, [field]: value } })

  render() {
    const { User: { login } } = this.props.useRedux
    const { loading } = login;
    const { form: { email, password } } = this.state

    const loginForm = {
      email: {
        value: email,
        placeholder: 'E-mail',
        onChangeText: (value) => this.formChangeField('email', value),
        autoCompleteType: 'email',
        placeholderTextColor: "#FFF"
      },
      password: {
        value: password,
        placeholder: 'Senha',
        secureTextEntry: true,
        onChangeText: (value) => this.formChangeField('password', value),
        autoCompleteType: 'password',
        placeholderTextColor: "#FFF"
      },
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 40 }}>
        <StyledBox>
          <StyledField>
            <Input {...loginForm.email} />
          </StyledField>
          <StyledField>
            <Input {...loginForm.password} />
          </StyledField>

          <View style={{ width: '50%', alignSelf: 'center', marginVertical: 60 }}>
            <Button loading={loading} color="secondary" onPress={() => this.props.useDispatch.login(this.state.form)}>
              Login
            </Button>
          </View>
        </StyledBox>

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

        <TouchableOpacity style={{ marginTop: 16, marginBottom: 60 }} onPress={this.goSignUp}>
          <StyledText>
            Cadastre-se
          </StyledText>
        </TouchableOpacity>

        <Logo width={80} height={40} color={'white'} />
      </View>
    )
  }
}

function mapStateToProps({ User }: ReduxStateType) {
  return {
    useRedux: {
      User
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    useDispatch: {
      login: _ => dispatch(ReduxActions.login(_)),
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
