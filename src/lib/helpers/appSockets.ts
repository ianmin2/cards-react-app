interface iAppSockets {
  disconnect(): void;
  sendMessage(messageLabel: string, messageContent: any): void;
  catchMessage(messageLabel: string, messageCallback: Function): void;
}

interface iMessageHandler {
  message: string;
  handler: Function;
}

interface iAppSocketConstructorParams {
  setConnectionStatus: Function;
  hostAddr: string;
  messageHandlers: iMessageHandler[];
}

class AppSockets implements iAppSockets {
  connection: any;
  status: boolean;
  connectionAddress: string;
  setConnectionState: Function;

  constructor({
    setConnectionStatus,
    hostAddr,
    messageHandlers,
  }: iAppSocketConstructorParams) {
    this.connectionAddress = hostAddr;
    this.setConnectionState = setConnectionStatus;
    this.connection = this.connect();
    this.registerMessageHandlers(messageHandlers);
  }

  private connect(): any {
    const conn = io.connect(this.connectionAddress);
    this.setConnectionState(true);
    return conn;
  }

  disconnect() {
    this.setConnectionState(false);
  }

  sendMessage(messageLabel: string, messageContent: any) {
    this.connection.emit(messageLabel);
  }

  catchMessage(messageLabel: string, messageCallback: Function) {
    this.connection.on(messageLabel, messageCallback(this.sendMessage));
  }

  private registerMessageHandlers(messageHandlers: iMessageHandler[] = []) {
    messageHandlers.map((messageHandler: iMessageHandler) => {
      this.catchMessage(messageHandler.message, messageHandler.handler);
    });
  }
}

export default AppSockets;

export { iAppSockets, iMessageHandler, iAppSocketConstructorParams };
