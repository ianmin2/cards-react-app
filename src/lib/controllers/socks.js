import AppSockets from "../helpers/appSockets";

new AppSockets({
    setConnectionStatus: () => {},
    hostAddr: '',
    messageHandlers: [{ 
        message : 'online',
        handler: (sendMessage) => ( ) => {
            sendMessage('connected', {})
        }
     }]
})