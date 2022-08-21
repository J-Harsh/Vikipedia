import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter} from 'react-router-dom';
import './index.css';
import {ResultContextProvider} from './contexts/ResultContextProvider'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render( <ResultContextProvider><BrowserRouter><App/></BrowserRouter></ResultContextProvider>);