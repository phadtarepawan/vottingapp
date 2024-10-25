import React from "react";
import { Route, Routes } from "react-router-dom";
import VotingPage from "../components/VotingPage";
import Dashbord from "../components/Dashbord";

const FullPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/vote" element={<VotingPage />} />
        <Route path="/dashbord" element={<Dashbord />} />
      </Routes>
    </div>
  );
};

export default FullPage;
