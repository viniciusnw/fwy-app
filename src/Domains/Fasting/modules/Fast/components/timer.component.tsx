import React from 'react';
import { connect } from 'react-redux';
import { StyledText10 } from './../fast.style';
import CountDown from 'react-native-countdown-component';
import { ReduxPropsType, ReduxStateType } from '@Redux/Fasting';

class FastTimer extends React.PureComponent<
  ReduxPropsType & { differenceInHours: number },
  any
> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (!this.DifferenceInSeconds)
      return <StyledText10>{this.InitialHours}:00:00</StyledText10>;
    else
      return (
        <>
          <CountDown
            size={28}
            disableHoursLimit
            until={this.DifferenceInSeconds}
            // onPress={() => console.log('PressTime')}
            onFinish={() => console.log('Finished Time!!')}
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

  private get DifferenceInSeconds() {
    const { fasting } = this.props.useRedux.Fastings;

    if (!fasting) return;
    if (!fasting.endDate) return;
    const differenceInTime = fasting.endDate.getTime() - fasting.startDate.getTime();
    const timeRemaining = (fasting.initialTotalHours * 3600) - differenceInTime / 1000;
    const differenceInSeconds = (fasting.initialTotalHours * 3600) - timeRemaining

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
