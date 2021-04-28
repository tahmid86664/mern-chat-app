import React, { useState } from 'react';

import './login.style.css';

const Login = () => {
  const [formActive, setFormActive] = useState('signin');

    return (
        <div className="login">
            <div className="login__header">
              <div onClick={() => setFormActive('signin')} className="login__header__button">
                Signin
              </div>
              <div onClick={() => setFormActive('signup')} className="login__header__button signup__button">
                Signup
              </div>
            </div>
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