import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAKqvjXcfg59UE5XBtzXAr7z3dzAa3O2zc",
//   authDomain: "sns-app-c00fe.firebaseapp.com",
//   projectId: "sns-app-c00fe",
//   storageBucket: "sns-app-c00fe.appspot.com",
//   messagingSenderId: "325481626795",
//   appId: "1:325481626795:web:b44e1d09ae578534450bee"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBOdixOrF8HVWCth1WaH7XphdXFJBHIxWM",
  authDomain: "test-f7eb9.firebaseapp.com",
  projectId: "test-f7eb9",
  storageBucket: "test-f7eb9.appspot.com",
  messagingSenderId: "595176906429",
  appId: "1:595176906429:web:09162605721036572e21d4"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 今回はfirestoreを使う、これでdbにfirebaseに保存されたデータが格納される
const db = getFirestore(app);


// 上記2つの変数をどこででも使えるようにexportする
export { db };

//Firebaseの認証機能を使う場合に必要な記述
export const auth = getAuth(app);
