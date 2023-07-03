import {iAppStorage} from "./appStorage"

const  EnsureStorageExists =  (storageClass: iAppStorage, storageData: object) : void => {
    const storageKeys = Object.keys(storageData);
    console.log({storageKeys, storageData})
    storageKeys.forEach((storageKey) => {
       const keyExists = storageClass.get(storageKey);
       if(!keyExists) storageClass.set(storageKey, storageData[storageKey]);
    })
}
export default EnsureStorageExists;