import { connect } from 'react-redux';
import React, { Fragment } from 'react';
import Config from 'react-native-config';
import ReconnectingWebSocket from 'reconnecting-websocket';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';

const { SOCKET_URL } = Config
const url = SOCKET_URL;
class ChatConnectProvider extends React.Component<ReduxPropsType, any> {
  private WS: ReconnectingWebSocket | null = null;

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps: ReduxPropsType) {
    this.handlerWS(prevProps);
  }

  render() {
    return <Fragment />;
  }

  private createWebSocketClass(options) {
    return class extends WebSocket {
      constructor(url, protocols) {
        super(url, protocols, options);
      }
    };
  }

  private connectWs(token: string) {
    this.WS = new ReconnectingWebSocket(url, '', {
      WebSocket: this.createWebSocketClass({
        headers: {
          Authorization: token,
        },
      }),
    });

    this.WS.onopen = (e) => {
      this.props.useDispatch.saveWs(this.WS);
      // console.log('WS:onOpen: ', e);
    };

    this.WS.onmessage = (e) => {
      this.handlerAddNewMessage(JSON.parse(e.data));
    };

    // this.WS.onclose = (e) => console.log('WS:onClose: ', e, this.WS);
  }

  private handlerAddNewMessage(dataMessage) {
    const { type } = dataMessage;
    if (type === 'NEW_MESSAGE') this.props.useDispatch.newChatMessage(dataMessage);
  }

  private handlerWS(prevProps: ReduxPropsType) {
    const { User: prevUser } = prevProps.useRedux;
    const { User } = this.props.useRedux;
    const prevToken = prevUser.data?.token;
    const token = User.data?.token;

    if (token && !prevToken) this.handlerConnectWs();
    else if (token && prevToken && token != prevToken)
      this.handlerReconnectWs();
    else if (!token) this.handlerDisconnectWs();
  }

  private handlerConnectWs() {
    const { General, User } = this.props.useRedux;
    const { ws } = General;
    const token = User.data?.token;

    if (ws) return;
    if (token) this.connectWs(token);
  }

  private handlerReconnectWs() {
    const { User, General } = this.props.useRedux;
    const token = User.data?.token;
    const { ws } = General;
    if (!ws || !token) return;

    ws.close();
    this.connectWs(token);
  }

  private handlerDisconnectWs() {
    const { General } = this.props.useRedux;
    const { ws } = General;
    if (!ws) return;

    ws.close();
    this.props.useDispatch.saveWs(null);
  }
}

function mapStateToProps({ User, Chat, General }: ReduxStateType) {
  return {
    useRedux: {
      Chat,
      User,
      General,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    useDispatch: {
      saveWs: (_) => dispatch(ReduxActions.saveWs(_)),
      newChatMessage: (_) => dispatch(ReduxActions.newChatMessage(_)),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatConnectProvider);
