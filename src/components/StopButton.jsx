import React from "react";

const StopButton = ({ pause }) => {
  return (
    <div
      onClick={() => {
        pause();
      }}
      className="bg-red-400 mx-10 mt-10 h-16 drop-shadow-xl rounded-xl"
    >
      <h2 className="text-center pt-4 text-white text-xl">Stop 🛑</h2>
    </div>
  );
};

export default StopButton;
