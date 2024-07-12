import { Landing } from "./components/Landing";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Signin from "./components/Signin";
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
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <>
      <div>
        <Signin />
      </div>
    </>
  );
}

export default App;
