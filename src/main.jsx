import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './Styles/bootstrap.css'
import './Styles/Locomotive.css'
import Home from './Pages/Home.jsx'
import {Route, Routes} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Home />
  </React.StrictMode>,
)
