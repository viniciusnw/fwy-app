import React from 'react';
import { connect } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';

import { View } from 'react-native';
import { StyledView } from './sign-up.style';
import SignUpForm from './components/sign-up-form.component';
import { UnloogedStackParamList, PagePropsType } from '@Navigation';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';

type RoutePropsType = StackScreenProps<UnloogedStackParamList, 'SignUp'>;
class SignUp extends React.Component<
  RoutePropsType & ReduxPropsType & PagePropsType,
  any
> {
  static setPageConfigs = {
    topBarConfig: { title: null, back: true, color: '#FFF' },
    pageConfig: { backgroundImage: 'tertiary' },
  };

  constructor(props) {
    super(props);
    this.state = {
      form: {
        country: '',
        state: '',
      },
    };
  }

  componentDidMount() {
    this.props.useDispatch.getCountries({});
  }

  componentDidUpdate(prevProps, prevState) {
    this.handlerCountriesAndStates(prevState);
  }

  render() {
    const {
      User: { register },
      General: { countries, states },
    } = this.props.useRedux;

    const { loading: registerLoading } = register;
    const { loading: statesLoading, data: statesData } = states;
    const { loading: countriesLoading, data: countriesData } = countries;

    return (
      <StyledView>
        <SignUpForm
          statesData={statesData}
          statesLoading={statesLoading}
          countriesData={countriesData}
          countriesLoading={countriesLoading}
          registerLoading={registerLoading}
          formChangeField={this.formChangeField}
          dispatchRegister={this.props.useDispatch.register}
        />
      </StyledView>
    );
  }

  private handlerCountriesAndStates = (prevState) => {
    if (prevState.form.country != this.state.form.country)
      this.props.useDispatch.getStates({ country: this.state.form.country });
  };

  private formChangeField = (field, value) =>
    this.setState({ form: { ...this.state.form, [field]: value } });
}

function mapStateToProps({ User, General }: ReduxStateType) {
  return {
    useRedux: {
      User,
      General,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    useDispatch: {
      register: (_) => dispatch(ReduxActions.register(_)),
      getStates: (_) => dispatch(ReduxActions.getStates(_)),
      getCountries: (_) => dispatch(ReduxActions.getCountries(_)),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
