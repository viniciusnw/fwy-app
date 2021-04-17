import React from 'react';
import { connect } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';

import { Button, Icon, Input } from '@Components';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyledBox, StyledField, StyledText } from './sign-up.style'
import { UnloogedStackParamList, PagePropsType } from '@Navigation';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';

type RoutePropsType = StackScreenProps<UnloogedStackParamList, 'SignUp'>;
class SignUp extends React.Component<RoutePropsType & ReduxPropsType & PagePropsType, any> {

  constructor(props) {
    super(props)
    this.props.setPageConfigs({
      topBarConfig: { title: null, back: true, color: '#FFF' },
      pageConfig: { backgroundImage: 'tertiary' },
    })

    this.state = {
      form: {
        name: null,
        email: null,
        phone: null,
        birthday: null,
        country: null,
        state: null,
        password: null
      }
    }
  }

  private formChangeField = (field, value) => this.setState({ [field]: value })

  render() {
    const { User: { login } } = this.props.useRedux;
    const { loading } = login;
    const { form: { name, email, phone, country, state, birthday, password } } = this.state

    const signUpForm = {
      name: {
        value: name,
        onChangeText: (value) => this.formChangeField('name', value),
        placeholder: 'Nome',
        autoCompleteType: 'name',
        placeholderTextColor: "#FFF"
      },
      email: {
        value: email,
        onChangeText: (value) => this.formChangeField('email', value),
        placeholder: 'E-mail',
        autoCompleteType: 'email',
        placeholderTextColor: "#FFF"
      },
      phone: {
        value: phone,
        onChangeText: (value) => this.formChangeField('phone', value),
        placeholder: 'Telefone',
        autoCompleteType: 'tel',
        placeholderTextColor: "#FFF"
      },
      country: {
        value: country,
        onChangeText: (value) => this.formChangeField('region', value),
        placeholder: 'País',
        placeholderTextColor: "#FFF"
      },
      state: {
        value: state,
        onChangeText: (value) => this.formChangeField('region', value),
        placeholder: 'Estado',
        placeholderTextColor: "#FFF"
      },
      birthday: {
        value: birthday,
        onChangeText: (value) => this.formChangeField('birthday', value),
        placeholder: 'Data de Nascimento',
        placeholderTextColor: "#FFF"
      },
      password: {
        value: password,
        onChangeText: (value) => this.formChangeField('password', value),
        secureTextEntry: true,
        placeholder: 'Password',
        placeholderTextColor: "#FFF"
      },
    }

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 40 }}>

        <TouchableOpacity style={{ marginHorizontal: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Icon size={60} color={'rgba(255, 255, 255, .4)'} icon="user-circle" />
          <StyledText>Carregar Foto</StyledText>
        </TouchableOpacity>

        <StyledBox>
          <StyledField>
            <Input {...signUpForm.name} />
          </StyledField>
          <StyledField>
            <Input {...signUpForm.email} />
          </StyledField>
          <StyledField>
            <Input {...signUpForm.phone} />
          </StyledField>
          <StyledField>
            <Input half {...signUpForm.country} />
            <Input half {...signUpForm.state} />
          </StyledField>
          <StyledField>
            <Input {...signUpForm.birthday} />
          </StyledField>
          <StyledField>
            <Input {...signUpForm.password} />
          </StyledField>

          <View style={{ width: '50%', alignSelf: 'center', marginVertical: 60 }}>
            <Button loading={loading} onPress={this.props.useDispatch.login} color="secondary">
              Acessar
            </Button>
          </View>
        </StyledBox>
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
)(SignUp);
