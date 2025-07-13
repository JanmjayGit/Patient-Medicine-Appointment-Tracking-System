import React, { useState } from 'react';
import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Login from "./components/Login";
import Home from "./pages/Home";
import RegistrationForm from "./components/RegistrationForm";
import AppointmentBooking from './components/AppointmentBooking';
import Dashboard from './components/Dashboard';
import Prescription from './components/Prescription';

function App() {
  
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      

<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/home' element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
  <Route path='/registration' element={<RegistrationForm />} />
  <Route
    path='/book-appointment'
    element={isLoggedIn ? <AppointmentBooking /> : <Navigate to='/login' />}
  />
  <Route
    path='/dashboard'
    element={isLoggedIn ? <Dashboard /> : <Navigate to='/login' />}
  />
  <Route
    path='/prescription'
    element={isLoggedIn ? <Prescription /> : <Navigate to='/login' />}
  />
</Routes>

    </BrowserRouter>
  );
}

export default App;
