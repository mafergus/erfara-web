import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDcJGLjFf1tCJxOPHYU6mu_oFDDMsd1-zk',
  authDomain: 'erfara-2aa21.firebaseio.com',
  databaseURL: 'https://erfara-2aa21.firebaseio.com/'
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;