import React from 'react';
import { connect } from 'react-redux';
import * as Progress from 'react-native-progress';
import { StackScreenProps } from '@react-navigation/stack';

import { Icon, Button } from '@Components';
import * as ASSETS from '@Config/assets';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import {
  StyledText3, StyledText4, StyledText6, StyledText7, StyledText8,
  StyledText5
} from './badge.style'

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'BadgeView'>;
class BadgeView extends React.Component<RoutePropsType & ReduxPropsType & PagePropsType, any> {
  static setPageConfigs = {
    pageConfig: { backgroundSolidColor: 'secondary' },
      topBarConfig: { title: null, menu: true, color: '#FFF', back: true }
  };

  constructor(props) {
    super(props)
  }

  goToBadgeView = (item) => {
    const { navigate } = this.props.navigation;
    navigate('BadgeView', { badgeId: item });
  }

  render() {
    const { backgrounds } = ASSETS.FASTING;
    const { Bagde, RibbonFull } = ASSETS.FASTING.svgs;
    const challengeItens = [1, 2, 3, 4, 5];

    return (
      <>
        {/* == */}
        <View style={{ height: 170, alignItems: 'center', marginHorizontal: 40 }}>
          <View style={{ width: '100%', paddingHorizontal: 20 }}>
            <StyledText3>
              JOURNAL
            </StyledText3>
            <Text />
            <StyledText4>
              7 Days
            </StyledText4>
            <StyledText4>
              Long 5 Fast Journal
            </StyledText4>
            <Text />
            <StyledText4>
              A lot happens during a fast. Tracking your moo Will
              Help you understand those changes, and reflecte on
              How you’e feeling at different stages of your fast.
            </StyledText4>
          </View>
        </View>

        {/* === */}
        <View style={{ width: '100%', height: 42, bottom: -62, marginTop: -62, }} />

        {/* == */}
        <View style={{ flex: 1, bottom: -62 }}>
          <ImageBackground resizeMode='cover' style={{ flex: 1, paddingBottom: 62, paddingHorizontal: 40 }} source={backgrounds['primary']}>

            {/* == */}
            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'space-between', marginTop: -44 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '100%' }}>
                <Bagde width={80} height={80} />
                <Button color="tertiary">
                  JOIN CHALLENGE
                </Button>
              </View>

              <View style={{ justifyContent: 'center', marginVertical: 40, width: '100%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ flexDirection: 'row' }}>
                    <RibbonFull width={20} height={30} style={{ marginTop: 5 }} />
                    <View style={{ marginLeft: 10 }}>
                      <StyledText6>JOURNAL</StyledText6>
                      <StyledText7>Long 3 entries</StyledText7>
                      <StyledText8>7 days</StyledText8>
                    </View>
                  </View>

                  <Button small font={{ size: 10 }} color="transparent">
                    Invite Friends
                  </Button>
                </View>
              </View>

              <View style={{ width: '100%', marginBottom: 40 }}>
                <Progress.Bar color={'#8B4F9F'} borderWidth={0} borderRadius={10} height={14} unfilledColor={'#FFF'} progress={0.5} width={null} />
              </View>

              <View style={{ bottom: 0, height: 1, width: '100%', position: 'absolute', backgroundColor: 'rgba(255, 255, 255, .4)' }} />
            </View>

            {/* == */}
            <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ width: '100%' }}>
              {challengeItens.map((item, idx) => (
                <TouchableOpacity onPress={() => this.goToBadgeView(item)} style={{ width: '100%', paddingVertical: 29, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                  <Bagde width={80} height={80} />

                  <View style={{ flex: 1, paddingLeft: 30 }}>
                    <StyledText4>JOURNAL</StyledText4>
                    <StyledText3>Long 5 entries</StyledText3>
                    <StyledText5>7 days</StyledText5>
                  </View>

                  <View>
                    <Icon icon={'right'} size={20} color={'#FFF'} />
                  </View>

                  {challengeItens.length != idx + 1 && (
                    <View style={{
                      bottom: 0,
                      height: 1,
                      width: '100%',
                      position: 'absolute',
                      backgroundColor: 'rgba(255, 255, 255, .4)'
                    }} />
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </ImageBackground>
        </View>
      </>
    )
  }
}

function mapStateToProps({ }: ReduxStateType) {
  return {
    useRedux: {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    useDispatch: {
      logout: _ => dispatch(ReduxActions.logout()),
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BadgeView);
