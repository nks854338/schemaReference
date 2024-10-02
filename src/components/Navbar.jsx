import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <NavLink to="/home">Home</NavLink>
        </div>
        <div className="auth">
          {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <>
              <NavLink to="/">Sign Up</NavLink>
              <NavLink to="/login">Login</NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
