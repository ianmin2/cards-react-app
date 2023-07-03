
import { json, str } from "./parser.js";

interface iAppStorage {
    set(key: string, value: any): void;
    get(key: string): any;
    del(key: string): void;
    reset(): void;
}

class AppStorage implements iAppStorage {

    static  set(key: string, value: any = ""): void {
        localStorage.setItem(key, str(value));
    }

    static get(key: string): any {
        return json(localStorage.getItem(key));
    }

    static del(key: string): void {
        localStorage.removeItem(key);
    }

    static reset(): void {
        localStorage.clear();
    }

}

export default AppStorage;
export {iAppStorage};