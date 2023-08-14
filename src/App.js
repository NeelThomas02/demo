import React from 'react';
import './App.css';
import {  BrowserRouter, Route,Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard'; // Import your Dashboard component

function App() {
  return (
    <BrowserRouter>
    <Routes>
        {/* Set up routes */}
        <Route path="/" exact element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
