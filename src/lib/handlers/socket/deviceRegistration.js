import { SOCKET_STREAM_KEYS, STORAGE_KEYS } from '../../../constants';
import { wrapSocketHandler } from '../../helpers/appSockets';
import AppStorage from '../../helpers/appStorage';

const handleDeviceRegistration = (appSocketsInstance) =>
  wrapSocketHandler(
    SOCKET_STREAM_KEYS.INBOUND.REGISTRATION_RESPONSE,
    (signupStatus) => {
      if (signupStatus.response === 200) {
        AppStorage.set(STORAGE_KEYS.APP.SETUP, AppStorage.get('temp'));

        appSocketsInstance.alert(
          "<font color='blue'><b><center>Welcome!</center></b></font>",
          "<center style='color:green;'>This device has been successfully registered.</center>",
          window._doNothing,
          'CONTINUE'
        );
      } else {
        appSocketsInstance.alert(
          "<font color='blue'><b><center>Registration Error</center></b></font>",
          `<center style='color:red;'>${signupStatus.message}</center>`
        );
      }
    }
  );

export default handleDeviceRegistration;
