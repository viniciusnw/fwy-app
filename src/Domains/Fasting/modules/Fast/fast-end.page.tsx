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
    topBarConfig: { back: true, color: '#FFF' },
    pageConfig: { backgroundImage: 'tertiary' },
    bottomBarConfig: { color: '#FFF' },
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      Emotes: { Asset9, Asset10, Asset11, Asset12, Asset13 },
    } = ASSETS.FASTING.svgs;
    const { backgrounds } = ASSETS.FASTING;

    const endFastItens = [
      {
        title: 'STARTERED FASTING',
        subtitle: 'Yerstarday, 12:59 PM',
      },
      {
        title: 'GOAL REACHED',
        subtitle: 'Today, 1:59 PM',
      },
      {
        title: 'NIGHT EATING',
        subtitle: 'Time zone data',
      },
    ];

    return (
      <>
        {/* === */}
        <View style={{ height: 200, width: '100%' }}>
          <ImageBackground
            resizeMode="cover"
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              paddingHorizontal: 40,
              paddingVertical: 30,
            }}
            source={backgrounds['tertiary']}>
            <View>
              <StyledText16>Nice effort! </StyledText16>
              <StyledText17>You completed a fast for </StyledText17>
              <StyledText17>
                a total <StyledText18>8 hours.</StyledText18>
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

            {endFastItens.map((item) => (
              <View
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
          </View>
        </View>
      </>
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

export default connect(mapStateToProps, mapDispatchToProps)(FastEnd);
