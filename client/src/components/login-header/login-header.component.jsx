import React from 'react';

import './login-header.style.css';

const LoginHeader = ({ setFormActive }) => {
  return (
    <div className="login__header">
      <div onClick={() => setFormActive('signin')} className="login__header__button">
        Signin
      </div>
      <div onClick={() => setFormActive('signup')} className="login__header__button signup__button">
        Signup
      </div>
    </div>
  );
}


export default LoginHeader;