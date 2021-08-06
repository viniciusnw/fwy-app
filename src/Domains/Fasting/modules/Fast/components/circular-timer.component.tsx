import React from 'react';
import { connect } from 'react-redux';
import { ReduxPropsType, ReduxStateType } from '@Redux/Fasting';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { FASTING } from '@Config/constants';
import {
  TimerContainer,
  StyledText9,
  StyledText11,
  StyledText12,
} from './../fast.style';

class CirgularTimer extends React.PureComponent<
  ReduxPropsType & { startFasting: boolean },
  any
> {
  private interval;

  constructor(props) {
    super(props);
    this.state = {
      differenceInPercentage: 0,
    };
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    this.handlerUpdateFastingTimer();
  }

  private handlerUpdateFastingTimer = () => {
    this.interval = setInterval(() => this.getDifferenceInPercentage(), 1000);
  };

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

  render() {
    const { fastColors } = FASTING;
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
              {false ? (
                <StyledText9>Time Since Last Fast</StyledText9>
              ) : startFasting ? (
                <StyledText9>
                  Remaining ({remainingTimeToShow.toFixed(0)}%)
                </StyledText9>
              ) : (
                <StyledText9>Upcoming fast</StyledText9>
              )}

              {this.props.children}

              <StyledText11>{this.CurrentTime}</StyledText11>
            </TimerContainer>
          )}
        </AnimatedCircularProgress>
      </>
    );
  }

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

    return hours + ':' + minutes + ':' + seconds;
  }
}

function mapStateToProps({ Fastings }: ReduxStateType) {
  return {
    useRedux: {
      Fastings,
    },
  };
}

export default connect(mapStateToProps, null)(CirgularTimer);
