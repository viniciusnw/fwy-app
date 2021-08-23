import React from 'react';
import { connect } from 'react-redux';
import { withTranslation, WithTranslation } from 'react-i18next';
import { ReduxPropsType, ReduxStateType } from '@Redux/Fasting';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { TimerContainer, StyledText9, StyledText11 } from './../fast.style';

class CirgularTimer extends React.PureComponent<
  ReduxPropsType & { startFasting: boolean } & WithTranslation,
  any
> {
  private interval;
  private interval2;

  constructor(props) {
    super(props);
    this.state = {
      differenceInPercentage: 0,
      currentTime: '00:00:00',
    };
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.interval2);
  }

  componentDidMount() {
    this.handlerUpdateFastingTimer();
    this.handlerUpdateCurrentTime();
  }

  private handlerUpdateFastingTimer = () => {
    this.interval = setInterval(() => this.getDifferenceInPercentage(), 1000);
  };

  private handlerUpdateCurrentTime = () => {
    this.interval2 = setInterval(() => this.getCurrentTime(), 1000);
  };

  render() {
    const { startFasting } = this.props;
    const { differenceInPercentage } = this.state;
    const remainingTime = 100 - differenceInPercentage;
    const remainingTimeToShow = remainingTime < 0 ? 0 : remainingTime;

    return (
      <>
        <AnimatedCircularProgress
          size={300}
          width={30}
          rotation={360}
          lineCap="round"
          duration={1450}
          backgroundWidth={30}
          tintColor={'#EC5349'}
          backgroundColor={'#222842'}
          fill={differenceInPercentage}>
          {(fill) => (
            <TimerContainer>
              {startFasting ? (
                <StyledText9>
                  {this.t('remaining')} ({remainingTimeToShow.toFixed(0)}%)
                </StyledText9>
              ) : (
                <StyledText9>{this.t('upcoming')}</StyledText9>
              )}

              {this.props.children}

              <StyledText11>{this.state.currentTime}</StyledText11>
            </TimerContainer>
          )}
        </AnimatedCircularProgress>
      </>
    );
  }

  private getDifferenceInPercentage = () => {
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
      if (remainingTime < 0) clearInterval(this.interval);
    });
  };

  private getCurrentTime() {
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

    this.setState({ currentTime: hours + ':' + minutes + ':' + seconds });
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

export default withTranslation('Timer')(
  connect(mapStateToProps, null)(CirgularTimer),
);
