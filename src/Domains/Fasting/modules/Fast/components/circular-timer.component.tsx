import React from 'react';
import { connect } from 'react-redux';
import { ReduxPropsType, ReduxStateType } from '@Redux/Fasting';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
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
    this.interval = setInterval(
      () => this.getDifferenceInPercentage(),
      1000,
    );
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

    this.setState({ differenceInPercentage });
  };

  render() {
    const { startFasting } = this.props;
    const { differenceInPercentage } = this.state;
    const remainingTime = 100 - differenceInPercentage;

    return (
      <>
        <AnimatedCircularProgress
          size={300}
          width={30}
          rotation={360}
          duration={1000}
          lineCap="round"
          backgroundWidth={30}
          tintColor="#EC5349"
          backgroundColor="#222842"
          fill={differenceInPercentage}>
          {(fill) => (
            <TimerContainer>
              {false ? (
                <StyledText9>Time Since Last Fast</StyledText9>
              ) : startFasting ? (
                <StyledText9>
                  Remaining ({remainingTime.toFixed(1)}%)
                </StyledText9>
              ) : (
                <StyledText9>Upcoming fast</StyledText9>
              )}

              {this.props.children}

              {false ? (
                <StyledText11>
                  Upcoming fast{`\n`}
                  <StyledText12> 13 hours </StyledText12>
                </StyledText11>
              ) : (
                <StyledText11 />
              )}
            </TimerContainer>
          )}
        </AnimatedCircularProgress>
      </>
    );
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
