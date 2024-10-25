import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { Usercontext } from "./useContext";

const NavBar = () => {
  const loggedUser = useContext(Usercontext);
  const [isloggedIn, setIsloggedIn] = useState(false);

  const handleToggle = () => {
    if (loggedUser) {
      setIsloggedIn(true);
    }
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    handleToggle();
  }, []);
  console.log("navbar", loggedUser);
  return (
    <div className="flex_container">
      <h3 className="flex_item">Voting App</h3>

      {!isloggedIn && (
        <button className="flex_item2" onClick={handleNavigate}>
          Home
        </button>
      )}
      {isloggedIn && (
        <>
          <h4> Welcome {loggedUser.name}</h4>
          <button className="flex_item2" onClick={handleLogout}>
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default NavBar;
