// eslint-disable-next-line no-unused-vars
import { iAppStorage } from './appStorage';

const  EnsureStorageExists =  (storageClass: iAppStorage, storageData: object) : void => {
    const storageKeys = Object.keys(storageData);
    storageKeys.forEach((storageKey) => {
       const keyExists = storageClass.get(storageKey);
       if(!keyExists) storageClass.set(storageKey, storageData[storageKey]);
    })
}
export default EnsureStorageExists;
