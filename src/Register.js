import React from "react";
import { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Login({ setLoginStatus, setUID, setChoice }) {
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
/*
      (email.length === 0)?setError("Enter a valid email"): setError("")
      (password.length === 0)?setError("Enter a valid password"): setError("")
      console.log(email.length)
*/
      if (email.length !== 0 && password.length !== 0){
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setUID(user.uid);
          //console.log(user)
          setLoginStatus("logged in");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
          // ..
        });
      }
    
  };

  return (
    <div id="register">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input required type="email" placeholder="Enter email"></input>
        <input required type="password" placeholder="Enter password"></input>
        <p>{error}</p>
        <button>Register</button>
        <p
          onClick={() => {
            setChoice("login");
          }}
          className="cursor-pointer"
        >
          I have an account
        </p>
      </form>
    </div>
  );
}

export default Login;
