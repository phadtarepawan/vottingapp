import React from "react";
import { useNavigate } from "react-router-dom";

const Dashbord = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/");
  };
  const candidates = [
    {
      id: 1,
      name: "candidate1",
      voteCount: 0,
    },
    {
      id: 2,
      name: "candidate2",
      voteCount: 0,
    },
    {
      id: 3,
      name: "candidate3",
      voteCount: 0,
    },
    {
      id: 4,
      name: "candidate4",
      voteCount: 0,
    },
  ];
  return (
    <div>
      <h4>Dashbord for admin</h4>
      <div>
        {candidates.map((candidate) => (
          <ul key={candidate.id}>
            <li>
              {candidate.name}-{candidate.voteCount}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Dashbord;
