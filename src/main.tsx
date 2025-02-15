// main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' // Import createBrowserRouter dan RouterProvider
import './index.css'
import App from './App.tsx'
import { routes } from './routes' // Import routes dari file routes

const router = createBrowserRouter(routes); // Gunakan createBrowserRouter untuk membuat router

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} /> {/* Ganti BrowserRouter dengan RouterProvider */}
  </StrictMode>,
)


// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter as Router } from 'react-router'
// import './index.css'
// import App from './App.tsx'


// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <Router>
//       <App />
//     </Router>

//   </StrictMode>,
// )
