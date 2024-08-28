
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import NavBar from './components/Shared/NavBar'
import { Routes,Route } from 'react-router-dom/'
import Login from "./components/Login/Login.jsx";
import SignUp from './components/SignUp/SignUp.jsx';
import Home from './components/Home/Home.jsx';
import Jobs from './components/LatestJob/Jobs';
import Browse from './components/Browse/Browse';
// import { Toaster } from './components/ui/sonner.tsx';

function App() {
  // const app=createBrowserRouter([
  //   {
  //     path:'/',
  //     element:<Home/>
  //   },
  //   {
  //     path:'/login',
  //     element:<Login/>
  //   },
  //   {
  //     path:'/signup',
  //     element:<SignUp/>
  //   },
  //   {
  //     path:'/',
  //     element:<Home/>
  //   },
  //   {
  //     path:'/',
  //     element:<Home/>
  //   }
  // ])
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" Component={Home}/>
      <Route path="/login" Component={Login}/>
      <Route path="/signup" Component={SignUp}/>
      <Route path="/jobs" Component={Jobs}/>
      <Route path="/browse" Component={Browse}/>
    </Routes>
    {/* <Toaster/> */}
    
    {/* <RouterProvider router={app}/> */}
    
    </>
  )
}

export default App
