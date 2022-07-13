import { users, type User } from './data';

export type UserProvider = {
  loginUser: (login: string, password: string) => Promise<User | null>;
  logoutUser: (login: string) => Promise<boolean>;
  getUser: (login: string) => Promise<User | null>;
  getUserList: () => Promise<Array<User>>;
};

export const userProvider: UserProvider = {
  loginUser: async (login: string, password: string) => {
    await delay(1000);
    const user = users.find(u => u.login === login);

    if (user?.password === password)
      return {
        ...user,
        password: undefined,
      };

    return null;
  },
  logoutUser: async (login: string) => {
    await delay(1000);
    const user = users.find(u => u.login === login);
    return !!user;
  },
  getUser: async (login: string) => {
    await delay(1000);
    const user = users.find(u => u.login === login)

    if (!user)
      return null;

    return {
      ...user,
      password: undefined,
    };
  },
  getUserList: async () => {
    await delay(1000);
      return users.map(user => {
        return {
          ...user,
          password: undefined,
        };
      });
  },
};

const delay = async (ms: number) => await new Promise(resolve => setTimeout(resolve, ms));