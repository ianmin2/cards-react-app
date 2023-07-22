import { get, isEmpty } from 'lodash';

import { SOCKET_STREAM_KEYS, STORAGE_KEYS } from '../../../constants';
import { wrapSocketHandler } from '../../helpers/appSockets';
import AppStorage from '../../helpers/appStorage';

const handleConnect = wrapSocketHandler(
  SOCKET_STREAM_KEYS.INBOUND.CONNECT,
  () => {
    const username = get(
      AppStorage.get(STORAGE_KEYS.APP.SETUP),
      'username',
      'Unknown'
    );
    const token = AppStorage.get(STORAGE_KEYS.APP.API_KEY);

    // @ check if the device is known
    if (isEmpty(AppStorage.get(STORAGE_KEYS.APP.SETUP))) {
      this.sendMessage(SOCKET_STREAM_KEYS.OUTBOUND.AUTHENTICATE, {
        api: {
          key: token,
        },
      });
      // @ announce that the device is online
    } else {
      this.sendMessage(SOCKET_STREAM_KEYS.OUTBOUND.ONLINE, {
        token,
        username,
      });
      this.sendMessage(SOCKET_STREAM_KEYS.OUTBOUND.ANNOUNCE, {
        response: 200,
        data: {
          message: `${username} just connected.`,
          command: token,
        },
      });
    }

    // @ fetch records where none exist
    const { cafeteria: cafeList, exam: examList } =
      AppStorage.get(STORAGE_KEYS.APP.DOCS) || {};

    if (isEmpty(cafeList)) {
      this.sendMessage(SOCKET_STREAM_KEYS.OUTBOUND.CAFETERIA_GET);
    }
    if (isEmpty(examList)) {
      this.sendMessage(SOCKET_STREAM_KEYS.OUTBOUND.CAFETERIA_GET);
    }
    // @ fetch a list of banned cards
    this.sendMessage(SOCKET_STREAM_KEYS.OUTBOUND.CARDS_DISABLED);
  }
);

export default handleConnect;
