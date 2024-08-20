
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import NavBar from './components/Shared/NavBar'
// import { Routes,Route } from 'react-router-dom/'
import Login from "./components/Login/Login";
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';

function App() {
  const app=createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<SignUp/>
    },
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/',
      element:<Home/>
    }
  ])
  return (
    <>
    <RouterProvider router={app}/>
    <NavBar/>
    </>
  )
}

export default App
