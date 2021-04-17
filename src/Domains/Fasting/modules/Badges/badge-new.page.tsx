import React from 'react';
import { connect } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';

import * as ASSETS from '@Config/assets';
import { Icon, Button } from '@Components';
import { View, Text, TouchableOpacity } from 'react-native';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';
import { StyledH1, StyledText, StyledText2 } from './badge.style';

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'BadgeNew'>;
class BadgeNew extends React.Component<RoutePropsType & ReduxPropsType & PagePropsType, any> {

  constructor(props) {
    super(props)
    this.props.setPageConfigs({
      topBarConfig: { title: null, menu: true, color: '#FFF', back: true }
    })
  }

  goBadgeList = () => {
    const { reset } = this.props.navigation;
    reset({
      index: 3,
      routes: [
        { name: 'Home' },
        { name: 'FastEnd' },
        { name: 'BadgeList' },
      ]
    })
  }

  render() {
    const { Bagde } = ASSETS.FASTING.svgs;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 40 }}>

        <View style={{ marginHorizontal: 80, marginBottom: 40 }}>
          <StyledH1>
            You unlocked
            your badge!
          </StyledH1>
        </View>

        <Bagde width={200} height={200} />

        <View style={{ marginTop: 20 }}>
          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
            <Icon size={22} color={'#FFF'} icon="upload" />
            <StyledText>
              Share
            </StyledText>
          </TouchableOpacity>
        </View>

        <View style={{ marginHorizontal: 60, marginTop: 40 }}>
          <StyledText2>
            Great work
          </StyledText2>
          <StyledText2>
            Completing Back-to-back fasts.
          </StyledText2>
        </View>

        <View style={{ marginTop: 20 }}>
          <Button color="secondary" onPress={this.goBadgeList}>
            Collect badge
          </Button>
        </View>

        <View style={{ marginTop: 40, flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <Button color="transparent" onPress={() => null}>
            CHANGE FAST
          </Button>

          <Button color="transparent" onPress={() => null}>
            SET REMINDER
          </Button>
        </View>
      </View>
    )
  }
}

function mapStateToProps({ }: ReduxStateType) {
  return {
    useRedux: {}
  }
};

function mapDispatchToProps(dispatch) {
  return {
    useDispatch: {
      logout: _ => dispatch(Redux.actions.logout(_)),
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BadgeNew);
