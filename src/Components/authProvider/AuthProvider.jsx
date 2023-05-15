import React from "react";
import { useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth, getUserInfo, registerNewUser } from "../../firebase/Firebase";
import { userExists } from "../../firebase/Firebase";
import { useNavigate } from "react-router-dom";

function AuthProvider({
  children,
  onUserLoggedIn,
  onUserNotLoggedIn,
  onUserNotRegistered,
}) {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const isRegistered = await userExists(user.uid);
        // navigate('./Components/seccion venta/ProductDetalle.jsx')
        if (isRegistered) {
          //TODO redirigir usr
          const usrinfo = await getUserInfo(user.uid);
          if (usrinfo.processCompleted) {
            onUserLoggedIn(usrinfo);
          }else{
            onUserNotRegistered(usrinfo)
          }
        } else {
          //chose user name
          await registerNewUser({
            uid: user.uid,
            displayName: user.displayName,
            profilePicture: "",
            username: "",
            processCompleted: false,
          });
          onUserNotRegistered(user);
        }
      } else {
        onUserNotLoggedIn(user);
      }
    });
  }, [navigate, onUserLoggedIn, onUserNotLoggedIn, onUserNotRegistered]);
  return <div>{children}</div>;
}

export default AuthProvider;
