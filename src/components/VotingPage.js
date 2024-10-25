import React, { useState, useEffect } from "react";
import "./voting.css";

const VotingPage = () => {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [candidates, setCandidates] = useState([
    { id: 1, name: "candidate1", voteCount: 0 },
    { id: 2, name: "candidate2", voteCount: 0 },
    { id: 3, name: "candidate3", voteCount: 0 },
    { id: 4, name: "candidate4", voteCount: 0 },
  ]);

  useEffect(() => {
    const storedVotes = JSON.parse(localStorage.getItem("votes"));
    if (storedVotes) {
      setCandidates(storedVotes);
    }
  }, []);

  const handleCheckBox = (id) => {
    setSelectedCandidate(id);
  };

  const handleVote = () => {
    if (!selectedCandidate) {
      alert("Please choose a candidate to vote for.");
      return;
    }

    const updatedCandidates = candidates.map((candidate) =>
      candidate.id === selectedCandidate
        ? { ...candidate, voteCount: candidate.voteCount + 1 }
        : candidate
    );

    setCandidates(updatedCandidates);
    localStorage.setItem("votes", JSON.stringify(updatedCandidates));
    alert("Your vote has been recorded.");
  };

  return (
    <div className="main_container">
      <div className="list_container">
        <h3>Voting list</h3>
        {candidates.map((candidate) => (
          <ul key={candidate.id}>
            <li className="list_item">
              <span>
                <input
                  type="radio"
                  name="vote"
                  onClick={() => handleCheckBox(candidate.id)}
                />
              </span>
              <span className="list_candidate">{candidate.name}</span>
              <span className="vote_count">Votes: {candidate.voteCount}</span>
            </li>
          </ul>
        ))}
        <button onClick={handleVote}>Vote</button>
      </div>
    </div>
  );
};

export default VotingPage;
