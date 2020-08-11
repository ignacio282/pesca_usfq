import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBiu_OJ9_nTVITZ9fYSeg7627rM_c2-Hbg",
    authDomain: "regeneracionoceanos.firebaseapp.com",
    databaseURL: "https://regeneracionoceanos.firebaseio.com",
    projectId: "regeneracionoceanos",
    storageBucket: "regeneracionoceanos.appspot.com",
    messagingSenderId: "1058872195185",
    appId: "1:1058872195185:web:6a32955dd5bc57ea3ec3d0",
    measurementId: "G-79D0P1B8J7"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

const educacionTexts = db.collection('educacionTexts');
const plasticosTexts = db.collection('plasticosTexts');
const reciclajeTexts = db.collection('reciclajeTexts');
const pescaTexts = db.collection('pescaTexts');
const creditos = db.collection('creditos');
const lideres = db.collection('lideres');

export {
  db,
  educacionTexts,
  plasticosTexts,
  reciclajeTexts,
  pescaTexts,
  creditos,
  lideres,
  storage
}