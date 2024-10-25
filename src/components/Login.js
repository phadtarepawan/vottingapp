import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
const adminDetail = {
  name: "admin",
  password: "admin12345",
};
const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log("userInfo", userInfo);
    const GetLocaluser = JSON.parse(localStorage.getItem("user"));
    console.log("userInfo", GetLocaluser);

    const sessionLoggedUser = JSON.stringify(GetLocaluser);
    const sessionLoggedAdmin = JSON.stringify(adminDetail);

    if (
      GetLocaluser.name === userInfo.name &&
      GetLocaluser.password === userInfo.password
    ) {
      navigate("secured/vote");
      sessionStorage.setItem("loggedUser", sessionLoggedUser);
    } else if (adminDetail.name && adminDetail.password) {
      navigate("secured/dashbord");
      sessionStorage.setItem("loggedUser", sessionLoggedAdmin);
    } else {
      alert("Username or passowrd may wrong!");
      setUserInfo({
        name: "",
        password: "",
      });
      navigate("/");
    }
  };
  const handleNavigate = () => {
    navigate("signin");
  };
  return (
    <div className="container">
      <form className="input_container" onSubmit={handleClick}>
        {/* <label> Usetr Name:</label> */}
        <span className="loginicon">🔒</span>
        <input
          type="text"
          name="name"
          placeholder="Username"
          value={userInfo.name}
          onChange={handleChange}
        />
        {/* <label>Password:</label> */}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userInfo.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>

        <div className="signin_container">
          <p>If not signin, please</p>
          <button className="signin_btn" type="button" onClick={handleNavigate}>
            Sign In
          </button>
        </div>
      </form>

      <div></div>
    </div>
  );
};

export default Login;
