import React from "react";


function Landing({setChoice}) {
 

  const handleRegister = () => {
    setChoice("register");
  };
  const handleLogin = () => {
    setChoice("login");
  };

  return (
    <div id="landing-page">
      <h1>Password Manager </h1>
      <h2>Keep all your passwords in one, secure place.</h2>
      <p>
        Yull never have to memorise a password again - except the one to this
        account ;]
      </p>
      <img src={require("./images/lock.png")} alt="lock"></img>
      <div className="links">
        <button onClick={handleRegister}>Register</button>
        <button onClick={handleLogin}>I already have an account</button>
      </div>
      <p className="disclaimer">For demo purposes</p>
    </div>
    
  );
}

export default Landing;
