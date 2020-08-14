const ROLE = {
  ADMIN: 'admin',
  BASIC: 'basic',
};

const USERS = [
  { id: 1, name: 'Pedro', role: ROLE.ADMIN },
  { id: 2, name: 'María', role: ROLE.BASIC },
  { id: 3, name: 'Juan', role: ROLE.BASIC },
];

const PROJECTS = [
  { id: 1, name: 'Proyecto de Pedro', userId: 1 },
  { id: 2, name: 'Proyecto de María', userId: 2 },
  { id: 3, name: 'Proyecto de Juan', userId: 3 },
];

module.exports = {
  ROLE: ROLE,
  USERS: USERS,
  PROJECTS: PROJECTS,
};
