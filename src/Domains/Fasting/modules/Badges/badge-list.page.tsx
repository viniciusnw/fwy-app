import React from 'react';
import { connect } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';

import * as ASSETS from '@Config/assets';
import { Icon, Button } from '@Components';
import { View, Text, TouchableOpacity } from 'react-native';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';
import { StyledH2 } from './badge.style';

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'BadgeList'>;
class BadgeList extends React.Component<
  RoutePropsType & ReduxPropsType & PagePropsType,
  any
> {
  static setPageConfigs = {
    topBarConfig: {
      title: 'View all badges',
      menu: true,
      color: '#FFF',
      back: true,
    },
  };

  constructor(props) {
    super(props);
  }

  goBadgeAll = () => {
    const { navigation } = this.props;
    navigation.navigate('BadgeAll');
  };

  render() {
    const { Bagde, BagdeLocked } = ASSETS.FASTING.svgs;
    const emptyBagdes = [1, 2, 3, 4, 5];
    const emptyBagdes2 = [1, 2, 3, 4, 5, 6];

    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
          marginHorizontal: 40,
        }}>
        <View style={{ width: '100%' }}>
          <StyledH2>My badges</StyledH2>
        </View>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}>
          <View style={{ margin: 4 }}>
            <Bagde width={80} height={80} />
          </View>
          {emptyBagdes.map((item) => (
            <View style={{ marginHorizontal: 4, marginVertical: 12 }}>
              <BagdeLocked width={80} height={80} />
            </View>
          ))}
        </View>

        <View style={{ width: '100%' }}>
          <StyledH2>Milestones</StyledH2>
        </View>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}>
          {emptyBagdes2.map((item) => (
            <View style={{ marginHorizontal: 4, marginVertical: 12 }}>
              <BagdeLocked width={80} height={80} />
            </View>
          ))}
        </View>

        <View>
          <Button color="tertiary" onPress={this.goBadgeAll}>
            Find Challenges
          </Button>
        </View>
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
      logout: (_) => dispatch(ReduxActions.logout(_)),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BadgeList);
