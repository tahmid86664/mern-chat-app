import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Login from './components/login/login.component';
import Chat from './components/chat/chat.component';

function App(props) {
    return (
        <div className='app'>
            <Router>
                <Route path='/' exact component={Login} />
                <Route path='/chat' component={Chat} />
            </Router>
        </div>
    );
}

export default App;