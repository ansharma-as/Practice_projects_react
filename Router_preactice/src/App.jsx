import React, { Suspense } from 'react';
import {BrowserRouter , Routes , Route , useNavigate } from "react-router-dom";
const Landing = React.lazy(()=> import("./components/Landing"));
const Dashboard = React.lazy( () => import("./components/Dashboard"));

import './App.css'

function App() {

  return (
    <>
    
      <BrowserRouter>
      <Appbar/>
      <Routes>
        <Route path="/" element={ <Suspense fallback={"loading..."}>  <Landing /> </Suspense>} />
        <Route path="/Dashboard" element={ <Suspense fallback={"loading..."}> <Dashboard />  </Suspense>} />
      </Routes>
      </BrowserRouter>
     
    </>
  )
}

function Appbar(){
  const navigate =useNavigate();

  return (
    <div>
      <button onClick={()=> {
        navigate('/Dashboard')
      }}>Dashboard</button>
      <button onClick={() => {
        navigate('/')
      }}>Landing </button>
    </div>
  )
}

export default App
