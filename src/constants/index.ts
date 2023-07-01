import _menuItems from './menuItems.json';
import _modeItems from './modeItems.json';
import _statusItems from './statusItems.json';

interface iMenuItem {
    label: string;
    icon: string;
    target: string;
}

interface iModeItem {
    label: string,
    icon: string,
    department: string
}

interface iStatusItems {
    "label" :string,
    "totalUsers": number,
    "lastUpdated": string,
    "updateAction" : any
}


const MenuItems : iMenuItem[] = _menuItems as iMenuItem[];
const ModeItems : iModeItem[] = _modeItems as iModeItem[];
const StatusItems: iStatusItems[] = _statusItems as iStatusItems[];

export { MenuItems, ModeItems, StatusItems }