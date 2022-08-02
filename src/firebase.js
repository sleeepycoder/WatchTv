import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage} from "firebase/storage";

import {getAuth} from 'firebase/auth';






const firebaseConfig = {
  apiKey: "AIzaSyAwEcQmwqyegVNGbenGF48GHdeoX4BBwzs",
  authDomain: "disney-plus-clone-21046.firebaseapp.com",
  databaseURL: "https://disney-plus-clone-21046-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "disney-plus-clone-21046",
  storageBucket: "disney-plus-clone-21046.appspot.com",
  messagingSenderId: "875875569281",
  appId: "1:875875569281:web:914459ea3d5d08fdc48780",
  measurementId: "G-V0W0X2WGND"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = getAuth(firebaseApp);
const provider = new firebase.auth.GoogleAuthProvider();
const storage =getStorage(firebaseApp);


export { auth, provider, storage };
export default db;
