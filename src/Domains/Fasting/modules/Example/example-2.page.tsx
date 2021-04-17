import React from 'react';
import { connect } from 'react-redux';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { BlurView } from "@react-native-community/blur";

import { Button, Icon, Input } from '@Components';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

type RoutePropsType = DrawerScreenProps<LoggedStackParamList, 'FastStart'>;
class FastStart extends React.Component<RoutePropsType & ReduxPropsType & PagePropsType, any> {

  constructor(props) {
    super(props)
    this.props.setPageConfigs({
      pageConfig: { backgroundImage: 'primary' },
      bottomBarConfig: { color: '#FFF' }
    })
  }

  componentDidUpdate() {
    console.log("Wrapper=>componentDidUpdate: ", this.props)
  }

  goToBadgeNew = () => {
    const { navigation } = this.props;
    navigation.navigate('BadgeNew');
  }

  render() {
    return (
      <>
        <View style={{ height: 200, width: '100%', borderWidth: 1, justifyContent: 'center', paddingHorizontal: 40, paddingTop: 50 }}>
          {true && (
            <BlurView
              style={{ top: 0, left: 0, right: 0, bottom: 0, zIndex: 9, position: "absolute", justifyContent: 'center', alignItems: 'center' }}
              blurType="dark"
              blurAmount={70}
              reducedTransparencyFallbackColor="white">
              <ActivityIndicator size='large' color={'#FFF'} />
            </BlurView>
          )}
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
      logout: _ => dispatch(ReduxActions.logout(_))
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FastStart);
