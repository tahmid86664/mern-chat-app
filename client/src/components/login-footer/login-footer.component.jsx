import React, { useEffect, useState } from 'react';
import axios from '../../axios/axios';
import io from 'socket.io-client';
import { useHistory } from "react-router-dom";

import './login-footer.style.css';

import { useStateValue } from '../../context/StateProvider';
import { actionTypes } from '../../context/reducer';

let socket;

const LoginFooter = ({ formActive }) => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //login data
  const [logUserName, setLogUserName] = useState('');
  const [logPassword, setLogPassword] = useState('');
  const [{}, dispatch] = useStateValue();

  const ENDPOINT = 'localhost:9000';

  let history = useHistory();

  useEffect(() => {
    socket = io(ENDPOINT, {
      withCredentials: true
    })
  }, [ENDPOINT]);

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

  const signIn = (event) => {
    event.preventDefault();

    // socket.emit('signin', {logUserName, logPassword}, (err) => {
    //   console.log(err);
    // })
    axios.post('/finduser', {
      username: logUserName,
      password: logPassword
    }).then((res) => {
      console.log(res.data);
      if(res.data !== ''){
        dispatch({
          type: actionTypes.SET_USER,
          user: res.data
        });

        // redirect to zone
        history.push('/zone');
      }
    });

    setLogUserName('');
    setLogPassword('');
  }


  return(
    <div className="login__footer">
      {formActive === 'signin' && 
        <div className="login__form__container">
          <form className="login__form">
            <input type="text" placeholder="username" className="login__input"
              value={logUserName}
              onChange={(e) => setLogUserName(e.target.value)}
            />
            <input type="password" placeholder="password" className="login__input"
              value={logPassword}
              onChange={(e) => setLogPassword(e.target.value)}
            />
            <div className="login__button__container">
              <button onClick={signIn} className="login__button">Sign in</button>
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