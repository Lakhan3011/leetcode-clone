import { Landing } from "./components/Landing";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Signin } from "./components/Signin";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { userAtom } from "./store/atoms/user";
import { RecoilRoot, useRecoilState, useSetRecoilState } from "recoil";
import { Topbar } from "./components/Topbar";
import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import { Card } from "./components/Card";
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
  return (
    <div>
      <RecoilRoot>
        <StoreApp />
      </RecoilRoot>
    </div>
  );
}

function StoreApp() {
  const [user, setUser] = useRecoilState(userAtom);
  useEffect(() => {
    onAuthStateChanged(auth, function (user) {
      if (user && user.email) {
        setUser({
          loading: false,
          user: {
            email: user.email,
          },
        });
        console.log("This is the user", user);
      } else {
        setUser({
          loading: false,
        });
        console.log("There is no logged in user");
      }
    });
  }, []);

  if (user.loading) {
    return <div>Loading...</div>;
  }
  if (!user.user) {
    return (
      <div>
        <Signin />
      </div>
    );
  }
  return (
    <div className="place-items-center grid">
      <div className="max-w-screen-lg w-full">
        <Topbar />

        {/* <Router>
          <Topbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/activity" element={<Submissions />} />
            <Route
              path="/problems"
              element={<ProblemList problemList={problemList} />}
            />
          </Routes>
        </Router> */}
        {/* <Leaderboard /> */}
        {/* <Leaderboard leaderboard={leaderboardData} /> */}
      </div>
      <Card>hi there</Card>
    </div>
  );
}

export default App;
