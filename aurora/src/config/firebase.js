
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBEL8tubgLn0boPcvRJVkuAPyXZ7XZqJQM",
  authDomain: "auroraproject-a6d2d.firebaseapp.com",
  projectId: "auroraproject-a6d2d",
  storageBucket: "auroraproject-a6d2d.appspot.com",
  messagingSenderId: "713903570650",
  appId: "1:713903570650:web:cbfcad7029c9a411e36fe3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export{db,app};