import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';

import * as ASSETS from '@Config/assets';
import { Button, DismissKeyboard } from '@Components';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';
import { View, TouchableOpacity, ImageBackground, Share } from 'react-native';
import {
  Footer,
  Divider,
  StyledText,
  StyledText4,
  StyledText5,
  StyledText6,
  StyledText7,
  StyledText8,
  CustomPlanTag,
  FormContainer,
  FormHeader,
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
    this.state = {
      preset: null,
    };
  }

  componentDidMount() {
    this.handlerLoadPreset();
  }

  private handlerSubmitForm = (fastForm) => {
    this.handlerCreateFasting(fastForm);
  };

  private handlerCreateFasting = (fastForm) => {
    const {
      useDispatch: { clearFasting },
    } = this.props;

    clearFasting();
    this.goToTimer({
      finished: null,
      hours: fastForm[FormFields.hours],
      days: fastForm[FormFields.days],
      name: fastForm[FormFields.name],
      color: fastForm[FormFields.color],
    });
  };

  private handlerLoadPreset = () => {
    const preset = this.Preset;
    if (!preset) return;
    this.setState({ preset });
  };

  private handlerShared = async () => {
    try {
      const result = await Share.share({
        title: 'Fasting with Yara',
        url: 'https://www.fastingwithyara.com/',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    const { RibbonFull } = ASSETS.FASTING.svgs;
    const { preset } = this.state;

    const FormInitialValues = {
      [FormFields.days]: preset?.days || 0,
      [FormFields.hours]: preset?.hours || 1,
      [FormFields.color]: preset?.color || '',
      [FormFields.name]: preset?.name || '',
    };

    const isAlreadyFasting = this.ActiveFastId;

    const fromPreset = this.PresetId;

    const fromPlan = this.PlanId;

    const saveOrUpdate = this.SaveOrUpdatePreset;

    return (
      <Formik
        enableReinitialize
        validationSchema={FormFastSchema}
        initialValues={FormInitialValues}
        onSubmit={this.handlerSubmitForm}>
        {({
          setFieldValue,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <DismissKeyboard>
            <View style={{ flex: 1 }}>
              <FormContainer>
                {/* === */}
                <FormHeader>
                  {(!fromPlan && <CustomPlanTag />) || (
                    <View style={{ marginBottom: 12, flex: 1 }} />
                  )}

                  {fromPreset && (
                    <TouchableOpacity style={{ marginBottom: 12 }}>
                      <StyledText>{saveOrUpdate}</StyledText>
                    </TouchableOpacity>
                  )}
                </FormHeader>

                {/* === */}
                <FastStartForm
                  touched={touched}
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
                    understand those changes, and reflecte on How you’e feeling
                    at different stages of your fast.
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
                    {isAlreadyFasting ? (
                      <Button
                        style={{ zIndex: 10 }}
                        color="primary"
                        onPress={() => this.goToTimerId(isAlreadyFasting)}
                        icon={{ icon: 'timer', color: '#EC5349', size: 22 }}>
                        YOU’RE FASTING!
                      </Button>
                    ) : (
                      <Button
                        style={{ zIndex: 10 }}
                        color="primary"
                        onPress={handleSubmit}
                        icon={{ icon: 'timer', color: '#EC5349', size: 22 }}>
                        START YOUR FAST
                      </Button>
                    )}
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

                      <Button
                        small
                        onPress={this.handlerShared}
                        color="transparent">
                        Invite Friends
                      </Button>
                    </View>
                  </TouchableOpacity>
                </ImageBackground>
              </Footer>
            </View>
          </DismissKeyboard>
        )}
      </Formik>
    );
  }

  private get SaveOrUpdatePreset() {
    const fromPreset = this.PresetId;
    if (typeof fromPreset == 'string') return 'Update';
    else return 'Save';
  }

  private get Preset() {
    const {
      route: { params },
      useRedux: { Fastings },
    } = this.props;
    if (!params?.presetId) return false;
    return Fastings.presets.find((f) => f._id == params.presetId);
  }

  private get PlanId() {
    const {
      route: { params },
    } = this.props;
    if (!params?.planId) return false;
    return params.planId;
  }

  private get PresetId() {
    const {
      route: { params },
    } = this.props;
    if (!params?.presetId) return false;
    return params.presetId;
  }

  private get ActiveFastId() {
    const { fastings } = this.props.useRedux.Fastings;
    if (!fastings.length) return false;
    fastings[0]._id;
    return fastings[0]._id;
  }

  private goToTimerId = (fastingId) => {
    const { navigate } = this.props.navigation;
    navigate('Timer', { fastingId });
  };

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
