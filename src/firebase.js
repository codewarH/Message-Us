import firebase from 'firebase '

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCtNyxakfoKT3SeNpMHswPyFK4-fq_BWZc',
  authDomain: 'messenger-4cd3f.firebaseapp.com',
  databaseURL: 'https://messenger-4cd3f.firebaseio.com',
  projectId: 'messenger-4cd3f',
  storageBucket: 'messenger-4cd3f.appspot.com',
  messagingSenderId: '1045629535460',
  appId: '1:1045629535460:web:afb064c39a99426f7218f1',
  measurementId: 'G-CH4XJBPTFT',
})

const db = firebase.firestore()

export default { db }
