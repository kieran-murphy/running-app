import React from "react";

const StartButton = ({
  setTimerStatus,
  setStartTime,
  startTime,
  endTime,
  totalTime,
}) => {
  return (
    <div
      onClick={() => {
        setTimerStatus("stop");
        setStartTime(Date.now());
        console.log(startTime, endTime, totalTime);
      }}
      className="bg-green-300 mx-10 mt-10 h-16 drop-shadow-xl rounded-xl"
    >
      <h2 className="text-center pt-4 text-white text-xl">Start ▶️</h2>
    </div>
  );
};

export default StartButton;
