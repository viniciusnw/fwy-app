import {
  getChatMessages_getChatMessages_nextPagination
} from '@Config/graphql'

interface LoadMessages {
  loading: boolean
  success: boolean
  nextPagination: getChatMessages_getChatMessages_nextPagination
  error: boolean
  errorMessage: string | null
}

export interface MessageQueue {
  text: string
}
export interface Message {
  __typename?: string;
  _id?: string;
  type?: string;
  date: Date
  text: string;
  sender: string;
}
interface Chat {
  messages: Array<Message>
  messageQueue: Message[]
}

export class ChatReduxType {
  loadMessages: LoadMessages = {
    loading: false,
    success: false,
    error: false,
    errorMessage: null,
    nextPagination: {
      __typename: 'NextPagination',
      nPerPage: 15,
      pageNumber: 1,
      nextPageNumber: null
    },
  };
  sendMessages = {
    loading: false,
    success: false,
    error: false,
    errorMessage: null,
  };
  chat: Chat = {
    messages: [],
    messageQueue: [],
  }
}

export const ChatState = new ChatReduxType