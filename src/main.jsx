import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import VehicleContextProvider from './context/VehiclesContext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <VehicleContextProvider>
    <App />
    </VehicleContextProvider>
  </BrowserRouter>
)
