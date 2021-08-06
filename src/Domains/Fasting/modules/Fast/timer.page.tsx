import React from 'react';
import { connect } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';
import { withTranslation, WithTranslation } from 'react-i18next';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { View, TouchableOpacity, ActivityIndicator } from 'react-native';

import { Button } from '@Components';
import { FASTING } from '@Config/constants';
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
  static setPageConfigs = {
    bottomBarConfig: { color: '#FFF' },
    pageConfig: { backgroundImage: 'secondary' },
    topBarConfig: { title: null, menu: true, back: true, color: '#FFF' },
  };

  constructor(props) {
    super(props);
    this.state = {
      finishFasting: false,
      startFasting: false,
      visibleDateTimePickerModal: false,
    };
  }

  componentDidMount() {
    this.handlerLoadFasting();
  }

  componentDidUpdate(prevProps) {
    this.handlerCreateFasting(prevProps);
    this.handlerEditStartDate(prevProps);
  }

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

  render() {
    const { startFasting, visibleDateTimePickerModal } = this.state;
    const { goBack } = this.props.navigation;
    const {
      editFasting: { loading: loadingEditFasting },
    } = this.props.useRedux.Fastings;

    const phoneLanguage = this.props.i18n.language.replace('-', '_');

    return (
      <Container>
        <View style={{ marginBottom: 70 }}>
          <StyledH3>
            {!startFasting ? 'Get ready to fast' : 'You’re Fasting!'}
          </StyledH3>
        </View>

        {/* === */}
        <View style={{ marginBottom: 60 }}>
          <CirgularTimer startFasting={startFasting}>
            <FastTimer
              onFinish={() => this.setFinishFast(true)}
              differenceInHours={this.DifferenceInHours}
            />
          </CirgularTimer>
        </View>

        {/* === */}
        {!startFasting ? (
          <>
            <View style={{ marginBottom: 80 }}>
              <Button onPress={this.handlerStartFasting}>
                Start your {this.DifferenceInHours}h Fast
              </Button>
            </View>

            <ContainerButtons marginBottom={20}>
              <Button onPress={goBack} color="primary">
                CHANGE FAST
              </Button>

              <Button color="primary">SET REMINDER</Button>
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
                    <StyledText13>STARTED FASTING</StyledText13>
                    <StyledText14>{this.StartDateFormated}</StyledText14>
                    <StyledText15>Edit Start.</StyledText15>
                  </>
                )}
              </TouchableOpacity>

              <View style={{ alignItems: 'center' }}>
                <StyledText13>FAST ENDING</StyledText13>
                <StyledText14>{this.EndDateFormated}</StyledText14>
              </View>
            </ContainerButtons>

            <View style={{ width: '40%', alignSelf: 'center' }}>
              <Button onPress={this.goToEndFast}>End Fast</Button>
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

    return `${date} | ${time[0]}:${time[1]} ${timeAux}`;
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

    return `${date} | ${time[0]}:${time[1]} ${timeAux}`;
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
    return differenceInHours;
  }
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
