import { WebSocketService } from "@application/services";

export type PubSubStore = {
  webSocketService: WebSocketService;
  setWebSocketService: (webSocketService: WebSocketService) => void;
};
