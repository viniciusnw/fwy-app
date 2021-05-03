import React from 'react';
import { connect, connectAdvanced } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';

import * as ASSETS from '@Config/assets';
import { Icon, Button } from '@Components';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'Chat'>;
class Chat extends React.PureComponent<
  RoutePropsType & ReduxPropsType & PagePropsType,
  any
> {
  static setPageConfigs = {
    pageConfig: { backgroundSolidColor: 'secondary' },
    topBarConfig: { title: null, menu: true, color: '#FFF', back: true },
  };

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    console.log('Chat=>componentDidUpdate: ', this.props.useRedux.Chat);
  }

  componentDidMount() {
    const pagination = {
      pageNumber: 1,
      nPerPage: 9,
    };
    this.props.useDispatch.getChatMessages({ pagination });
  }

  addQueueChatMessage = (text: string) => {
    const message = {
      text,
    };
    this.props.useDispatch.addQueueChatMessage(message);
  };

  render() {
    const { svgs, backgrounds } = ASSETS.FASTING;

    return (
      <>
        {/* == */}
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            marginHorizontal: 40,
            borderWidth: 1,
          }}></View>

        {/* === */}
        <View
          style={{
            width: '100%',
            height: 42,
            bottom: -62,
            marginTop: -62,
            borderWidth: 1,
          }}
        />

        {/* == */}
        <View style={{ height: 300, bottom: -62, borderWidth: 1 }}>
          <ImageBackground
            resizeMode="cover"
            style={{ flex: 1, paddingBottom: 62, paddingHorizontal: 40 }}
            source={backgrounds['primary']}></ImageBackground>
        </View>
      </>
    );
  }
}

function mapStateToProps({ Chat }: ReduxStateType) {
  return {
    useRedux: {
      Chat,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    useDispatch: {
      logout: (_) => dispatch(ReduxActions.logout()),
      addQueueChatMessage: (_) => dispatch(ReduxActions.addQueueChatMessage(_)),
      getChatMessages: (_) => dispatch(ReduxActions.getChatMessages(_)),
      getMoreChatMessages: (_) => dispatch(ReduxActions.getMoreChatMessages(_)),
    },
  };
}

// export default Chat;
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
