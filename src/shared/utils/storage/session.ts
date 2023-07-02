import { decrypt, encrypt } from "../crypto";

interface Session {
  demoKey: string;
}

function createSessionStorage<T extends Session = Session>() {
  function set<K extends keyof T>(key: K, value: T[K]) {
    const json = encrypt(value);
    sessionStorage.setItem(key as string, json);
  }
  function get<K extends keyof T>(key: K) {
    const json = sessionStorage.getItem(key as string);
    let data: T[K] | null = null;
    if (json) {
      try {
        data = decrypt(json);
      } catch {
        // Prevent analytical failure
      }
    }
    return data;
  }
  function remove(key: keyof T) {
    window.sessionStorage.removeItem(key as string);
  }
  function clear() {
    window.sessionStorage.clear();
  }

  return { set, get, remove, clear };
}

export const sessionStg = createSessionStorage();
