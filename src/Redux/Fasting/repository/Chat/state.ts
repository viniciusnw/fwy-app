interface LoadMessages {
  loading: boolean
  success: boolean
  nextPagination: {
    nPerPage: number
    pageNumber: number
    nextPageNumber: number | null
  }
  error: boolean
  errorMessage: string | null
}

export interface MessageQueue {
  text: string
}
export interface Message {
  __typename?: string;
  type?: string;
  id?: string;
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
  chat: Chat = {
    messages: [],
    messageQueue: [],
  }
}

export const ChatState = new ChatReduxType