import { CharacterSets, generatePassword } from '../passwordGenerator';
import { AccessLevel, AccessObject, UserRole } from './enums';

const passwordLength = 8;
const charactersSets = [
  CharacterSets.CapitalLetters,
  CharacterSets.SmallLetters,
  CharacterSets.Numbers,
];

export type User = {
  login: string;
  role: UserRole;
  password?: string;
  accessLevels: Record<AccessObject, Array<AccessLevel>>;
};

export const users: Array<User> = [{
  login: 'client123',
  role: UserRole.Client,
  password: generatePassword(passwordLength, charactersSets),
  accessLevels: {
    [AccessObject.Databases]: [
      AccessLevel.Forbidden,
    ],
    [AccessObject.Projects]: [
      AccessLevel.Forbidden,
    ],
    [AccessObject.Servers]: [
      AccessLevel.Forbidden,
    ],
    [AccessObject.WebApp]: [
      AccessLevel.Read,
    ],
  },
}, {
  login: 'consultant123',
  role: UserRole.Consultant,
  password: generatePassword(passwordLength, charactersSets),
  accessLevels: {
    [AccessObject.Databases]: [
      AccessLevel.Read,
    ],
    [AccessObject.Projects]: [
      AccessLevel.Read,
    ],
    [AccessObject.Servers]: [
      AccessLevel.Forbidden,
    ],
    [AccessObject.WebApp]: [
      AccessLevel.Create,
      AccessLevel.Read,
      AccessLevel.Update,
      AccessLevel.Delete,
    ],
  },
}, {
  login: 'designer123',
  role: UserRole.Designer,
  password: generatePassword(passwordLength, charactersSets),
  accessLevels: {
    [AccessObject.Databases]: [
      AccessLevel.Create,
      AccessLevel.Read,
    ],
    [AccessObject.Projects]: [
      AccessLevel.Create,
      AccessLevel.Read,
      AccessLevel.Update,
      AccessLevel.Delete,
    ],
    [AccessObject.Servers]: [
      AccessLevel.Forbidden,
    ],
    [AccessObject.WebApp]: [
      AccessLevel.Read,
    ],
  },
}, {
  login: 'architect123',
  role: UserRole.Architect,
  password: generatePassword(passwordLength, charactersSets),
  accessLevels: {
    [AccessObject.Databases]: [
      AccessLevel.Create,
      AccessLevel.Read,
      AccessLevel.Update,
      AccessLevel.Delete,
    ],
    [AccessObject.Projects]: [
      AccessLevel.Create,
      AccessLevel.Read,
      AccessLevel.Update,
      AccessLevel.Delete,
      AccessLevel.RightTransfer,
    ],
    [AccessObject.Servers]: [
      AccessLevel.Forbidden,
    ],
    [AccessObject.WebApp]: [
      AccessLevel.Read,
    ],
  },
}, {
  login: 'builder123',
  role: UserRole.Builder,
  password: generatePassword(passwordLength, charactersSets),
  accessLevels: {
    [AccessObject.Databases]: [
      AccessLevel.Read,
    ],
    [AccessObject.Projects]: [
      AccessLevel.Read,
    ],
    [AccessObject.Servers]: [
      AccessLevel.Forbidden,
    ],
    [AccessObject.WebApp]: [
      AccessLevel.Read,
    ],
  },
}, {
  login: 'accountant123',
  role: UserRole.Accountant,
  password: generatePassword(passwordLength, charactersSets),
  accessLevels: {
    [AccessObject.Databases]: [
      AccessLevel.Create,
      AccessLevel.Read,
      AccessLevel.Update,
      AccessLevel.Delete,
    ],
    [AccessObject.Projects]: [
      AccessLevel.Forbidden,
    ],
    [AccessObject.Servers]: [
      AccessLevel.Forbidden,
    ],
    [AccessObject.WebApp]: [
      AccessLevel.Read,
    ],
  },
}, {
  login: 'accountant123',
  role: UserRole.Provider,
  password: generatePassword(passwordLength, charactersSets),
  accessLevels: {
    [AccessObject.Databases]: [
      AccessLevel.Read,
    ],
    [AccessObject.Projects]: [
      AccessLevel.Forbidden,
    ],
    [AccessObject.Servers]: [
      AccessLevel.Forbidden,
    ],
    [AccessObject.WebApp]: [
      AccessLevel.Read,
    ],
  },
}, {
  login: 'admin123',
  role: UserRole.SystemAdministrator,
  password: generatePassword(passwordLength, charactersSets),
  accessLevels: {
    [AccessObject.Databases]: [
      AccessLevel.Create,
      AccessLevel.Read,
      AccessLevel.Update,
      AccessLevel.Delete,
      AccessLevel.RightTransfer,
    ],
    [AccessObject.Projects]: [
      AccessLevel.RightTransfer,
    ],
    [AccessObject.Servers]: [
      AccessLevel.Create,
      AccessLevel.Read,
      AccessLevel.Update,
      AccessLevel.Delete,
      AccessLevel.RightTransfer,
    ],
    [AccessObject.WebApp]: [
      AccessLevel.Read,
      AccessLevel.RightTransfer,
    ],
  },
}, {
  login: 'director123',
  role: UserRole.Director,
  password: generatePassword(passwordLength, charactersSets),
  accessLevels: {
    [AccessObject.Databases]: [
      AccessLevel.Create,
      AccessLevel.Read,
      AccessLevel.Update,
      AccessLevel.Delete,
    ],
    [AccessObject.Projects]: [
      AccessLevel.Read,
    ],
    [AccessObject.Servers]: [
      AccessLevel.Forbidden,
    ],
    [AccessObject.WebApp]: [
      AccessLevel.Read,
    ],
  },
}];

console.log(users.map(u => ({ login: u.login, password: u.password })));