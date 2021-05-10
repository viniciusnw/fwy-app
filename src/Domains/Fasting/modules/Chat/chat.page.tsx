import React from 'react';
import { connect, connectAdvanced } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';

import * as ASSETS from '@Config/assets';
import { Icon, Button } from '@Components';
import { message } from '@Redux/Fasting/repository/Chat/state';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';
import { ScrollMessages, Divider, MessageItem, MessageText } from './chat.style';

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
    this.loadMessages();
  }

  private addQueueChatMessage = (text: string) => {
    const message = {
      text,
    };
    this.props.useDispatch.addQueueChatMessage(message);
  };

  private loadMessages = () => {
    const pagination = {
      pageNumber: 1,
      nPerPage: 3,
    };
    this.props.useDispatch.getChatMessages({ pagination });
  };

  private loadMoreMessages = () => {
    const { nextPagination } = this.props.useRedux.Chat.loadMessages;
    if (!nextPagination.nextPageNumber) return;

    const pagination = {
      pageNumber: nextPagination.nextPageNumber,
      nPerPage: nextPagination.nPerPage,
    };
    this.props.useDispatch.getMoreChatMessages({ pagination });
  };

  render() {
    const {
      chat: { messages },
    } = this.props.useRedux.Chat;
    const { svgs, backgrounds } = ASSETS.FASTING;

    return (
      <>
        {/* == */}
        <ScrollMessages
          inverted 
          data={messages}
          extraData={messages}
          keyExtractor={(item, index) => `${index}`}
          contentContainerStyle={{ flexDirection: 'column-reverse' }}
          renderItem={({ item }: { item: any }) => this.renderItem(item)}
        />

        {/* === */}
        <Divider />

        {/* == */}
        <View style={{ height: 300, bottom: -62, borderWidth: 1 }}>
          <ImageBackground
            resizeMode="cover"
            style={{ flex: 1, paddingBottom: 62, paddingHorizontal: 40 }}
            source={backgrounds['primary']}>
            <TouchableOpacity
              style={{ borderWidth: 1, marginTop: 40 }}
              onPress={this.loadMoreMessages}>
              <Text>LoadMore</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </>
    );
  }

  private renderItem = (item: message) => (
    <MessageItem {...item}>
      <MessageText {...item}>{item.text}</MessageText>
    </MessageItem>
  );
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
