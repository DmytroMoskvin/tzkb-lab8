export interface TokenStorage {
  get: () => string | null;
  set: (value: string) => void;
  reset: () => void;
}

const authVariable = 'authToken';

export const tokenStorage: TokenStorage = {
  get: () => {
    return localStorage.getItem(authVariable);
  },
  set(value) {
    localStorage.setItem(authVariable, value);
  },
  reset() {
    localStorage.removeItem(authVariable);
  }
};