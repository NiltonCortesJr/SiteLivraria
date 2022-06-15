import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {PesquisaProvider} from "./context/PesquisaContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PesquisaProvider>
      <App />
    </PesquisaProvider>
  </React.StrictMode>
)
