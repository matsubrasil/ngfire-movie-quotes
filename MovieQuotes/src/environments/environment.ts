// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyCusX5Bug54sYb1ngQeBTz7j0YROyKtv_g',
    authDomain: 'matsubrasil-movie-quotes.firebaseapp.com',
    databaseURL: 'https://matsubrasil-movie-quotes.firebaseio.com',
    projectId: 'matsubrasil-movie-quotes',
    storageBucket: 'matsubrasil-movie-quotes.appspot.com',
    messagingSenderId: '998190708178'
  }
};
