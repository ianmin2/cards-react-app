import { SOCKET_STREAM_KEYS, STORAGE_KEYS } from '../../constants';
import handleCafeteriaUpdates from '../handlers/socket/cafeteriaUpdates';
import handleConnect from '../handlers/socket/connection';
import handleDeviceRegistration from '../handlers/socket/deviceRegistration';
import handleDeviceRemembered from '../handlers/socket/deviceRemembered';
import handleExamUpdates from '../handlers/socket/examUpdates';
import AppSockets from '../helpers/appSockets';
import AppStorage from '../helpers/appStorage';
import { get } from 'lodash';

const appSock = new AppSockets({
  setConnectionStatus: () => {},
  hostAddr: '',
  messageHandlers: [
    handleConnect,
    {
      message: 'online',
      handler: (sendMessage) => () => {
        sendMessage('connected', {});
      },
    },
  ],
  showAlert: () => {},
});

const SOCKET_HANDLERS = [
  handleCafeteriaUpdates(appSock),
  handleExamUpdates(appSock),
  handleDeviceRegistration(appSock),
  handleDeviceRemembered(appSock),
];

// @!!! Handle
/**
 * 'disconnect'
 * 'reconnect'
 *
 */

const updateTag = 'exam';

const handleCardWriting = (appSocketsInstance) =>
  wrapSocketHandler(SOCKET_STREAM_KEYS.INBOUND.CARD_WRITE, (authStatus) => {
    appSocketsInstance.alert(
      "<font color='blue'><b><center>Welcome Back!</center></b></font>",
      "<center style='color:green;'>This device has been remembered.</center>",
      window._doNothing,
      'CONTINUE'
    );
  });

const handleCardLocking = (appSocketsInstance) =>
  wrapSocketHandler(SOCKET_STREAM_KEYS.INBOUND.CARD_LOCK, (authStatus) => {
    appSocketsInstance.alert(
      "<font color='blue'><b><center>Welcome Back!</center></b></font>",
      "<center style='color:green;'>This device has been remembered.</center>",
      window._doNothing,
      'CONTINUE'
    );
  });

const handleDisabledCardListUpdtes = (appSocketsInstance) =>
  wrapSocketHandler(SOCKET_STREAM_KEYS.INBOUND.CARDS_DISABLED, (authStatus) => {
    appSocketsInstance.alert(
      "<font color='blue'><b><center>Welcome Back!</center></b></font>",
      "<center style='color:green;'>This device has been remembered.</center>",
      window._doNothing,
      'CONTINUE'
    );
  });

const handleHistoryClearing = (appSocketsInstance) =>
  wrapSocketHandler(SOCKET_STREAM_KEYS.INBOUND.RECORDS_CLEAR, (authStatus) => {
    appSocketsInstance.alert(
      "<font color='blue'><b><center>Welcome Back!</center></b></font>",
      "<center style='color:green;'>This device has been remembered.</center>",
      window._doNothing,
      'CONTINUE'
    );
  });

const handleHistoryRequests = (appSocketsInstance) =>
  wrapSocketHandler(SOCKET_STREAM_KEYS.INBOUND.CARD_HISTORY, (authStatus) => {
    appSocketsInstance.alert(
      "<font color='blue'><b><center>Welcome Back!</center></b></font>",
      "<center style='color:green;'>This device has been remembered.</center>",
      window._doNothing,
      'CONTINUE'
    );
  });

const handleTagFormating = (appSocketsInstance) =>
  wrapSocketHandler(SOCKET_STREAM_KEYS.INBOUND.CARD_FORMAT, (authStatus) => {
    appSocketsInstance.alert(
      "<font color='blue'><b><center>Welcome Back!</center></b></font>",
      "<center style='color:green;'>This device has been remembered.</center>",
      window._doNothing,
      'CONTINUE'
    );
  });

/**
 *     
    CUSTOM: {
        "docs": {
            "cafeteria" : [],
            "exam" : []
    
        },
        "updates": {
            "cafeteria" : "never updated",
            "exam" : "never updated"
        },
        "apiKey" :  0,
        "setup": 0,
        "mode" : "default",
        "history" : [],
        "examHistory" : [],
        "disabledCards" : [],
        "nfc": {
            "enabled" : false, 
            "listening" : false
        },
        "residences": ["new me
    }
 */
