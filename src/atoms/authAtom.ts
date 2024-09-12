import { atomWithStorage } from 'jotai/utils';

export const tokenAtom = atomWithStorage<string | null>('@userToken', null, {
  getItem: () => {
    return sessionStorage.getItem('@userToken') || null;
  },
  setItem: (key, value: string | null) => {
    sessionStorage.setItem(key, value ?? '');
  },
  removeItem: (key) => {
    sessionStorage.removeItem(key);
  },
});
