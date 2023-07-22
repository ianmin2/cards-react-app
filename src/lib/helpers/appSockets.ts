interface iMessageHandler {
    message: string,
    handler: Function,
}


interface iAppSockets {
    disconnect(): void;
    sendMessage(messageLabel: string, messageContent?: any): void;
    catchMessage(messageLabel:string, messageCallback: Function):void;
    alert (title: string, body: string, callback: Function, buttonLabel: string) : any
    registerMessageHandlers(messageHandlers: iMessageHandler[] )
}



interface iAppSocketConstructorParams {
    setConnectionStatus: Function,
    hostAddr: string,
    messageHandlers?: iMessageHandler[],
    showAlert: Function,
}

class AppSockets implements iAppSockets {

    connection: any;
    status: boolean;
    connectionAddress: string;
    setConnectionState: Function;
    showAlert: Function;

    constructor( { setConnectionStatus, hostAddr, messageHandlers, showAlert } : iAppSocketConstructorParams  ){
        this.connectionAddress = hostAddr;
        this.setConnectionState = setConnectionStatus;
        this.connection = this.connect();
        this.showAlert = showAlert;

        if(messageHandlers) this.registerMessageHandlers(messageHandlers)
    }

   

    private connect(): any {
        const conn = io.connect(this.connectionAddress);
        this.setConnectionState(true);
        return conn;
    }

    disconnect() {
        this.setConnectionState(false);
    }

    sendMessage(messageLabel: string, messageContent?: any) {
        this.connection.emit(messageLabel, messageContent);
    }

    alert (title: string, body: string, callback: Function, buttonLabel: string) : any {
        this.showAlert(title, body, callback, buttonLabel);
    }

    catchMessage(messageLabel:string, messageCallback: Function) {
        this.connection.on(messageLabel, messageCallback(this.sendMessage))
    }

     registerMessageHandlers(messageHandlers: iMessageHandler[] = []) {
        messageHandlers.map((messageHandler: iMessageHandler)=> {
            this.catchMessage(messageHandler.message, messageHandler.handler)
        })
    }

}

const wrapSocketHandler = (channel: string, handler: Function) => {
    return {
        message: channel,
        handler: (sendMessage) => handler,
    }
}

export default AppSockets;

export {iAppSockets, iMessageHandler, iAppSocketConstructorParams, wrapSocketHandler}
