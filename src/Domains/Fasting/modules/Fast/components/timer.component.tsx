import React from 'react';
import { connect } from 'react-redux';
import { StyledText10 } from './../fast.style';
import CountDown from 'react-native-countdown-component';
import { ReduxPropsType, ReduxStateType } from '@Redux/Fasting';

class FastTimer extends React.PureComponent<
  ReduxPropsType & {
    differenceInHours: number;
    onFinish: () => void;
  },
  any
> {
  private interval;

  constructor(props) {
    super(props);
    this.state = {
      extraTime: '00 : 00 : 00',
    };
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidMount() {
    this.handlerUpdateExtraTime();
  }

  private handlerUpdateExtraTime = () => {
    this.interval = setInterval(
      () =>
        this.setState({
          extraTime: this.ExtraTime,
        }),
      1000,
    );
  };

  render() {
    if (this.DifferenceInSeconds < 0)
      return <StyledText10>{this.state.extraTime}</StyledText10>;
    if (!this.DifferenceInSeconds)
      return <StyledText10>{this.InitialHours} : 00 : 00</StyledText10>;
    else
      return (
        <>
          <CountDown
            size={28}
            disableHoursLimit
            onFinish={this.props.onFinish}
            until={this.DifferenceInSeconds}
            onPress={() => console.log('PressTime')}
            digitStyle={{
              fontWeight: 'bold',
              backgroundColor: 'none',
            }}
            showSeparator
            separatorStyle={{
              fontSize: 44,
              color: '#FFF',
              fontFamily: 'AdobeClean-Bold',
            }}
            digitTxtStyle={{
              fontSize: 44,
              color: '#FFF',
              fontFamily: 'AdobeClean-Bold',
            }}
            timeToShow={['H', 'M', 'S']}
            timeLabels={{ h: '', m: '', s: '' }}
          />
        </>
      );
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
}

function mapStateToProps({ Fastings }: ReduxStateType) {
  return {
    useRedux: {
      Fastings,
    },
  };
}

export default connect(mapStateToProps, null)(FastTimer);
