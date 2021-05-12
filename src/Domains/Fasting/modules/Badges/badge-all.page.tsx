import React from 'react';
import { connect } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';

import * as ASSETS from '@Config/assets';
import { Icon, Button } from '@Components';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import {
  StyledText3, StyledText4, StyledText5
} from './badge.style'

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'BadgeAll'>;
class BadgeAll extends React.Component<RoutePropsType & ReduxPropsType & PagePropsType, any> {

  static setPageConfigs = {
    topBarConfig: { title: null, menu: true, color: '#FFF', back: true }
  };

  constructor(props) {
    super(props)
  }

  goToBadgeView = () => {
    const { navigation } = this.props;
    navigation.navigate('BadgeView', { badgeId: 1 });
  }

  render() {
    const { Bagde } = ASSETS.FASTING.svgs;
    const challengeItens = [1, 2, 3, 4, 5]

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around', marginHorizontal: 40 }}>

        <View style={{ width: '100%', padding: 20, borderRadius: 20, backgroundColor: '#8B4F9F' }}>
          <StyledText3>
            Join a Challange
          </StyledText3>
          <Text />
          <StyledText4>
            Challenge yourself to better Health and unlock
            Exclusive Achievements along the way. With
            Challenges you can fast along with our experts,
            Invite Friends to tackle a Challenge alongside you,
            And fast forward to your goals.
          </StyledText4>
        </View>

        <ScrollView style={{ marginTop: 40, width: '100%' }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>

          {challengeItens.map((item, idx) => (
            <TouchableOpacity onPress={this.goToBadgeView}
              style={{
                width: '100%',
                paddingVertical: 29,
                flexDirection: 'row',
                position: 'relative',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
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
      </View>
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
)(BadgeAll);
