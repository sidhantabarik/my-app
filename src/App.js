
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login/Login.jsx';
import Home from './Home/Home.jsx';
import SignUp from './SignUp/SignUp.jsx';

function App() {
  return (
    <Routes>
      
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
  );
}

export default App;
