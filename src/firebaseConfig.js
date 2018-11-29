import keys from './keys';

const Rebase = require('re-base');
const Firebase = require('firebase');

var firebaseConfig = {
    apiKey: keys.apiKey,
    authDomain: keys.authDomain,
    databaseURL: keys.databaseURL,
    projectId: keys.projectId,
    storageBucket: keys.storageBucket,
    messagingSenderId: keys.messagingSenderId,
};

console.log('CONFIG FIREBASE',firebaseConfig)

const app = Firebase.initializeApp(firebaseConfig);
const config = Rebase.createClass(app.database());

export default config;