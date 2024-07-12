import { Landing } from "./components/Landing";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Signin } from "./components/Signin";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP03tZdQCs0axNQxEgagaGppKyuVSovUM",
  authDomain: "leetcode-clone-69e47.firebaseapp.com",
  projectId: "leetcode-clone-69e47",
  storageBucket: "leetcode-clone-69e47.appspot.com",
  messagingSenderId: "780457226362",
  appId: "1:780457226362:web:c8523e189831252a400bc3",
  measurementId: "G-91JYDMK5KH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

function App() {
  useEffect(() => {
    onAuthStateChanged(auth, function (user) {
      if (user) {
        console.log("This is the user", user);
      } else {
        console.log("There is no logged in user");
      }
    });
  }, []);
  return (
    <>
      <div>
        <Signin />
      </div>
    </>
  );
}

export default App;
