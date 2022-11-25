export const environment = {
  production: false,
  appUrl: 'http://localhost:4200/',
  apiUrl: 'http://localhost:8090/api/',
  apiRoutes: {
    'saveUser': 'saveUser',
    'loginUser': 'loginUser',
    'saveNotes': 'saveNotes',
    'getNotes': 'getNotes',
    'deleteNotes': 'deleteNotes/{id}',
    'updateNotes': 'updateNotes/{id}',
  }
};
