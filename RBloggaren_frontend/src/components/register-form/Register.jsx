// CSS
import "./Register.css";

// STUFF
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [error, setError] = useState(0);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (username === "" || password === "" || first_name === "" || last_name === "") {
      // alert("Fyll i användarnamn och lösenord");
      setError(1);
      return;
    } else {
      setError(0);
    }

    var options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        first_name: first_name,
        last_name: last_name
      }),
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/signup`,
        options
      );
      const data = (await response).json();
      console.log(data);
      if (!data.ok) {
        console.log("inte ok")
        setError(2);
      }
      if (data.ok) {
        alert("Användare registrerad!")
        window.location.reload();
      }
    } catch (err) {
      console.log("Connection error: " + err);
    }
  };

  const displayError = () => {
    if (error === 1) {
      return (
        <div className="error-box">
          <p>Fyll i alla fält!</p>
        </div>
      );
    } else if (error === 2) {
      return (
        <div className="error-box error-box2">
          <p>Fel användarnamn eller lösenord!</p>
        </div>
      );
    }
  };

  return (
    <div className="register">
      {displayError()}
      <form className="form-box" onSubmit={handleRegister}>
        <h2>Register</h2>
        <label>Användarnamn:</label>
        <br></br>
        <input
          type="text"
          id="username"
          placeholder="Minst 6 tecken"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <br></br>
        <label>Lösenord:</label>
        <br></br>
        <input
          type="text"
          id="password"
          placeholder="Minst 6 tecken"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br></br>
        <label>Förnamn:</label>
        <br></br>
        <input
          type="text"
          id="first_name"
          placeholder="Minst 3 tecken"
          onChange={(e) => setFirst_name(e.target.value)}
        ></input>
        <br></br>
        <label>Efternamn:</label>
        <br></br>
        <input
          type="text"
          id="last_name"
          placeholder="Minst 3 tecken"
          onChange={(e) => setLast_name(e.target.value)}
        ></input>
        <br></br>
        <div className="register-box">
          <button type="submit" className="register-button">
            Registrera
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
