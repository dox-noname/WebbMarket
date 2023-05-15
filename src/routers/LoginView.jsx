import React, { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/Firebase";
import { userExists } from "../firebase/Firebase";
import { Navigate, useNavigate } from "react-router-dom";
import AuthProvider from "../Components/authProvider/AuthProvider";

export default function LoginView() {
  const [currentUser, setCurrentUser] = useState({});

  /*
  sate
  */ const navigate = useNavigate();
  const [state, setCurrentState] = useState(0);

  // useEffect(() => {
  //   setCurrentState(1);
  //   onAuthStateChanged(auth, async (users) => {
  //     if (users) {
  //       const isRegistered = await userExists(users.uid);
  //       // navigate('./Components/seccion venta/ProductDetalle.jsx')
  //       if (isRegistered) {
  //         //TODO redirigir usr
  //         setCurrentState(2);
  //         navigate("/dashbord");
  //       } else {
  //         //chose user name
  //         setCurrentState(3);
  //         navigate("/choose-username");
  //       }
  //     } else {
  //       setCurrentState(4);
  //       console.log("no aute");
  //       console.log("nadie autemticado");
  //     }
  //   });
  // }, [navigate]);

  async function handleOnClick() {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);
    async function signInWithGoogle(googleProvider) {
      try {
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    }
  }
  function handleUserLoggedIn(users) {
    navigate("/dashbord");
  }
  function handleUserNotLoggendIn(users) {
    setCurrentState(4);
  }
  function handleUserNotRegistered() {
    navigate("/choose-username");
  }

  // if (state === 2) {
  //   return <div>atenticado y registrado</div>;
  // }
  // if (state === 3) {
  //   return <div>bienvenido</div>;
  // }
  if (state === 4) {
    return (
      <div>
        <button onClick={handleOnClick} style={{ background: "red" }}>
          registrate con google
        </button>
      </div>
    );
  }
  return (
    <AuthProvider
      onUserLoggedIn={handleUserLoggedIn}
      onUserNotRegistered={handleUserNotRegistered}
      onUserNotLoggedIn={handleUserNotLoggendIn}
    >
      <div>loading..</div>
    </AuthProvider>
  );
}
