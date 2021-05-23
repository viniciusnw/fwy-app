import React from 'react';
import { connect } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';

import * as ASSETS from '@Config/assets';
import { Button, Icon, Input } from '@Components';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import {
  StyledTextInput,
  StyledText16,
  StyledText17,
  StyledText18,
  StyledText19,
  StyledText20,
  StyledText21,
  StyledText22,
  StyledText23,
  StyledText9,
} from './fast.style';

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'FastEnd'>;
class FastEnd extends React.Component<
  RoutePropsType & ReduxPropsType & PagePropsType,
  any
> {
  static setPageConfigs = {
    topBarConfig: { color: '#FFF' },
    pageConfig: { backgroundImage: 'tertiary' },
    bottomBarConfig: { color: '#FFF' },
  };

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    this.handlerEndFasting();
  }

  private endFasting = (save: boolean) => {
    const {
      createFasting: { data: fastingId },
    } = this.props.useRedux.Fastings;
    if (fastingId) this.props.useDispatch.endFasting({ fastingId, save });
  };

  private handlerEndFasting = () => {
    const { reset } = this.props.navigation;
    const {
      fasting,
      endFasting: { success },
    } = this.props.useRedux.Fastings;

    if (!fasting && success) {
      reset({
        index: 1,
        routes: [{ name: 'Home' }],
      });
    }
  };

  render() {
    const {
      Emotes: { Asset9, Asset10, Asset11, Asset12, Asset13 },
    } = ASSETS.FASTING.svgs;
    const { backgrounds } = ASSETS.FASTING;

    const endFastItens = [
      {
        title: 'STARTERED FASTING',
        subtitle: this.StartDate,
      },
      {
        title: 'GOAL REACHED',
        subtitle: this.EndDate,
      },
    ];

    const {
      endFasting: { loading },
    } = this.props.useRedux.Fastings;

    return (
      <>
        {/* === */}
        <View style={{ height: 200, width: '100%' }}>
          <ImageBackground
            resizeMode="cover"
            style={{
              flex: 1,
              paddingVertical: 30,
              paddingHorizontal: 40,
              justifyContent: 'flex-end',
            }}
            source={backgrounds['tertiary']}>
            <View>
              <StyledText16>Nice effort! </StyledText16>
              <StyledText17>You completed a fast for </StyledText17>
              <StyledText17>
                a total <StyledText18>{this.Duration}</StyledText18>
              </StyledText17>
            </View>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'flex-end',
              }}>
              <StyledText19>Share fast</StyledText19>
              <Icon size={25} color={'#FFF'} icon="upload" />
            </TouchableOpacity>
          </ImageBackground>
        </View>

        {/* === */}
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginHorizontal: 40,
            paddingTop: 30,
          }}>
          <View style={{ width: '100%' }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
              }}>
              <Icon size={25} color={'#FFF'} icon="camera" />
              <StyledText20>Share your fast breaker</StyledText20>
            </TouchableOpacity>

            {endFastItens.map((item, idx) => (
              <View
                key={idx}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: 16,
                }}>
                <View>
                  <StyledText21> {item.title} </StyledText21>
                  <StyledText22> {item.subtitle} </StyledText22>
                </View>

                <TouchableOpacity
                  style={{
                    marginLeft: 8,
                    borderRadius: 40,
                    paddingVertical: 8,
                    paddingHorizontal: 12,
                    justifyContent: 'center',
                    backgroundColor: 'rgba(255, 255, 255, .4)',
                  }}>
                  <StyledText23>EDIT</StyledText23>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          <View style={{ marginTop: 40, width: '100%' }}>
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
              <StyledText9>How are you feealing?</StyledText9>
              <View style={{ flexDirection: 'row', marginTop: 12 }}>
                <Asset9 width={30} height={30} />
                <Asset10 width={30} height={30} />
                <Asset11 width={30} height={30} />
                <Asset12 width={30} height={30} />
                <Asset13 width={30} height={30} />
              </View>
            </View>

            <StyledTextInput
              multiline={true}
              placeholder="Add a Note"
              placeholderTextColor="#FFF"
            />

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <Button
                loading={loading}
                color="secondary"
                style={{ flex: 1, marginRight: 8 }}
                onPress={() => this.endFasting(true)}>
                Save
              </Button>
              <Button
                loading={loading}
                color={'transparent'}
                style={{ flex: 1, marginLeft: 8 }}
                onPress={() => this.endFasting(false)}>
                Delete
              </Button>
            </View>
          </View>
        </View>
      </>
    );
  }

  private get StartDate() {
    const { fasting } = this.props.useRedux.Fastings;
    if (!fasting) return;
    const time = fasting.startDate.toTimeString().split('G')[0].split(':');

    return `${fasting.startDate.toDateString()}, ${time[0]}:${time[1]}`;
  }

  private get EndDate() {
    const endDate = new Date();
    const time = endDate.toTimeString().split('G')[0].split(':');

    return `${endDate.toDateString()}, ${time[0]}:${time[1]}`;
  }

  private get Duration() {
    const { fasting } = this.props.useRedux.Fastings;
    if (!fasting) return;

    const differenceInTime = new Date().getTime() - fasting.startDate.getTime();
    const differenceInHours = differenceInTime / 1000 / 3600;
    const differenceInMinutes = differenceInTime / 1000 / 60;

    if (differenceInHours >= 1) return `${differenceInHours.toFixed()} hours.`;
    else if (differenceInMinutes >= 1)
      return `${differenceInMinutes.toFixed()} minutes.`;
    else return `1 minute.`;
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
      endFasting: (_) => dispatch(ReduxActions.endFasting(_)),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FastEnd);
