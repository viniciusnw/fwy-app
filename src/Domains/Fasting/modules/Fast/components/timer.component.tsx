import React from 'react';
import { connect } from 'react-redux';
import { StyledText10 } from './../fast.style';
import CountDown from 'react-native-countdown-component';
import { ReduxPropsType, ReduxStateType } from '@Redux/Fasting';

class FastTimer extends React.PureComponent<ReduxPropsType, any> {
  constructor(props) {
    super(props);
    this.state = {
      differenceInSeconds: 0,
    };
  }

  componentDidMount() {
    this.handlerLoadFastingSeconds();
  }

  private handlerLoadFastingSeconds = () => {
    const { fasting } = this.props.useRedux.Fastings;

    if (!fasting) return;
    if (!fasting.endDate) return;
    const differenceInTime = fasting.endDate.getTime() - new Date().getTime();
    const differenceInSeconds = differenceInTime / 1000;

    this.setState({
      differenceInSeconds: parseInt(differenceInSeconds.toFixed()),
    });
  };

  render() {
    const { differenceInSeconds } = this.state;
    if (!differenceInSeconds) return <StyledText10>00:00:00</StyledText10>;
    return (
      <>
        <CountDown
          size={20}
          until={differenceInSeconds}
          onFinish={() => console.log('FinishedTime')}
          onPress={() => console.log('PressTime')}
          style={{}}
          digitStyle={{
            backgroundColor: 'none',
            fontWeight: 'bold',
          }}
          showSeparator
          separatorStyle={{
            color: '#FFF',
            fontFamily: 'AdobeClean-Bold',
            fontSize: 44,
          }}
          digitTxtStyle={{
            color: '#FFF',
            fontFamily: 'AdobeClean-Bold',
            fontSize: 44,
          }}
          timeToShow={['H', 'M', 'S']}
          timeLabels={{ h: '', m: '', s: '' }}
        />
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

export default connect(mapStateToProps, null)(FastTimer);
