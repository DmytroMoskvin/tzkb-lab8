import { type UserProvider, userProvider } from 'behavior/mockServer';
import { type TokenStorage, tokenStorage } from './tokenStorage';

export type Api = {
  tokenStorage: TokenStorage;
  userProvider: UserProvider
};

const createApi = (): Api => ({
  tokenStorage,
  userProvider,
});

export default createApi;