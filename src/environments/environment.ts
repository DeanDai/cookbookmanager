// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDFZDdSau9h27M9FyxyGKszbKKplYawbWw',
    authDomain: 'cookbookmanager-20171215.firebaseapp.com',
    databaseURL: 'https://cookbookmanager-20171215.firebaseio.com',
    projectId: 'cookbookmanager-20171215',
    storageBucket: 'cookbookmanager-20171215.appspot.com',
    messagingSenderId: '560610291003'
  }
};
