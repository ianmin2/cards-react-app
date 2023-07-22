import AppSockets from '../helpers/appSockets';

// eslint-disable-next-line no-new
new AppSockets({
  setConnectionStatus: () => {},
  hostAddr: '',
  messageHandlers: [
    {
      message: 'online',
      handler: (sendMessage) => () => {
        sendMessage('connected', {});
      },
    },
  ],
});
