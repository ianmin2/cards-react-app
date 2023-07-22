import { SOCKET_STREAM_KEYS, STORAGE_KEYS } from '../../../constants';
import { wrapSocketHandler } from '../../helpers/appSockets';
import AppStorage from '../../helpers/appStorage';

const updateTag = 'cafeteria';

const handleCafeteriaUpdates = (appSocketsInstance) =>
  wrapSocketHandler(SOCKET_STREAM_KEYS.INBOUND.CAFETERIA_LIST, (cafeList) => {
    const newList = Array.isArray(cafeList) ? cafeList : [];
    const date = new Date();
    AppStorage.update(STORAGE_KEYS.APP.DOCS, updateTag, newList);
    AppStorage.update(
      STORAGE_KEYS.APP.UPDATES,
      updateTag,
      date.toDateString() + ' ' + date.toTimeString()
    );

    appSocketsInstance.alert(
      "<font color='blue'><b><center>UPDATE RECEIVED!</center></b></font>",
      "<center style='color:green;'>The List of people allowed in the cafeteria has just been updated</center>",
      window._doNothing,
      'CONTINUE'
    );
  });
export default handleCafeteriaUpdates;
