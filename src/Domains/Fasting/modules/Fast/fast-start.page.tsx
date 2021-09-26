import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { showSnackbar } from '@Config/graphql';
import { StackScreenProps } from '@react-navigation/stack';
import { withTranslation, WithTranslation } from 'react-i18next';

import * as ASSETS from '@Config/assets';
import { FASTING } from '@Config/constants';
import { Button, DismissKeyboard } from '@Components';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';
import {
  View,
  TouchableOpacity,
  ImageBackground,
  Share,
  ActivityIndicator,
} from 'react-native';

import {
  Footer,
  Divider,
  StyledText,
  StyledText4,
  StyledText5,
  CustomPlanTag,
  FormContainer,
  FormHeader,
} from './fast.style';

import FastStartForm, {
  fields as FormFields,
} from './components/fast-start-form.component';

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'FastStart'>;
class FastStart extends React.Component<
  RoutePropsType & ReduxPropsType & PagePropsType & WithTranslation,
  any
> {
  static setPageConfigs = {
    bottomBarConfig: { color: '#FFF' },
    pageConfig: { backgroundSolidColor: 'secondary' },
    topBarConfig: { title: null, menu: true, back: true, color: '#FFF' },
  };

  constructor(props) {
    super(props);
    this.state = {
      preset: null,
      defaultHour: null,
      defaultName: null,
    };
  }

  componentDidMount() {
    this.handlerLoadInititalState();
  }

  componentDidUpdate(prevProps) {
    this.handlerSaverOrUpdatePreset(prevProps);
  }

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

  private handlerLoadInititalState = () => {
    const preset = this.Preset;
    const defaultHour = this.DefaultHour;
    const defaultName = this.DefaultName;
    this.setState({ preset, defaultHour, defaultName });
  };

  private handlerShared = async () => {
    try {
      const result = await Share.share({
        title: 'Fasting with Yara',
        url: 'https://www.fastingwithyara.com/',
      });

      if (result.action === Share.sharedAction) {
        // shared with activity type of result.activityType
        if (result.activityType) return null;
        else return null; // shared
      } else if (result.action === Share.dismissedAction) return null; // dismissed
    } catch (error) {
      // @ts-ignore
      console.log(error.message);
    }
  };

  private handlerSaverOrUpdatePreset = async (prevProps) => {
    const { saveOrUpdatePreset } = this.props.useRedux.Fastings;
    const {
      saveOrUpdatePreset: prevSaveOrUpdatePreset,
    } = prevProps.useRedux.Fastings;

    if (saveOrUpdatePreset.success != prevSaveOrUpdatePreset.success)
      showSnackbar('Saved ✅ ', 'success', 'i');
  };

  private saverOrUpdatePreset = async (
    isSaveOrUpdate,
    values,
    setFieldError: Function,
    setFieldTouched: Function,
  ) => {
    const {
      enums: { saveOrUpdate },
    } = FASTING;

    const { updatePreset, createPreset } = this.props.useDispatch;

    if (!values.name) {
      setFieldTouched(FormFields.name);
      return setFieldError(FormFields.name);
    }

    if (saveOrUpdate[isSaveOrUpdate] == saveOrUpdate.Save)
      createPreset({
        preset: {
          index: this.PresetId,
          ...values,
        },
      });

    if (saveOrUpdate[isSaveOrUpdate] == saveOrUpdate.Update)
      updatePreset({
        preset: {
          id: this.PresetId,
          ...values,
        },
      });
  };

  render() {
    const { saveOrUpdatePreset } = this.props.useRedux.Fastings;
    const { preset, defaultHour, defaultName } = this.state;
    const isAlreadyFasting = this.ActiveFastId;
    const fromPreset = this.PresetId;
    const fromPlan = this.PlanId;
    const fromDefault = this.DefaultName;
    const isSaveOrUpdate = this.SaveOrUpdatePreset;

    const tJournal: any = this.t('journal');
    const tForm: any = this.t('form');
    const tFormErros: any = this.t('formErros');

    const FormFastSchema = yup.object().shape({
      [FormFields.name]: yup.string().required(tFormErros.name),
      [FormFields.hours]: yup
        .number()
        .min(1, tFormErros.hours)
        .required(tFormErros.hours),
    });

    const FormInitialValues = {
      [FormFields.days]: preset?.days || 0,
      [FormFields.hours]: preset?.hours || defaultHour || 1,
      [FormFields.color]: preset?.color || '',
      [FormFields.name]: preset?.name || defaultName || '',
    };

    return (
      <Formik
        enableReinitialize
        validationSchema={FormFastSchema}
        initialValues={FormInitialValues}
        onSubmit={this.handlerCreateFasting}>
        {({
          setFieldValue,
          handleBlur,
          handleSubmit,
          setFieldError,
          setFieldTouched,
          values,
          errors,
          touched,
        }) => (
          <DismissKeyboard>
            <View style={{ flex: 1 }}>
              <FormContainer>
                {/* === */}
                <FormHeader>
                  {(!fromPlan && !fromDefault && <CustomPlanTag />) || (
                    <View style={{ marginBottom: 12, flex: 1 }} />
                  )}

                  {fromPreset && (
                    <TouchableOpacity
                      onPress={() =>
                        this.saverOrUpdatePreset(
                          isSaveOrUpdate,
                          values,
                          setFieldError,
                          setFieldTouched,
                        )
                      }
                      style={{ marginBottom: 12 }}
                      disabled={saveOrUpdatePreset.loading}>
                      {saveOrUpdatePreset.loading ? (
                        <StyledText>
                          <ActivityIndicator size="small" color={'#FFF'} />
                        </StyledText>
                      ) : (
                        <StyledText>{this.t('save')}</StyledText>
                      )}
                    </TouchableOpacity>
                  )}
                </FormHeader>

                {/* === */}
                <FastStartForm
                  errors={errors}
                  values={values}
                  touched={touched}
                  handleBlur={handleBlur}
                  setFieldValue={setFieldValue}
                  editable={!!!this.DefaultName}
                />

                {/* === */}
                <View style={{ padding: 15 }}>
                  <StyledText4>{tJournal.items[0].title}</StyledText4>
                  <StyledText5>{tJournal.items[0].content}</StyledText5>
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
                        color="primary"
                        style={{ zIndex: 10 }}
                        onPress={() => this.goToTimerId(isAlreadyFasting)}
                        icon={{
                          size: 22,
                          icon: 'timer',
                          color: '#EC5349',
                        }}>
                        {tFormErros.submit}
                      </Button>
                    ) : (
                      <Button
                        color="primary"
                        style={{ zIndex: 10 }}
                        onPress={handleSubmit}
                        icon={{
                          size: 22,
                          icon: 'timer',
                          color: '#EC5349',
                        }}>
                        {tForm.submit}
                      </Button>
                    )}
                  </View>

                  {/* <TouchableOpacity
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
                    </View>
                  </TouchableOpacity> */}
                </ImageBackground>
              </Footer>
            </View>
          </DismissKeyboard>
        )}
      </Formik>
    );
  }

  private get SaveOrUpdatePreset() {
    const {
      enums: { saveOrUpdate },
    } = FASTING;

    const fromPreset = this.PresetId;
    if (typeof fromPreset == 'string') return saveOrUpdate.Update;
    else return saveOrUpdate.Save;
  }

  private get Preset() {
    const {
      route: { params },
      useRedux: { Fastings },
    } = this.props;
    if (!params?.presetId) return false;
    return Fastings.presets.find((f) => f._id == params.presetId);
  }

  private get ActiveFastId() {
    const { fastings } = this.props.useRedux.Fastings;
    if (!fastings.length) return false;
    fastings[0]._id;
    return fastings[0]._id;
  }

  private get PlanId() {
    const {
      route: { params },
    } = this.props;
    if (!params?.planId) return null;
    return params.planId;
  }

  private get DefaultHour() {
    const {
      route: { params },
    } = this.props;
    if (!params?.defaultHour) return null;
    return params.defaultHour;
  }

  private get DefaultName() {
    const {
      route: { params },
    } = this.props;
    if (!params?.defaultName) return null;
    return params.defaultName;
  }

  private get PresetId() {
    const {
      route: { params },
    } = this.props;
    if (!params?.presetId) return false;
    return params.presetId;
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

  private t = (value: string) => this.props.t && this.props.t(value);
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
      updatePreset: (_) => dispatch(ReduxActions.updatePreset(_)),
      createPreset: (_) => dispatch(ReduxActions.createPreset(_)),
      clearFasting: (_) => dispatch(ReduxActions.clearFasting()),
    },
  };
}

export default withTranslation('Fasting')(
  connect(mapStateToProps, mapDispatchToProps)(FastStart),
);
