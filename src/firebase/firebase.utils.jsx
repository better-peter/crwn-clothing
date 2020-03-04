import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAdQjLhB2mtLhrLmr8n7y3tg1FPB4FieDY',
  authDomain: 'c-shop-db.firebaseapp.com',
  databaseURL: 'https://c-shop-db.firebaseio.com',
  projectId: 'c-shop-db',
  storageBucket: 'c-shop-db.appspot.com',
  messagingSenderId: '915217234888',
  appId: '1:915217234888:web:fb2997eb74b0258b5c9efd',
  measurementId: 'G-J5F0Q2015W'
};

firebase.initializeApp(config);

// We need to export these for use elsewhere...
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// This gives access to new google auth provider class...
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
