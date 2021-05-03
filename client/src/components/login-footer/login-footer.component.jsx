import React, { useState } from 'react';
import axios from '../../axios/axios';

import './login-footer.style.css';

const LoginFooter = ({ formActive }) => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const signUp = async (event) => {
    event.preventDefault();
    
    if(password === confirmPassword) {
      await axios.post('/adduser', {
        name: name,
        username: userName,
        password: password,
        status: 'offline',
        createdRooms: [],
        joinedRooms: [],
        friends: []
      });
    } else {
      console.log("password not match");
    }

    setName('');
    setUserName('');
    setPassword('');
    setConfirmPassword('');
  }


  return(
    <div className="login__footer">
      {formActive === 'signin' && 
        <div className="login__form__container">
          <form className="login__form">
            <input type="text" placeholder="username" className="login__input"/>
            <input type="password" placeholder="password" className="login__input"/>
            <div className="login__button__container">
              <button className="login__button">Sign in</button>
            </div>
          </form>
        </div>
      }
      {formActive === 'signup' && 
        <div className="signup__container">
          <form className="login__form">
            <input type="text" placeholder="Name" className="login__input" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder="Username" className="login__input" value={userName} onChange={(e) => setUserName(e.target.value)}/>
            <input type="password" placeholder="Password" className="login__input" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="password" placeholder="Confirm password" className="login__input" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
            <div className="login__button__container">
              <button onClick={signUp} className="login__button" type="submit">Sign up</button>
            </div>
          </form>
        </div>
      }
    </div>      
  );
}

export default LoginFooter;