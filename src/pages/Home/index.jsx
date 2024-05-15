import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [value, setValue] = useState(""); // Fixed initialization of useState
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    if (value) {
      // Added a check to ensure value is not empty
      navigate(`/room/${value}`);
    }
  }, [navigate, value]);

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)} // Fixed the arrow function
        type="text"
        placeholder="Enter Room Code"
      />
      <button onClick={handleJoinRoom}>Join</button>
    </div>
  );
};

export default HomePage;
