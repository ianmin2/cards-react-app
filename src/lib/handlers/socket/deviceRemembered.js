import { SOCKET_STREAM_KEYS, STORAGE_KEYS } from '../../../constants';
import { wrapSocketHandler } from '../../helpers/appSockets';
import AppStorage from '../../helpers/appStorage';
const handleDeviceRemembered = (appSocketsInstance) =>
  wrapSocketHandler(
    SOCKET_STREAM_KEYS.INBOUND.AUTHENTICATION_RESPONSE,
    (authStatus) => {
      AppStorage.set(STORAGE_KEYS.APP.SETUP, authStatus);

      appSocketsInstance.alert(
        "<font color='blue'><b><center>Welcome Back!</center></b></font>",
        "<center style='color:green;'>This device has been remembered.</center>",
        window._doNothing,
        'CONTINUE'
      );
    }
  );

export default handleDeviceRemembered;
