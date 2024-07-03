// Stuff
import './Startpage.css';
import { useState } from 'react';

const Startpage = () => {

    return (
        <div className='startpage'>
            <h1>Rese- och Bränsleloggaren</h1>
            <form className='form-box'>
                <h2>Login</h2>
                <label for="username">Username:</label><br></br>
                <input type="text" id="username" placeholder='ex: bosse69'></input><br></br>
                <label for="password">Password:</label><br></br>
                <input type="text" id="password" placeholder='ex: Cheva%58'></input><br></br>
                <div className='login-box'>
                    <button type="submit" className="login-button">Sign In</button>
                </div>
                
            </form>
        </div>
    )
}

export default Startpage;