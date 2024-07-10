// Stuff
import { json } from "react-router-dom";
import "./Login.css";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(0);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
        // alert("Fyll i användarnamn och lösenord");
        setError(1);   
        return 
    } else {
      setError(0);
    }

    var options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
      };

    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/signin`, options);
        
        
        if (!response.ok) {
          setError(2)
          return
        }

        const data = (await response).json();
        console.log(data);

    } catch (err) {
        console.log("Connection error: " + err)
    }
  };

  const displayError = () => {
    if (error === 1) {
      return (
        <div className="error-box">
          <p>Fyll i användarnamn och lösenord!</p>
        </div>
      )
    } else if (error === 2) {
      return (
        <div className="error-box error-box2">
          <p>Fel användarnamn eller lösenord!</p>
        </div>
      )
    }
  }

  return (
    <div className="login">
      {displayError()}
      <form className="form-box" onSubmit={handleLogin}>
        <h2>Login</h2>
        <label>Användarnamn:</label>
        <br></br>
        <input
          type="text"
          id="username"
          placeholder="ex: bosse69"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <br></br>
        <label>Lösenord:</label>
        <br></br>
        <input
          type="text"
          id="password"
          placeholder="ex: Cheva%58"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
        <div className="login-box">
          <button type="submit" className="login-button">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
