import React from "react";

const StartButton = ({ start }) => {
  return (
    <div
      onClick={() => {
        start();
      }}
      className="bg-green-400 mx-10 mt-10 h-16 drop-shadow-xl rounded-xl"
    >
      <h2 className="text-center pt-4 text-white text-xl">Start ▶️</h2>
    </div>
  );
};

export default StartButton;
