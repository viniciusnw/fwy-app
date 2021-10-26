import React from 'react';
import { connect } from 'react-redux';
import CountDown from 'react-native-countdown-component';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withTranslation, WithTranslation } from 'react-i18next';

import { TimeToShowEnum } from '@Config/constants';
import { StyledText10, StyledText9, StyledText11 } from './../fast.style';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';

class FastTimer extends React.PureComponent<
  ReduxPropsType & {
    onFinish: () => void;
    startFasting: boolean;
    differenceInHours: number;
    differenceInPercentage: number;
  } & WithTranslation,
  any
> {
  private timeInterval;

  constructor(props) {
    super(props);
    this.state = {
      extraTime: '00 : 00 : 00',
      currentTime: '00 : 00 : 00',
    };
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval);
  }

  componentDidMount() {
    this.handlerUpdateTime();
  }

  Render_TimeRemaining() {
    const {
      General: { timerPage_TimeToDisplay: timeToShow },
    } = this.props.useRedux;
    const fontSize = timeToShow == TimeToShowEnum.remaining ? 44 : 12;
    const size = timeToShow == TimeToShowEnum.remaining ? 28 : 6;

    return (
      <>
        {this.DifferenceInSeconds < 0 ? (
          <StyledText10>{this.state.extraTime}</StyledText10>
        ) : (
          <>
            <CountDown
              size={size}
              disableHoursLimit
              onFinish={this.props.onFinish}
              until={this.DifferenceInSeconds}
              onPress={() => this.changeTimeToShow()}
              digitStyle={{
                fontWeight: 'bold',
                backgroundColor: 'none',
              }}
              showSeparator
              separatorStyle={{
                fontSize: fontSize,
                color: '#FFF',
                fontFamily: 'AdobeClean-Bold',
              }}
              digitTxtStyle={{
                fontSize: fontSize,
                color: '#FFF',
                fontFamily: 'AdobeClean-Bold',
              }}
              timeToShow={['H', 'M', 'S']}
              timeLabels={{ h: '', m: '', s: '' }}
            />
          </>
        )}
      </>
    );
  }

  Render_TimeElapsed() {
    const {
      General: { timerPage_TimeToDisplay: timeToShow },
    } = this.props.useRedux;
    const size = timeToShow == TimeToShowEnum.elapsed ? 44 : 12;
    return (
      <TouchableOpacity onPress={() => this.changeTimeToShow()}>
        <StyledText11 size={size}>{this.state.currentTime}</StyledText11>
      </TouchableOpacity>
    );
  }

  Render_TimeLabel() {
    const {
      General: { timerPage_TimeToDisplay: timeToShow },
    } = this.props.useRedux;
    const { startFasting, differenceInPercentage } = this.props;
    const remainingTime = 100 - differenceInPercentage;
    const remainingTimeToShow = remainingTime < 0 ? 0 : remainingTime;

    return (
      <>
        {startFasting ? (
          <StyledText9>
            {timeToShow == TimeToShowEnum.remaining ? (
              <>
                {this.t('remaining')} ({remainingTimeToShow.toFixed(0)}%)
              </>
            ) : (
              <>
                {this.t('elapsed')} ({differenceInPercentage.toFixed(0)}%)
              </>
            )}
          </StyledText9>
        ) : (
          <StyledText9>{this.t('upcoming')}</StyledText9>
        )}
      </>
    );
  }

  Render_TimeToShow() {
    const {
      General: { timerPage_TimeToDisplay: timeToShow },
    } = this.props.useRedux;
    const { startFasting } = this.props;

    if (!startFasting) return <StyledText9 />;

    if (timeToShow == TimeToShowEnum.remaining)
      return [this.Render_TimeRemaining(), this.Render_TimeElapsed()];
    return [this.Render_TimeElapsed(), this.Render_TimeRemaining()];
  }

  render() {
    const { startFasting } = this.props;

    return (
      <>
        {this.Render_TimeLabel()}

        {!startFasting && (
          <StyledText10>{this.InitialHours} : 00 : 00</StyledText10>
        )}

        {this.Render_TimeToShow()}
      </>
    );
  }

  private changeTimeToShow() {
    this.props.useDispatch.changeTimerToDisplay();
  }

  private handlerUpdateTime = () => {
    this.timeInterval = setInterval(
      () =>
        this.setState({
          currentTime: this.CurrentTime,
          extraTime: this.ExtraTime,
        }),
      1000,
    );
  };

  private get CurrentTime() {
    const { fasting } = this.props.useRedux.Fastings;

    if (!fasting) return;
    if (!fasting.endDate) return;

    const differenceInTime = new Date().getTime() - fasting.startDate.getTime();

    let days: any = Math.floor(differenceInTime / 86400000),
      seconds: any = Math.floor((differenceInTime / 1000) % 60),
      minutes: any = Math.floor((differenceInTime / (1000 * 60)) % 60),
      hours: any =
        Math.floor((differenceInTime / (1000 * 60 * 60)) % 24) +
        (days > 0 ? days : 0) * 24;

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + ' : ' + minutes + ' : ' + seconds;
  }

  private get DifferenceInSeconds() {
    const { fasting } = this.props.useRedux.Fastings;

    if (!fasting) return 0;
    if (!fasting.endDate) return 0;

    const differenceInTime = fasting.endDate.getTime() - new Date().getTime();

    const timeRemaining =
      fasting.initialTotalHours * 3600 - differenceInTime / 1000;

    const differenceInSeconds =
      fasting.initialTotalHours * 3600 - timeRemaining;

    return parseInt(differenceInSeconds.toFixed());
  }

  private get InitialHours() {
    const { differenceInHours } = this.props;
    if (differenceInHours >= 10) return differenceInHours;
    else return `0${differenceInHours}`;
  }

  private get ExtraTime() {
    const { fasting } = this.props.useRedux.Fastings;

    if (!fasting) return;
    if (!fasting.endDate) return;

    const differenceInTime = new Date().getTime() - fasting.endDate.getTime();

    let days: any = Math.floor(differenceInTime / 86400000),
      seconds: any = Math.floor((differenceInTime / 1000) % 60),
      minutes: any = Math.floor((differenceInTime / (1000 * 60)) % 60),
      hours: any =
        Math.floor((differenceInTime / (1000 * 60 * 60)) % 24) +
        (days > 0 ? days : 0) * 24;

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return hours + ' : ' + minutes + ' : ' + seconds;
  }

  private t = (value: string, variables?: any) =>
    this.props.t && this.props.t(value, variables);
}

function mapStateToProps({ Fastings, General }: ReduxStateType) {
  return {
    useRedux: {
      Fastings,
      General,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    useDispatch: {
      changeTimerToDisplay: (_) =>
        dispatch(ReduxActions.changeTimerToDisplay()),
    },
  };
}

export default withTranslation('Timer')(
  connect(mapStateToProps, mapDispatchToProps)(FastTimer),
);
