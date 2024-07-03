// Stuff
import { json } from "react-router-dom";
import "./Startpage.css";
import { useState } from "react";

const Startpage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
        alert("Fyll i användarnamn och lösenord")
        return
    };

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
        const response = fetch(`${import.meta.env.VITE_API_URL}/auth/signin`, options);
        const data = (await response).json();
        console.log(data);

    } catch (err) {
        console.log("Connection error: " + err)
    }
  };

  return (
    <div className="startpage">
      <h1>Rese- och Bränsleloggaren</h1>
      <form className="form-box">
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
          <button type="submit" className="login-button" onClick={login}>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Startpage;
