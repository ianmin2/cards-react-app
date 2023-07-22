/* eslint-disable no-undef */

import { json, str } from './parser.js';
import _ from 'lodash';

interface iAppStorage {
  set(key: string, value: any): void;
  get(key: string, subKey?: string): any;
  update(key: string, subKey: string, value: any);
  del(key: string): void;
  reset(): void;
}

class AppStorage implements iAppStorage {
  static set(key: string, value: any = ''): void {
    localStorage.setItem(key, str(value));
  }

  static update(key: string, subKey: string, value: any = ''): void {
    const payload = this.get(key) || {};
    _.set(payload, subKey, value);
    this.set(key, payload);
  }

  static get(key: string, subKey?: any): any {
    const payload = json(localStorage.getItem(key));
    return !subKey ? payload : _.get(payload, subKey);
  }

  static del(key: string): void {
    localStorage.removeItem(key);
  }

  static reset(): void {
    localStorage.clear();
  }
}

export default AppStorage;
export { iAppStorage };
