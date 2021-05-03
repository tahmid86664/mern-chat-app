import React from 'react';
import ReactDom from 'react-dom';

import App from './App';

import reducer, { initialState } from './context/reducer';
import { StateProvider } from './context/StateProvider';

ReactDom.render(
    <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>, 
    document.querySelector('#root')
);