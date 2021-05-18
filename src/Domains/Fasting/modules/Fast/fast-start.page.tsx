import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';

import * as ASSETS from '@Config/assets';
import { Button, Icon } from '@Components';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { View, TouchableOpacity, ImageBackground } from 'react-native';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';
import {
  Footer,
  Divider,
  StyledText4,
  StyledText5,
  StyledText6,
  StyledText7,
  StyledText8,
  CustomPlanTag,
  FormContainer,
} from './fast.style';

import FastStartForm, {
  FormFastSchema,
  fields as FormFields,
} from './components/fast-start-form.component';

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'FastStart'>;
class FastStart extends React.Component<
  RoutePropsType & ReduxPropsType & PagePropsType,
  any
> {
  static setPageConfigs = {
    topBarConfig: { title: null, menu: true, back: true, color: '#FFF' },
    pageConfig: { backgroundSolidColor: 'secondary' },
    bottomBarConfig: { color: '#FFF' },
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('FastStart=>componentDidMount: ', this.props);
  }

  private handlerSubmitForm = (fastForm) => {
    this.handlerCreateFasting(fastForm);
  };

  private handlerCreateFasting = (fastForm) => {
    const {
      route: { params },
      useDispatch: { clearFasting },
    } = this.props;

    clearFasting();
    this.goToTimer({
      index: params.index,
      hours: fastForm[FormFields.hours],
      days: fastForm[FormFields.days],
      name: fastForm[FormFields.name],
      color: fastForm[FormFields.color],
    });
  };

  render() {
    const { RibbonFull } = ASSETS.FASTING.svgs;

    const FormInitialValues = {
      [FormFields.days]: 1,
      [FormFields.hours]: 1,
      [FormFields.color]: '#EC5349',
      [FormFields.name]: 'Fasting Name!',
    };

    return (
      <Formik
        validationSchema={FormFastSchema}
        initialValues={FormInitialValues}
        onSubmit={this.handlerSubmitForm}>
        {({ setFieldValue, handleBlur, handleSubmit, values, errors }) => (
          <View style={{ flex: 1 }}>
            <FormContainer>
              {/* === */}
              {true && <CustomPlanTag />}

              {/* === */}
              <FastStartForm
                errors={errors}
                values={values}
                handleBlur={handleBlur}
                setFieldValue={setFieldValue}
              />

              {/* === */}
              <View style={{ padding: 15 }}>
                <StyledText4>Long 5 Fast Journal</StyledText4>
                <StyledText5>
                  A lot happens during a fast. Tracking your moo Will Help you
                  understand those changes, and reflecte on How you’e feeling at
                  different stages of your fast.
                </StyledText5>
              </View>
            </FormContainer>

            {/* === */}
            <Divider />

            {/* === */}
            <Footer>
              <ImageBackground
                resizeMode="cover"
                style={{ flex: 1, paddingBottom: 62 }}
                source={ASSETS.FASTING.backgrounds['primary']}>
                <View style={{ marginHorizontal: '23%', top: -20 }}>
                  <Button
                    color="primary"
                    onPress={handleSubmit}
                    icon={{ icon: 'timer', color: '#EC5349', size: 22 }}>
                    START YOUR FAST
                  </Button>
                </View>

                <TouchableOpacity
                  style={{ flex: 1, justifyContent: 'center' }}
                  onPress={this.goToBadgeAll}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginHorizontal: 22,
                      justifyContent: 'space-around',
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                      <RibbonFull
                        width={20}
                        height={30}
                        style={{ marginTop: 5 }}
                      />
                      <View style={{ marginLeft: 10 }}>
                        <StyledText6>JOURNAL</StyledText6>
                        <StyledText7>Long 3 entries</StyledText7>
                        <StyledText8>7 days</StyledText8>
                      </View>
                    </View>

                    <Button small color="transparent">
                      Invite Friends
                    </Button>
                  </View>
                </TouchableOpacity>
              </ImageBackground>
            </Footer>
          </View>
        )}
      </Formik>
    );
  }

  private goToTimer = (Fasting) => {
    const { navigate } = this.props.navigation;
    navigate('Timer', { fasting: Fasting });
  };

  private goToBadgeAll = () => {
    const { navigation } = this.props;
    navigation.navigate('BadgeAll');
  };
}

function mapStateToProps({ Fastings }: ReduxStateType) {
  return {
    useRedux: {
      Fastings,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    useDispatch: {
      clearFasting: (_) => dispatch(ReduxActions.clearFasting()),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FastStart);
