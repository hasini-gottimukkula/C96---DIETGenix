import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyChjbgAFWfmZ9uA5BfSdy9rVEuq4I1XyPk",
  authDomain: "dietgenix.firebaseapp.com",
  databaseURL: "https://dietgenix-default-rtdb.firebaseio.com",
  projectId: "dietgenix",
  storageBucket: "dietgenix.appspot.com",
  messagingSenderId: "708716012856",
  appId: "1:708716012856:web:2b2f4bc59c5251163acdcd"
};

firebase.initializeApp(firebaseConfig); 

export default firebase.database();