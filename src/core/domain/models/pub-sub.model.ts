import { WebSocketServicePort } from "@domain/ports/services";


export type PubSubStore = {
  webSocketService: WebSocketServicePort;
  setWebSocketService: (webSocketService: WebSocketServicePort) => void;
};
