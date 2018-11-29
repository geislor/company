const Rebase = require('re-base');
const Firebase = require('firebase');

var firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
};

console.log('CONFIG FIREBASE',firebaseConfig)

const app = Firebase.initializeApp(firebaseConfig);
const config = Rebase.createClass(app.database());

export default config;