import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CategoryProvider } from './context/ProductsContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CategoryProvider>
      <App />
    </CategoryProvider>
  </BrowserRouter>
)
