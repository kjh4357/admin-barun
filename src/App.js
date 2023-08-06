import { Route, Routes, Navigate } from "react-router-dom";

import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import SignIn from "./pages/auth/SignIn";

import "./App.css";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";

function App() {
  const [isLoggedIn, setLoggedInFlag] = useState(false);

  useEffect(() => {
    handleCheckFirebaseLogin();
    console.log("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const handleCheckFirebaseLogin = () => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setLoggedInFlag(true);
      } else {
        setLoggedInFlag(false);
      }
    });
  };
  return (
    <div className="App">
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<AppLayout />}>
              <Route index path="/" element={<Home />} />
              <Route path="*" element={<Home />} />
            </Route>
          </>
        ) : (
          <>
            <Route index path="/" element={<SignIn />} />
            <Route path="*" element={<SignIn />} />
            <Route path="/login" element={<SignIn />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
