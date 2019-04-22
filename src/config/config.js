import firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyCz_ejrvnTAGLwqWezWg2eZ7DGpJo5VFGU',
  authDomain: 'burguerqueen-47756.firebaseapp.com',
  databaseURL: 'https://burguerqueen-47756.firebaseio.com',
  projectId: 'burguerqueen-47756',
  storageBucket: 'burguerqueen-47756.appspot.com',
  messagingSenderId: '662450950530',
};

firebase.firestore().enablePersistence()
  .then(() => {
    const db = firebase.firestore();
  })
  .catch((err) => {
    if (err.code === 'failed-precondition') {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code === 'unimplemented') {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  });
export default config;