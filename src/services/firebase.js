
import firebase from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyCz_ejrvnTAGLwqWezWg2eZ7DGpJo5VFGU',
  authDomain: 'burguerqueen-47756.firebaseapp.com',
  databaseURL: 'https://burguerqueen-47756.firebaseio.com',
  projectId: 'burguerqueen-47756',
  storageBucket: 'burguerqueen-47756.appspot.com',
  messagingSenderId: '662450950530',
};

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;