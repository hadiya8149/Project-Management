import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter, RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App.jsx';
import Navbar from './components/header.jsx';
import Login from './pages/auth/login.jsx';
import ErrorPage from "./pages/error-page.jsx";
import Signup from './pages/auth/signup.jsx';
import HomePage from './pages/home/home.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: < Navbar />,
    children:[
      {
        path:'/',
        element:<App />
      }
    ],
    errorElement: <ErrorPage />,
  },
  {
   
    path:'/login',
    element:<Login />,
    errorElement:<ErrorPage/>
  },
  {path:'/signup',
    element:<Signup/>
  },
  {
    path:'/home',
    element:<HomePage/>
  }

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
