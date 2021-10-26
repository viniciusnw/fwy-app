import React from 'react';
import { connect } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';
import { withTranslation, WithTranslation } from 'react-i18next';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';

import { Button } from '@Components';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';

import FastTimer from './components/timer.component';
import CirgularTimer from './components/circular-timer.component';

import {
  StyledH3,
  Container,
  StyledText13,
  StyledText14,
  StyledText15,
  ContainerButtons,
} from './fast.style';

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'Timer'>;
class Timer extends React.PureComponent<
  RoutePropsType & ReduxPropsType & PagePropsType & WithTranslation,
  any
> {
  private timerInterval;

  static setPageConfigs = {
    bottomBarConfig: { color: '#FFF' },
    pageConfig: { backgroundImage: 'secondary' },
    topBarConfig: { title: null, menu: true, back: true, color: '#FFF' },
  };

  constructor(props) {
    super(props);
    this.state = {
      startFasting: false,
      finishFasting: false,
      differenceInPercentage: 0,
      visibleDateTimePickerModal: false,
    };
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  componentDidMount() {
    this.handlerLoadFasting();
    this.handlerUpdateFastingTimer();
  }

  componentDidUpdate(prevProps) {
    this.handlerCreateFasting(prevProps);
    this.handlerEditStartDate(prevProps);
  }

  render() {
    const {
      startFasting,
      visibleDateTimePickerModal,
      differenceInPercentage,
    } = this.state;
    const { goBack } = this.props.navigation;
    const {
      editFasting: { loading: loadingEditFasting },
    } = this.props.useRedux.Fastings;

    const phoneLanguage = this.props.i18n.language.replace('-', '_');

    return (
      <Container
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={{ marginBottom: 70 }}>
          <StyledH3>
            {!startFasting ? this.t('title') : this.t('titleStart')}
          </StyledH3>
        </View>

        {/* === */}
        <View style={{ marginBottom: 60, alignItems: 'center' }}>
          <CirgularTimer differenceInPercentage={differenceInPercentage}>
            <FastTimer
              startFasting={startFasting}
              onFinish={() => this.setFinishFast(true)}
              differenceInHours={this.DifferenceInHours}
              differenceInPercentage={differenceInPercentage}
            />
          </CirgularTimer>
        </View>

        {/* === */}
        {!startFasting ? (
          <>
            <View
              style={{
                justifyContent: 'center',
                flexDirection: 'row',
                marginBottom: 80,
              }}>
              <Button onPress={this.handlerStartFasting}>
                {this.t('btnStart', { HOURS: this.DifferenceInHours })}
              </Button>
            </View>

            <ContainerButtons marginBottom={20}>
              <Button onPress={goBack} color="primary">
                {this.t('btnChange')}
              </Button>

              <Button onPress={() => null} color="primary">
                {this.t('btnRemider')}
              </Button>
            </ContainerButtons>
          </>
        ) : (
          <>
            <ContainerButtons marginBottom={80}>
              <TouchableOpacity
                style={{ alignItems: 'center' }}
                onPress={() => this.setVisibleDateTimePickerModal(true)}>
                {loadingEditFasting ? (
                  <View style={{ justifyContent: 'center', width: 100 }}>
                    <StyledText13 />
                    <ActivityIndicator size="small" color={'#FFF'} />
                    <StyledText13 />
                  </View>
                ) : (
                  <>
                    <StyledText13>{this.t('start')}</StyledText13>
                    <StyledText14>{this.StartDateFormated}</StyledText14>
                    <StyledText15>{this.t('edit')}</StyledText15>
                  </>
                )}
              </TouchableOpacity>

              <View style={{ alignItems: 'center' }}>
                <StyledText13>{this.t('end')}</StyledText13>
                <StyledText14>{this.EndDateFormated}</StyledText14>
              </View>
            </ContainerButtons>

            <View style={{ width: '40%', alignSelf: 'center' }}>
              <Button onPress={this.goToEndFast}>{this.t('btnEnd')}</Button>
            </View>
          </>
        )}

        {visibleDateTimePickerModal && (
          <DateTimePickerModal
            mode="datetime"
            isVisible={true}
            locale={phoneLanguage}
            maximumDate={new Date()}
            date={this.InitialDateTimePickerModal}
            onConfirm={this.onConfirmEditStartDate}
            onCancel={() => this.setVisibleDateTimePickerModal(false)}
          />
        )}
      </Container>
    );
  }

  private handlerUpdateFastingTimer = () => {
    this.timerInterval = setInterval(() => this.setDifferenceInPercentage(), 1000);
  };

  private handlerLoadFasting = () => {
    const {
      params: { fastingId: fastingIdFromModel },
    } = this.props.route;
    if (!fastingIdFromModel) return;

    this.setState({ startFasting: !!fastingIdFromModel });
    this.props.useDispatch.getFasting({
      fastingId: fastingIdFromModel,
    });
  };

  private handlerStartFasting = () => {
    const {
      params: { fasting },
    } = this.props.route;
    if (!fasting) return;

    const endDate = new Date();
    const startDate = new Date();
    endDate.setDate(startDate.getDate() + fasting.days);
    endDate.setTime(endDate.getTime() + fasting.hours * 60 * 60 * 1000);

    this.props.useDispatch.createFasting({
      fasting: {
        endDate,
        startDate,
        name: fasting.name,
        color: fasting.color,
        finished: fasting.finished,
      },
    });
  };

  private handlerCreateFasting = (prevProps: ReduxPropsType) => {
    const { reset } = this.props.navigation;

    const {
      createFasting: { success, loading, data: fastingIdFromModel },
    } = this.props.useRedux.Fastings;

    const {
      createFasting: { data: prevFastingIdFromModel },
    } = prevProps.useRedux.Fastings;

    const {
      params: { fastingId: fastingIdFromParam },
    } = this.props.route;

    if (loading) return;
    if (!success) return;
    if (fastingIdFromParam) return;
    if (prevFastingIdFromModel == fastingIdFromModel) return;

    reset({
      index: 2,
      routes: [
        { name: 'Home' },
        {
          name: 'Timer',
          params: {
            fastingId: fastingIdFromModel,
          },
        },
      ],
    });
  };

  private handlerEditStartDate = (prevProps: ReduxPropsType) => {
    const { reset } = this.props.navigation;
    const { isFocused } = this.props;

    const {
      editFasting: { loading: loadingEditFasting, success },
    } = this.props.useRedux.Fastings;

    const {
      editFasting: { loading: prevLoadingEditFasting },
    } = prevProps.useRedux.Fastings;

    const {
      params: { fastingId: fastingIdFromParam },
    } = this.props.route;

    if (isFocused && success && prevLoadingEditFasting != loadingEditFasting) {
      reset({
        index: 2,
        routes: [
          { name: 'Home' },
          {
            name: 'Timer',
            params: {
              fastingId: fastingIdFromParam,
            },
          },
        ],
      });
    }
  };

  private onConfirmEditStartDate = (date: Date) => {
    this.setVisibleDateTimePickerModal(false);
    const fastingId = this.FastingId;

    if (fastingId) {
      this.props.useDispatch.editFasting({
        id: fastingId,
        editStartEnd: true,
        fasting: {
          startDate: date,
        },
      });
    }
  };

  private setFinishFast = (finish: boolean) => {
    this.setState({
      finishFasting: finish,
    });
  };

  private setVisibleDateTimePickerModal = (visible: boolean) => {
    this.setState({
      visibleDateTimePickerModal: visible,
    });
  };

  private goToEndFast = () => {
    const { navigation } = this.props;
    navigation.navigate('FastEnd');
  };

  private setDifferenceInPercentage = () => {
    const { fasting } = this.props.useRedux.Fastings;

    if (!fasting) return;
    if (!fasting.endDate) return;
    const start = fasting.startDate.getTime();
    const end = fasting.endDate.getTime();
    const now = new Date().getTime();

    const elapsed = now - start;
    const differenceInPercentage = (elapsed / (end - start)) * 100;

    this.setState({ differenceInPercentage }, () => {
      const { differenceInPercentage } = this.state;
      const remainingTime = 100 - differenceInPercentage;
      if (remainingTime < 0) clearInterval(this.timerInterval);
    });
  };

  private get InitialDateTimePickerModal() {
    const { fasting } = this.props.useRedux.Fastings;
    if (!fasting) return new Date();
    return fasting.startDate;
  }

  private get StartDateFormated() {
    const { fasting } = this.props.useRedux.Fastings;
    if (!fasting) return;
    const phoneLanguage = this.props.i18n.language;
    const time = fasting.startDate.toLocaleTimeString(phoneLanguage).split(':');
    const timeAux = time[2].split(' ')[1] || '';
    const date = fasting.startDate.toLocaleDateString(phoneLanguage, {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });

    return `${date} ${time[0]}:${time[1]} ${timeAux}`;
  }

  private get EndDateFormated() {
    const { fasting } = this.props.useRedux.Fastings;
    if (!fasting) return;
    const phoneLanguage = this.props.i18n.language;
    const time = fasting.endDate.toLocaleTimeString(phoneLanguage).split(':');
    const timeAux = time[2].split(' ')[1] || '';
    const date = fasting.endDate.toLocaleDateString(phoneLanguage, {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });

    return `${date} ${time[0]}:${time[1]} ${timeAux}`;
  }

  private get FastingId() {
    const { fasting } = this.props.useRedux.Fastings;
    if (!fasting) return false;
    return fasting._id;
  }

  private get DifferenceInHours() {
    const {
      params: { fasting },
    } = this.props.route;
    if (!fasting) return 0;

    const endDate = new Date();
    const startDate = new Date();
    endDate.setDate(startDate.getDate() + fasting.days);
    endDate.setTime(endDate.getTime() + fasting.hours * 60 * 60 * 1000);

    const differenceInTime = endDate.getTime() - new Date().getTime();
    const differenceInHours = differenceInTime / 1000 / 3600;
    return differenceInHours.toFixed();
  }

  private t = (value: string, variables?: any) =>
    this.props.t && this.props.t(value, variables);
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
      getFasting: (_) => dispatch(ReduxActions.getFasting(_)),
      editFasting: (_) => dispatch(ReduxActions.editFasting(_)),
      createFasting: (_) => dispatch(ReduxActions.createFasting(_)),
    },
  };
}

export default withTranslation('Timer')(
  connect(mapStateToProps, mapDispatchToProps)(Timer),
);
