import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  "apiKey": "AIzaSyCk4RODu3oAcyvPa_e8u3hdqZvUkbmJlz4",
  "authDomain": "ayudaweddinginvitation.firebaseapp.com",
  "databaseURL": "https://ayudaweddinginvitation-default-rtdb.asia-southeast1.firebasedatabase.app",
  "projectId": "ayudaweddinginvitation",
  "storageBucket": "ayudaweddinginvitation.appspot.com",
  "messagingSenderId": "522569097183",
  "appId": "1:522569097183:web:b29936ed7b079e7c4bae6a"
}

if (!firebase.apps.length) {
  try {
    firebase.initializeApp(firebaseConfig);
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack);
  }
}else {
}

export default firebase.firestore();
