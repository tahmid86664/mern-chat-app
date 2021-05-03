import React, { useState } from 'react';

import './login.style.css';

import LoginHeader from '../login-header/login-header.component';

const Login = () => {
  const [formActive, setFormActive] = useState('signin');

    return (
        <div className="login">
            <LoginHeader setFormActive={setFormActive} />
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
                      <input type="text" placeholder="username" className="login__input"/>
                      <input type="password" placeholder="password" className="login__input"/>
                      <input type="password" placeholder="confirm password" className="login__input"/>
                      <div className="login__button__container">
                        <button className="login__button">Sign up</button>
                      </div>
                    </form>
                </div>
              }
            </div>
        </div>
    );
}

export default Login;