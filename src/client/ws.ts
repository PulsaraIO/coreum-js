import { WebsocketClient } from "@cosmjs/tendermint-rpc";

class CoreumWSClient {
  static connect(wsEndpoint: string) {
    const wsClient = new WebsocketClient(wsEndpoint);
  }
}
