export const enum AccessLevel {
  Create = 'Create',
  Read = 'Read',
  Update = 'Update',
  Delete = 'Delete',
  RightTransfer = 'Transfer of rights',
  Forbidden = 'Forbidden',
};

export const enum AccessObject {
  Databases = 'Databases',
  Projects = 'Projects',
  Servers = 'Servers',
  WebApp = 'Web application',
};

export const enum UserRole {
  Client = 'Client',
  Consultant = 'Consultant',
  Designer = 'Designer',
  Architect = 'Architect',
  Builder = 'Builder',
  Accountant = 'Accountant',
  Provider = 'Provider',
  SystemAdministrator = 'System administrator',
  Director = 'Director',
};