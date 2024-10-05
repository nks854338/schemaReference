import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import LoginPage from "./components/LoginPage";
import SigninPage from "./components/SigninPage";
import HomePage from "./components/HomePage"; // Assuming you have a HomePage component

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/home"
          element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />} 
        />
        {/* Catch all other routes and redirect to home */}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
};

export default App;
