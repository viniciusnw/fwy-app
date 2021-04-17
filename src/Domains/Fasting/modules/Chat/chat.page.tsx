import React from 'react';
import { connect } from 'react-redux';
import * as Progress from 'react-native-progress';
import { StackScreenProps } from '@react-navigation/stack';

import { Icon, Button } from '@Components';
import * as ASSETS from '@Config/assets';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'Chat'>;
class Chat extends React.Component<RoutePropsType & ReduxPropsType & PagePropsType, any> {

  constructor(props) {
    super(props)
    this.props.setPageConfigs({
      pageConfig: { backgroundSolidColor: 'secondary' },
      topBarConfig: { title: null, menu: true, color: '#FFF', back: true }
    })
  }

  render() {
    const { svgs, backgrounds } = ASSETS.FASTING

    return (
      <>
        {/* == */}
        <View style={{ flex: 1, alignItems: 'center', marginHorizontal: 40, borderWidth: 1 }}>
          
        </View>

        {/* === */}
        <View style={{ width: '100%', height: 42, bottom: -62, marginTop: -62, borderWidth: 1}} />
        
        {/* == */}
        <View style={{ height: 300, bottom: -62, borderWidth: 1 }}>
          <ImageBackground resizeMode='cover' style={{ flex: 1, paddingBottom: 62, paddingHorizontal: 40 }} source={backgrounds['primary']}>
            
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
      logout: _ => dispatch(Redux.actions.logout(_)),
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
