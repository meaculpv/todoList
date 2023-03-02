import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCq0eMyob_VkQ79cHtKZELKWzEgMgy9-0c",
  authDomain: "todo-49c7e.firebaseapp.com",
  projectId: "todo-49c7e",
  storageBucket: "todo-49c7e.appspot.com",
  messagingSenderId: "44549894874",
  appId: "1:44549894874:web:673e2f01e379c1222eabe3",
  measurementId: "G-800R8GMHJD"
};

firebaseConfig.initializeApp(firebaseConfig);

export default firebase;