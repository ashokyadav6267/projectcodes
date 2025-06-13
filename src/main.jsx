import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import MyProductContext from './context/productContext.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <MyProductContext>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </MyProductContext>

)