import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "./lib/firebase";

const PrivateRoute = () => {
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
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
