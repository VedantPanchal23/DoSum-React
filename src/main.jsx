import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import EventDemo from './EventDemo.jsx'
import Counter from './Counter.jsx'
import Sumdemo from './Sumdemo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>
  </StrictMode>,
)
