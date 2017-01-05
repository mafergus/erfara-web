import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDcJGLjFf1tCJxOPHYU6mu_oFDDMsd1-zk',
  authDomain: 'erfara-2aa21.firebaseapp.com',
  databaseURL: 'https://erfara-2aa21.firebaseio.com/'
};

firebase.initializeApp(config);

export default firebase;