import React from "react";
import { Link } from "react-router-dom";
import AuthProvider from "../Components/authProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { updateUser, userExists } from "../firebase/Firebase"; // Agregar esta línea

function Chooseusername() {
  const [currentUser, setCurrentUser] = useState({});
  const [username, setUsername] = useState(""); // Agregar esta línea
  const [state, setState] = useState(0);
  const navigate = useNavigate();
  function handleUserLoggedIn(users) {
    navigate("/dashbord");
  }
  function handleUserNotLoggendIn(users) {
    navigate("/login");
  }
  function handleUserNotRegistered(users) {
    setCurrentUser(users);
    setState(3);
  }

  function handleInputUsername(e) {
    setUsername(e.target.value);
  }
  async function handleContinue() {
    const exists = await userExists(username);
    if (exists) {
      setState(5);
    } else {
      const tmp = { ...currentUser };
      tmp.username = username;
      tmp.processCompleted = true;
      await updateUser(tmp);
      setState(6)
    }
  }
  
  if (state === 3 || state === 5) {
    return (
      <div>
        <h1>bienvenido{currentUser.displayName}</h1>
        <p>para termianr el proceso elije un nombre de usuario</p>
        {state === 5 ? <p>el nombre de user ya existe</p> : null}
        <div>
          <input type="text" onChange={handleInputUsername} />
        </div>
        <div>
          <button onClick={handleContinue}>Continuar</button>
        </div>
      </div>
    );
  }
  if(state === 6){
    return <div>
      <h1>felicidades ya puedes ir al dashboard </h1>
      <Link to="/dashbord">continuar</Link>
    </div>

  }
  
  return (
    <div>
      <AuthProvider
        onUserLoggedIn={handleUserLoggedIn}
        onUserNotRegistered={handleUserNotRegistered}
        onUserNotLoggedIn={handleUserNotLoggendIn}
      ></AuthProvider>
    </div>
  );
}

export default Chooseusername;
