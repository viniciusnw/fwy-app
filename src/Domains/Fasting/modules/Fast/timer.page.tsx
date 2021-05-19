import React from 'react';
import { connect } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { Button } from '@Components';
import { View, Text, TouchableOpacity } from 'react-native';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';
import FastTimer from './components/timer.component';

import {
  StyledText9,
  StyledText11,
  StyledText12,
  StyledText13,
  StyledText14,
  StyledText15,
  StyledH3,
} from './fast.style';

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'Timer'>;
class Timer extends React.PureComponent<
  RoutePropsType & ReduxPropsType & PagePropsType,
  any
> {
  static setPageConfigs = {
    topBarConfig: { title: null, menu: true, back: true, color: '#FFF' },
    pageConfig: { backgroundImage: 'secondary' },
    bottomBarConfig: { color: '#FFF' },
  };

  private interval;

  constructor(props) {
    super(props);

    this.state = {
      startTimer: false,
      differenceInPercentage: 0,
    };
  }

  componentDidMount() {
    // console.log('Timer=>componentDidMount: ', this.props);
    this.handlerLoadFasting();
    this.handlerUpdateFastingTimer();
  }

  componentDidUpdate(prevProps) {
    // console.log('Timer=>componentDidUpdate: ', this.props);
    this.handlerCreateFasting(prevProps);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  private handlerLoadFasting = () => {
    const {
      params: { fastingId },
    } = this.props.route;
    if (!fastingId) return;

    this.setState({ startTimer: !!fastingId });
    this.props.useDispatch.getFastings({
      actives: false,
      fastingId,
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
        ...fasting,
        startDate,
        endDate,
      },
    });
  };

  private handlerCreateFasting = (prevProps: ReduxPropsType) => {
    const {
      createFasting: { success, loading, data },
    } = this.props.useRedux.Fastings;

    const {
      createFasting: { data: prevData },
    } = prevProps.useRedux.Fastings;

    const {
      params: { fastingId },
    } = this.props.route;

    const { reset } = this.props.navigation;

    if (loading) return;
    if (!success) return;
    if (fastingId) return;
    if (prevData == data) return;

    reset({
      index: 2,
      routes: [
        { name: 'Home' },
        {
          name: 'Timer',
          params: {
            fastingId: data,
          },
        },
      ],
    });
  };

  private handlerLoadFastingPercentage = () => {
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

  private handlerUpdateFastingTimer = () => {
    this.interval = setInterval(
      () => this.handlerLoadFastingPercentage(),
      1000,
    );
  };

  render() {
    const { goBack } = this.props.navigation;
    const { startTimer, differenceInPercentage } = this.state;

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
            {!startTimer ? 'Get ready to fast' : 'You’re Fasting!'}
          </StyledH3>
        </View>

        {/* === */}
        <View style={{ marginBottom: 60 }}>
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
              <View
                style={{
                  flex: 1,
                  paddingTop: 60,
                  paddingBottom: 40,
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                {false ? (
                  <StyledText9>Time Since Last Fast</StyledText9>
                ) : (
                  <StyledText9>Upcoming fast</StyledText9>
                )}

                <FastTimer />

                {false ? (
                  <StyledText11>
                    Upcoming fast{`\n`}
                    <StyledText12> 13 hours </StyledText12>
                  </StyledText11>
                ) : (
                  <StyledText11 />
                )}
              </View>
            )}
          </AnimatedCircularProgress>
        </View>

        {/* === */}
        {!startTimer ? (
          <>
            <View style={{ marginBottom: 80 }}>
              <Button onPress={this.handlerStartFasting}>
                Start your 13h Fast
              </Button>
            </View>

            <View
              style={{
                width: '100%',
                marginBottom: 20,
                flexDirection: 'row',
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
                width: '100%',
                marginBottom: 80,
                flexDirection: 'row',
                justifyContent: 'space-between',
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
              <Button onPress={() => null}>End Fast</Button>
            </View>
          </>
        )}
      </View>
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

function mapDispatchToProps(dispatch) {
  return {
    useDispatch: {
      getFastings: (_) => dispatch(ReduxActions.getFastings(_)),
      createFasting: (_) => dispatch(ReduxActions.createFasting(_)),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
