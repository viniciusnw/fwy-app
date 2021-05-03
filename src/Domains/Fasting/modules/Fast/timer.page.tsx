import React from 'react';
import { connect } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { Button } from '@Components';
import { View, Text, TouchableOpacity } from 'react-native';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';

import {
  StyledText9,
  StyledText10,
  StyledText11,
  StyledText12,
  StyledText13,
  StyledText14,
  StyledText15,
  StyledH3,
} from './fast.style';

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'Timer'>;
class Timer extends React.Component<
  RoutePropsType & ReduxPropsType & PagePropsType,
  any
> {
  static setPageConfigs = {
    topBarConfig: { title: null, color: '#FFF' },
    pageConfig: { backgroundImage: 'secondary' },
    bottomBarConfig: { color: '#FFF' },
  };

  constructor(props) {
    super(props);

    this.state = {
      endTimer: false,
    };
  }

  goBadgeNew = () => {
    const { reset } = this.props.navigation;
    reset({
      index: 3,
      routes: [{ name: 'Home' }, { name: 'FastEnd' }, { name: 'BadgeNew' }],
    });
  };

  startFast = () => {
    this.props.setPageConfigs({
      topBarConfig: { title: null, back: true, menu: true, color: '#FFF' },
    });
    this.setState({ endTimer: true });
  };

  render() {
    const { goBack } = this.props.navigation;
    const { endTimer } = this.state;

    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginHorizontal: 40,
        }}>
        <View style={{ marginBottom: 70 }}>
          <StyledH3>
            {!endTimer ? 'Get ready to fast' : 'You’re Fasting!'}
          </StyledH3>
        </View>

        {/* === */}
        <View style={{ marginBottom: 60 }}>
          <AnimatedCircularProgress
            fill={30}
            size={300}
            width={30}
            rotation={360}
            duration={1000}
            lineCap="round"
            backgroundWidth={30}
            tintColor="#EC5349"
            backgroundColor="#222842">
            {(fill) => (
              <View
                style={{
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  paddingTop: 60,
                  paddingBottom: 40,
                  flex: 1,
                }}>
                <StyledText9>Time Since Last Fast</StyledText9>
                <StyledText10>01:19:{fill.toFixed(0)}</StyledText10>
                <StyledText11>
                  Upcoming fast{`\n`}
                  <StyledText12> 13 hours </StyledText12>
                </StyledText11>
              </View>
            )}
          </AnimatedCircularProgress>
        </View>

        {/* === */}
        {!endTimer ? (
          <>
            <View style={{ marginBottom: 80 }}>
              <Button onPress={this.startFast}>Start your 13h Fast</Button>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginBottom: 20,
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <Button onPress={goBack} color="primary">
                CHANGE FAST
              </Button>

              <Button color="primary">SET REMINDER</Button>
            </View>
          </>
        ) : (
          <>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                marginBottom: 80,
              }}>
              <TouchableOpacity style={{ alignItems: 'center' }}>
                <StyledText13>STARTED FASTING</StyledText13>
                <StyledText14>Today, 12:59 PM</StyledText14>
                <StyledText15>Edit Start.</StyledText15>
              </TouchableOpacity>

              <View style={{ alignItems: 'center' }}>
                <StyledText13>FAST ENDING</StyledText13>
                <StyledText14>Tomorrow, 1:59 PM</StyledText14>
              </View>
            </View>

            <View style={{ width: '40%', alignSelf: 'center' }}>
              <Button onPress={this.goBadgeNew}>End Fast</Button>
            </View>
          </>
        )}
      </View>
    );
  }
}

function mapStateToProps({}: ReduxStateType) {
  return {
    useRedux: {},
  };
}

function mapDispatchToProps(dispatch) {
  return {
    useDispatch: {
      logout: (_) => dispatch(ReduxActions.logout()),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
