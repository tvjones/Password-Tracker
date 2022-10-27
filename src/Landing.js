import React from "react";

function Landing({ setChoice }) {
  const handleRegister = () => {
    setChoice("register");
  };
  const handleLogin = () => {
    setChoice("login");
  };

  return (
    <div id="landing-page">
      <nav>
        <div className="links">
          <button onClick={handleRegister}>Register</button>
          <button onClick={handleLogin}>Login</button>
        </div>
      </nav>
      <div className="info">
        <div className="bg-image">
          <img src={require("./images/macbook.png")} alt="macbook"></img>
        </div>
        <div>
          <h1>Password Manager </h1>

          <h2>Your password should be yours and only yours</h2>
          <p>
            Sign up for our password manager today! Keep all your accounts in
            one safe space.
          </p>
        </div>
      </div>
      <p className="disclaimer">For demo purposes</p>
    </div>
  );
}

export default Landing;
