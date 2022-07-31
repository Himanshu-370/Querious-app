import React from "react";
import "./Login.css";
import logo from "../../components/css/logo3.png";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

function Login() {
  const handleSubmit = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <img src={logo} alt="logo" />
        <button onClick={handleSubmit} className="btn-login">
          Login/SignUp with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
