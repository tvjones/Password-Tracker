import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

function Login({ setLoginStatus, setUID, setChoice }) {
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log(user)
        setUID(user.uid);
        setError("");
        setLoginStatus("logged in");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div id="login">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input required type="email" placeholder="Enter email"></input>
        <input required type="password" placeholder="Enter password"></input>
        <p>{error}</p>
        <button>Login</button>
        <p
          onClick={() => {
            setChoice("register");
          }}
          className="cursor-pointer"
        >
          I don't have an account
        </p>
      </form>
    </div>
  );
}

export default Login;
