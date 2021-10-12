import React from 'react';
import ReactDOM from 'react-dom';
import CounterContextProvider from "./context/counterProvider";
import App from './App';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <CounterContextProvider>
            <App/>
        </CounterContextProvider>
    </React.StrictMode>,
    document.getElementById( 'root' )
);

