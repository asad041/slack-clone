import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCO7NT7o-dpjf8q5qaRHnun9pQUMpIBG7Y',
  authDomain: 'slack-clone-64b75.firebaseapp.com',
  projectId: 'slack-clone-64b75',
  storageBucket: 'slack-clone-64b75.appspot.com',
  messagingSenderId: '45973460973',
  appId: '1:45973460973:web:8eb6ff598c2e1fa56d39e4',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
