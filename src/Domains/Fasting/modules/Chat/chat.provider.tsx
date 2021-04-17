import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import ReconnectingWebSocket from 'reconnecting-websocket';
import { ReduxActions, ReduxPropsType, ReduxStateType } from '@Redux/Fasting';

const url = 'ws://localhost:4001';
class ChatProvider extends React.Component<ReduxPropsType, any> {

  private createWebSocketClass(options) {
    return class extends WebSocket {
      constructor(url, protocols) {
        super(url, protocols, options)
      }
    }
  }

  private connectWs(token: string) {
    this.WS = new ReconnectingWebSocket(url, '', {
      WebSocket: this.createWebSocketClass({
        headers: {
          Authorization: token,
        }
      })
    })

    this.WS.onopen = (e) => {
      this.props.useDispatch.saveWs(this.WS)
      console.log("WS:onOpen: ", e);
    }

    this.WS.onmessage = e => console.log("WS:onMessage: ", e.data);

    this.WS.onclose = e => console.log("WS:onClose: ", e, this.WS);
  }

  private WS: ReconnectingWebSocket | null = null

  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps: ReduxPropsType) {
    this.handlerWS(prevProps)
  }

  private handlerWS(prevProps: ReduxPropsType) {
    const { User: prevUser } = prevProps.useRedux
    const { User } = this.props.useRedux
    const prevToken = prevUser.data?.token
    const token = User.data?.token

    if (token && !prevToken) this.handlerConnectWs()
    else if (token && prevToken && (token != prevToken)) this.handlerReconnectWs()
    else if (!token) this.handlerDisconnectWs()
  }

  private handlerConnectWs() {
    const { Chat, User } = this.props.useRedux
    const { ws } = Chat
    const token = User.data?.token

    if (ws) return
    if (token) this.connectWs(token)
  }

  private handlerReconnectWs() {
    const { User, Chat } = this.props.useRedux
    const token = User.data?.token
    const { ws } = Chat
    if (!ws || !token) return

    ws.close()
    this.connectWs(token)
  }

  private handlerDisconnectWs() {
    const { Chat } = this.props.useRedux
    const { ws } = Chat
    if (!ws) return

    ws.close();
    this.props.useDispatch.saveWs(null);
  }

  render() {
    return <Fragment />
  }
}

function mapStateToProps({ User, Chat }: ReduxStateType) {
  return {
    useRedux: {
      Chat,
      User
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    useDispatch: {
      saveWs: _ => dispatch(ReduxActions.saveWs(_)),
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatProvider);
