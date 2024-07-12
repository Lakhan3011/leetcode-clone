import {
  getAuth,
  GoogleAuthProvider,
  sendSignInLinkToEmail,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../App";
const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "http://localhost:3000",
  // This must be true.
  handleCodeInApp: true,
};

const provider = new GoogleAuthProvider();
export const Signin = () => {
  async function onSignin() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) {
          return;
        }
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch(() => {
        alert("erorr while signing in");
      });
  }

  return (
    <div className=" text-center">
      <button
        onClick={() => {
          onSignin();
        }}
      >
        Login with google
      </button>
    </div>
  );
};
