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

interface nextPagination {
  nPerPage: number
  pageNumber: number
  nextPageNumber: number | null
}
interface loadMessages {
  loading: boolean
  success: boolean
  nextPagination: nextPagination
  error: boolean
  errorMessage: any
}

export class ChatReduxType {
  loadMessages: loadMessages = {
    loading: false,
    success: false,
    nextPagination: {
      nPerPage: 10,
      pageNumber: 1,
      nextPageNumber: null
    },
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