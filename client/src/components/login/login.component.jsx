import React, { useState } from 'react';

import './login.style.css';

import LoginHeader from '../login-header/login-header.component';
import LoginFooter from '../login-footer/login-footer.component';

const Login = () => {
  const [formActive, setFormActive] = useState('signin');

    return (
        <div className="login">
            <LoginHeader setFormActive={setFormActive} />
            <LoginFooter formActive={formActive} />
        </div>
    );
}

export default Login;