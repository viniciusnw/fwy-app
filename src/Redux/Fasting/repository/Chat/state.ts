import ReconnectingWebSocket from 'reconnecting-websocket';

export class ChatReduxType {
  ws: ReconnectingWebSocket | null = null
}

export const ChatState = new ChatReduxType