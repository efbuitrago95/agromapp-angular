// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api/',
  firebaseConfig: {
    apiKey: 'AIzaSyCi4JTBY7P9uyU_pNMj-lbf1GrbZ21_LGs',
    authDomain: 'agromapp-9b19a.firebaseapp.com',
    databaseURL: 'https://agromapp-9b19a.firebaseio.com',
    projectId: 'agromapp-9b19a',
    storageBucket: 'agromapp-9b19a.appspot.com',
    messagingSenderId: '485051939987',
    appId: '1:485051939987:web:e0a672316f019f7764a166',
    measurementId: 'G-BT9VMWD80V'
  }
  // apiUrl: 'http://18.217.161.92:3000/api/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
