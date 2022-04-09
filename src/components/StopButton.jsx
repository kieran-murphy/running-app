import React from "react";

const StopButton = ({
  setTimerStatus,
  setStartTime,
  setEndTime,
  calculateTime,
  startTime,
  endTime,
  totalTime,
}) => {
  return (
    <div
      onClick={() => {
        setTimerStatus("start");
        setEndTime(Date.now());
        calculateTime();
        console.log(startTime, endTime, totalTime);
      }}
      className="bg-red-400 mx-10 mt-10 h-16 drop-shadow-xl rounded-xl"
    >
      <h2 className="text-center pt-4 text-white text-xl">Stop 🛑</h2>
    </div>
  );
};

export default StopButton;
