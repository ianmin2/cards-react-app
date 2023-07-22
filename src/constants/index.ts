import AppStorage from "../lib/helpers/appStorage.ts";
import EnsureStorageExists from "../lib/helpers/ensureStorageExists.ts";
import _menuItems from "./menuItems.json";
import _modeItems from "./modeItems.json";
import _statusItems from "./statusItems.json";
import _serverConfig from "./serverConn.json";
import _storageDefaults from "./storage.json";

interface iMenuItem {
  label: string;
  icon: string;
  target: string;
}

interface iModeItem {
  label: string;
  icon: string;
  department: string;
}

interface iStatusItem {
  label: string;
  totalUsers: number;
  lastUpdated: string;
  updateAction: any;
}

const STORAGE_KEYS = {
    MENU_ITEMS : 'menuItems',
    MODE_ITEMS : 'modeItems',
    STATUS_ITEMS: 'statusItems',
    CURRENT_PAGE: 'activePage',
    APP : {
        SETUP : 'setup',
        DOCS : 'docs',
        UPDATES: 'updates',
        IP: 'ip',
        PORT: 'port',
        HOST_ADDR: 'server_addr',
        API_KEY : 'apiKey'
    },
    SCANNING_MODE: 'mode',
    RECORDS: 'history',
    EXAM_SCANS: 'examHistory',
    DISABLED_CARDS: 'disabledCards',
    NFC: 'nfc',
    CAFE_RESIDENCES: 'residences',


};

const PAGES = {
  REGISTRATION: "registration",
  SCANNING: "scanning",
  MODES: "modes",
  SYNC: "sync",
};

const SOCKET_STREAM_KEYS = {
    INBOUND : {
        CONNECT: 'connect',
        CARD_HISTORY : 'tagHistory',
        CARD_READ: 'tagRead',
        CARD_WRITE: 'tagWrite',
        CARD_RESPONSE: 'responses',
        CARD_FORMAT: 'tagFormat',
        CARD_LOCK: 'tagLock',
        CAFETERIA_LIST : 'setCafeteria',
        EXAM_LIST: 'setExam',
        ANNOUNCEMENT: 'respond',
        ONLINE_CLIENTS: 'onlineClients',
        ECHO_BACK: 'testEcho',
        REGISTRATION_RESPONSE: 'clientResponse',
        AUTHENTICATION_RESPONSE: 'expressAuth',
        RECORDS_CLEAR: 'clearHistory',
        STATS_MOYS: 'moys',
        STATS_MNYS: 'mnys',
        RESPONSE: 'response',
        RECORDS_LIST: 'fetchedRecords',
        STUDENT_LIST: 'fetchedStudents',
        DEVICE_LIST: 'devices',
        STATS_LIST: 'fetchedStats',
        CHARTS_MONTHLY: 'setMonthlyCharts',
        CHARTS_WEEKLY: 'setWeekCharts',
        CHARTS_DAILY: 'setDayCharts',
        RECONNECT: 'reconnect',
        CARDS_DISABLED: 'setDisabled'


    },
    OUTBOUND : {
        CONNECT: 'connection',
        ONLINE : 'online',
        DISCONNECT: 'disconnect',
        FORCE_DISCONNECT: 'forceDisconnect',
        GET_ONLINE_CLIENTS: 'getOnline',
        LOG: 'log',
        ECHO: 'test',
        REGISTER: 'newClient',
        AUTHENTICATE: 'isRegistered',
        RECORDS_WRITE: 'records',
        RECORDS_GET: 'getRecords',
        CARD_WRITE: 'write',
        CARD_HISTORY_GET: 'history',
        CARD_HISTORY_RESET: 'resetHistory',
        CARD_READ: 'read',
        CARD_FORMAT: 'format',
        CARD_LOCK: 'lock',
        ANNOUNCE: 'respond',
        STUDENTS_GET: 'getStudents',
        STATS_MOY: 'moy',
        STATS_MNY: 'mny',
        DEVICES_GET: 'getDevices',
        CAFETERIA_GET: 'getCafeteria',
        EXAM_GET: 'getExam',
        STATS_GET: 'getStats',
        CHARTS_MONTHLY: 'getMonthlyCharts',
        CHARTS_WEEKLY: 'getWeekCharts',
        CHARTS_DAILY: 'getDayCharts',
        RECONNECT: 'reconnect',
        CARDS_DISABLED: 'getDisabled'
    }
}

// @ set default localstorage values [where applicable]

const menuItems = AppStorage.get(STORAGE_KEYS.MENU_ITEMS);
if (!menuItems) AppStorage.set(STORAGE_KEYS.MENU_ITEMS, _menuItems);

const modeItems = AppStorage.get(STORAGE_KEYS.MODE_ITEMS);
if (!modeItems) AppStorage.set(STORAGE_KEYS.MODE_ITEMS, _modeItems);

const statusItems = AppStorage.get(STORAGE_KEYS.STATUS_ITEMS);
if (!statusItems) AppStorage.set(STORAGE_KEYS.STATUS_ITEMS, _statusItems);

const activePage = AppStorage.get(STORAGE_KEYS.CURRENT_PAGE);
if (!activePage) AppStorage.set(STORAGE_KEYS.CURRENT_PAGE, PAGES.REGISTRATION);

EnsureStorageExists(AppStorage, _serverConfig);
EnsureStorageExists(AppStorage, _storageDefaults);

// const MenuItems : iMenuItem[] = _menuItems as iMenuItem[];
// const ModeItems : iModeItem[] = _modeItems as iModeItem[];
// const StatusItems: iStatusItem[] = _statusItems as iStatusItem[];

export {
  iMenuItem,
  iModeItem,
  iStatusItem,
  STORAGE_KEYS,
  PAGES,
  SOCKET_STREAM_KEYS,
};
