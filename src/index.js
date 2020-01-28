import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Games from './Games';

ReactDOM.render(
    <BrowserRouter>
        <Games />
    </BrowserRouter>,
    document.getElementById('root')
);