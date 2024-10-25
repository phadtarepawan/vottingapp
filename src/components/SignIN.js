import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIN = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: "",
    password: "",
    role: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const UserSaved = JSON.stringify(userInfo);
    localStorage.setItem("user", UserSaved);
    alert("User created sucesfully");
    navigate("/");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={userInfo.password}
          onChange={handleChange}
        />
        <input
          type="text"
          name="role"
          value={userInfo.role}
          onChange={handleChange}
        />
        <button type="submit">Sig In</button>
      </form>
    </div>
  );
};

export default SignIN;
