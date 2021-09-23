import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
  ReduxActions,
  ReduxPropsType,
  ReduxStateType,
} from '@Redux/FastingAdm';

class ChatQueueProvider extends React.Component<ReduxPropsType, any> {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    this.queue();
  }

  render() {
    return <Fragment />;
  }

  private queue = () => {
    const {
      chat: { messageQueue },
      sendMessages: { loading, error, success },
    } = this.props.useRedux.Chat;

    if (loading) return;
    else if (error) this.handlerCompleteMessage();
    else if (success) this.handlerCompleteMessage();
    else if (messageQueue.length) this.handlerSendChatMessage();
  };

  private handlerCompleteMessage = () =>
    this.props.useDispatch.completeQueueChatMessage(1);

  private handlerSendChatMessage = () => {
    const {
      Chat: {
        chat: { messageQueue },
      },
      Customer: {
        customer: { data: customer },
      },
    } = this.props.useRedux;

    this.props.useDispatch.sendChatMessage({
      customerId: customer?._id,
      text: messageQueue[0].text,
    });
  };
}

function mapStateToProps({ Chat, Customer }: ReduxStateType) {
  return {
    useRedux: {
      Customer,
      Chat,
    },
  };
}

function mapDispatchToProps(dispatch) {
  return {
    useDispatch: {
      sendChatMessage: (_) => dispatch(ReduxActions.sendChatMessage(_)),
      completeQueueChatMessage: (_) =>
        dispatch(ReduxActions.completeQueueChatMessage(_)),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatQueueProvider);
