
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDrh5FVTGzGtdzKUld8bZDhqeaoxBb8uS0",
  authDomain: "sellproduct-90515.firebaseapp.com",
  projectId: "sellproduct-90515",
  storageBucket: "sellproduct-90515.appspot.com",
  messagingSenderId: "776345135405",
  appId: "1:776345135405:web:e4a90cdd3532fce29f8ba4",
  measurementId: "G-7Z0D7S8Z6J"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth, firebase };