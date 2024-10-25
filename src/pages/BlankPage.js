import React from "react";
import Login from "../components/Login";
import SignIN from "../components/SignIN";
import { Route, Routes } from "react-router-dom";

const BlankPage = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="signin" element={<SignIN />} />
      </Routes>
    </div>
  );
};

export default BlankPage;
