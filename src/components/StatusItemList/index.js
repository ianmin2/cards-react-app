import { useState } from "react";
import { STORAGE_KEYS } from "../../constants/index.ts";
import StatusItem from "../StatusItem";
import AppStorage from "../../lib/helpers/appStorage.ts";



const StatusItemList = () => {
    const[statusItems, setStatusItems] = useState(AppStorage.get(STORAGE_KEYS.STATUS_ITEMS));

    return (
        <>
        {
            statusItems.map((cfg) => (
                <StatusItem key={cfg.label} config={cfg}></StatusItem>
            ))
        }
        </>
    )
};

export default StatusItemList;