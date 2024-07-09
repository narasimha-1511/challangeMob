import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIOGWKZNhtUsr7OZS9xTrVQDuEbxSSAPY",
  authDomain: "challengemob-144aa.firebaseapp.com",
  projectId: "challengemob-144aa",
  storageBucket: "challengemob-144aa.appspot.com",
  messagingSenderId: "818149463767",
  appId: "1:818149463767:web:8f6b4f18737080e2060292",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const login = async (email: string, password: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res;
        //@ts-ignore
        //@ts-ignore
        resolve("Login Success!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        reject("Login Failed!");
      });
  });
};

export default login;

// createUserWithEmailAndPassword(auth, "ss@gmail.com", "sss@sss")
//   .then((userCredential) => {
//     const user = userCredential.user;
//     console.log(user);
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode, errorMessage);
//   });
