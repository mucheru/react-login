import React,{useState} from 'react';

import './App.css';
import { BrowserRouter, Route, Routes,Switch } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import Login from './components/Login/Login';
//import useToken from './components/useToken';

function setToken(userToken){
  sessionStorage.setItem('token',JSON.stringify(userToken))

}

function getToken(){
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}


function App() {
  const token=getToken();
  if(!token){
    return <Login setToken={setToken}/>
  }
  return (
   <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>

        <Routes>
        <Route path="/preferences" element={<Preferences/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
