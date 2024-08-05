// CSS
import './Startpage.css';

// STUFF
import { useEffect, useState } from 'react';

// PAGES
import Login from '../../components/login-form/Login';
import Register from '../../components/register-form/Register';


const Startpage = () => {
  const [register, setRegister] = useState(0);

  const handleSwitchToRegister = () => {
    if (register === 0) {
      setRegister(1)
    } else {
      setRegister(0)
    }
  }

  const displayLogin = () => {
    if (register === 0) {
      return (
        <Login></Login>
      )
    } 
  }
  const displayRegister = () => {
    if (register === 1) {
      return (
        <Register></Register>
      )
    }
  }
  const switchButton = () => {
    if (register === 0) {
      return (
        <button className='create-new' onClick={handleSwitchToRegister}>
        Registrera ny användare
        </button>
      )
    } else {
      return (
        <button className='back-to-login' onClick={handleSwitchToRegister}>
        Tillbaka till login
        </button>
      )
    }
  }
  
  return (
    <div className="startpage">
      <h1>Rese- och Bränsleloggaren</h1>
      {displayLogin()}
      {displayRegister()}
      {switchButton()}
    </div>
    
  )
}

export default Startpage;