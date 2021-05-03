import ReconnectingWebSocket from 'reconnecting-websocket';

export interface messageQueue {
  text: string
}

export interface message {
  date: Date
  text: string;
  sender: string;
}

interface chat {
  messages: Array<message>
  messageQueue: messageQueue[]
}

export class ChatReduxType {
  loadMessages = {
    loading: false,
    success: false,
    nextPagination: null,
    error: false,
    errorMessage: null,
  };
  sendMessages = {
    loading: false,
    success: false,
    error: false,
    errorMessage: null,
  };
  chat: chat = {
    messages: [],
    messageQueue: [],
  }
}

export const ChatState = new ChatReduxType