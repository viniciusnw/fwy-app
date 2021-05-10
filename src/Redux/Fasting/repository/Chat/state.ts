interface loadMessages {
  loading: boolean
  success: boolean
  nextPagination: {
    nPerPage: number
    pageNumber: number
    nextPageNumber: number | null
  }
  error: boolean
  errorMessage: any
}

export interface messageQueue {
  text: string
}
export interface message {
  __typename?: string;
  type?: string;
  id?: string;
  date: Date
  text: string;
  sender: string;
}
interface chat {
  messages: Array<message>
  messageQueue: messageQueue[]
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