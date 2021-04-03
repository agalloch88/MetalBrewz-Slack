import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBDpAg6fZSKvB25kC6IIJBlAhSSebqh4wo",
    authDomain: "metalbrewz-chat.firebaseapp.com",
    projectId: "metalbrewz-chat",
    storageBucket: "metalbrewz-chat.appspot.com",
    messagingSenderId: "700560322717",
    appId: "1:700560322717:web:accfe4e61434d1a6cce474"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;