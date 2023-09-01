import ReconnectingWebSocket from "reconnecting-websocket";
import {
  DispatchFunction,
  WebSocketMessage,
  WebSocketMessageType,
} from "@domain/models";
import { env } from "@infrastructure/configurations/constants/environment";
import { WEBSOCKET_RECONNECT_INTERVAL } from "@infrastructure/configurations/constants/request";
import { WebSocketServicePort } from "@domain/ports/services";

export class WebSocketService implements WebSocketServicePort {
  private connectionId?: string;
  private webSocket: ReconnectingWebSocket;
  private dispatch: DispatchFunction;

  private options = {
    connectionTimeout: WEBSOCKET_RECONNECT_INTERVAL,
    maxRetries: 10,
  };
  constructor(accessToken: string) {
    const socketUrl = `wss://${env.apiUrl
      .replace("https://", "")
      .replace("http://", "")}?accessToken=${accessToken}`;
    this.webSocket = new ReconnectingWebSocket(socketUrl, [], this.options);
    this.webSocket.onmessage = this.handleMessage;
    this.dispatch = (message: WebSocketMessage) => console.log(message);
  }
  serializeSocketMessage = (json: Record<string, any>) => JSON.stringify(json);

  deserializeSocketMessage = (string: string): WebSocketMessage =>
    JSON.parse(string);

  setSocketConnId(connectionId: string) {
    this.connectionId = connectionId;
  }

  setDispatcher(dispatchFunction: DispatchFunction) {
    this.dispatch = dispatchFunction;
  }

  async handleMessage(e: any) {
    try {
      const jsonResponse = this.deserializeSocketMessage(e.data);
      this.dispatch(jsonResponse);
    } catch (error) {
      console.log(error);
    }
  }

  sendSocketMessage = (
    userId: number,
    message: WebSocketMessageType,
    content?: string,
    target?: string,
    owner?: string
  ) => {
    if (!this.webSocket) return;

    const socketMessage: WebSocketMessage = {
      message: message,
      owner: userId.toString(),
    };

    if (content != undefined) socketMessage.content = content;
    if (target != undefined) socketMessage.target = target;
    if (owner != undefined) socketMessage.owner = owner;

    this.webSocket.send(this.serializeSocketMessage(socketMessage));
  };
}
