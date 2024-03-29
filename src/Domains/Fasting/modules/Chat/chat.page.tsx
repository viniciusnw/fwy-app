import React from 'react';
import { connect, connectAdvanced } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack';

import * as ASSETS from '@Config/assets';
import { Icon, Button } from '@Components';
import { Message } from '@Redux/Fasting/repository/Chat/state';
import { LoggedStackParamList, PagePropsType } from '@Navigation';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';
import {
  InputSendChatMessage,
  MessageContainer,
  MessageDate,
  MessageTextContainer,
  ScrollMessages,
  Divider,
  MessageItem,
  MessageText,
} from './chat.style';
import {
  View,
  ImageBackground,
  ActivityIndicator,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';

type RoutePropsType = StackScreenProps<LoggedStackParamList, 'Chat'>;
class Chat extends React.Component<
  RoutePropsType & ReduxPropsType & PagePropsType,
  any
> {
  private keyboardDidShowListener;
  private keyboardDidHideListener;

  static setPageConfigs = {
    pageConfig: { backgroundSolidColor: 'secondary' },
    topBarConfig: { title: null, menu: true, color: '#FFF', back: true },
  };

  constructor(props) {
    super(props);
    this.state = {
      openKeyboard: false,
      inputHeight: 0,
      inputValue: '',
    };
  }

  componentDidUpdate() {
    // console.log('Chat=>componentDidUpdate: ', this.props.useRedux.Chat);
    this.handlerSendMessage();
  }

  componentDidMount() {
    this.loadMessages();
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardWillShow',
      this._keyboardWillShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardWillHide',
      this._keyboardWillHide,
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  private handlerSendMessage = () => {
    const {
      sendMessages: { success },
    } = this.props.useRedux.Chat;
    if (success) this.setState({ inputValue: '' });
  };

  private addQueueChatMessage = () => {
    const { inputValue } = this.state;
    const message = {
      text: inputValue,
    };
    if (!inputValue) return;
    this.props.useDispatch.addQueueChatMessage(message);
  };

  private loadMessages = () => {
    const pagination = {
      pageNumber: 1,
      nPerPage: 15,
    };
    this.props.useDispatch.getChatMessages({ pagination });
  };

  private loadMoreMessages = () => {
    const { nextPagination, loading } = this.props.useRedux.Chat.loadMessages;
    if (loading) return;
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
      loadMessages: { loading: loadMessagesLoading },
      sendMessages: { loading: sendMessagesLoading },
    } = this.props.useRedux.Chat;
    const { backgrounds } = ASSETS.FASTING;
    const { openKeyboard, inputValue } = this.state;

    return (
      <>
        {/* == */}
        <ScrollMessages
          inverted
          data={messages}
          extraData={messages}
          onEndReachedThreshold={0}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => `${index}`}
          onEndReached={(info) => this.loadMoreMessages()}
          contentContainerStyle={{ flexDirection: 'column-reverse' }}
          renderItem={({ item }: { item: any }) => this.Render_Item(item)}
          ListHeaderComponent={() => this.Render_loading(loadMessagesLoading)}
        />

        {/* === */}
        <Divider />

        {/* == */}
        <View
          style={[
            { height: 150, bottom: -96 },
            openKeyboard && { height: 200 },
          ]}>
          <ImageBackground
            resizeMode="cover"
            source={backgrounds['primary']}
            style={[
              {
                flex: 1,
                paddingBottom: 62,
                alignItems: 'center',
                flexDirection: 'row',
                paddingHorizontal: 40,
              },
              openKeyboard && { paddingBottom: 110 },
            ]}>
            <InputSendChatMessage
              multiline
              value={inputValue}
              height={this.state.inputHeight}
              onChangeText={this._onChangeText}
              onContentSizeChange={this._onResizeInput}
            />

            <Button
              style={{ flex: 0.1 }}
              color={'fullTransparent'}
              loading={sendMessagesLoading}
              onPress={this.addQueueChatMessage}
              icon={{ icon: 'send', color: '#FFF', size: 22 }}
            />
          </ImageBackground>
        </View>
        <KeyboardAvoidingView behavior="padding" />
      </>
    );
  }

  private Render_loading = (loadMessagesLoading) => {
    if (loadMessagesLoading)
      return (
        <ActivityIndicator
          style={{ marginVertical: 16 }}
          size="small"
          color={'#FFF'}
        />
      );
    return <View />;
  };

  private Render_Item = (item: Message) => (
    <MessageItem {...item}>
      {item.sender == 'adm' && (
        <Icon size={22} color={'rgba(236, 83, 73, .9)'} icon="user-circle" />
      )}

      <MessageContainer {...item}>
        <MessageTextContainer {...item}>
          <MessageText>{item.text}</MessageText>
        </MessageTextContainer>

        <MessageDate>{this.getChatDateTime(item)}</MessageDate>
      </MessageContainer>

      {item.sender == 'customer' && (
        <Icon size={22} color={'rgba(255, 255, 255, .9)'} icon="user-circle" />
      )}
    </MessageItem>
  );

  private getChatDateTime(messageItem: Message) {
    if (!messageItem) return;
    const time = messageItem.date.toTimeString().split('G')[0].split(':');
    const date = messageItem.date.toDateString().split(' ');

    return `${date[0]} ${date[1]} ${date[2]}, ${time[0]}:${time[1]}`;
  }

  private _onResizeInput = (event) =>
    this.setState({
      inputHeight: event.nativeEvent.contentSize.height,
    });

  private _onChangeText = (inputValue) => this.setState({ inputValue });

  private _keyboardWillShow = () => this.setState({ openKeyboard: true });

  private _keyboardWillHide = () => this.setState({ openKeyboard: false });
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
      getChatMessages: (_) => dispatch(ReduxActions.getChatMessages(_)),
      addQueueChatMessage: (_) => dispatch(ReduxActions.addQueueChatMessage(_)),
      getMoreChatMessages: (_) => dispatch(ReduxActions.getMoreChatMessages(_)),
    },
  };
}

// export default Chat;
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
