import React, { useState } from "react";
import StartButton from "./StartButton";
import StopButton from "./StopButton";

const RunForm = () => {
  const [timerStatus, setTimerStatus] = useState("start");
  return (
    <>
      {timerStatus === "start" ? (
        <StartButton setTimerStatus={setTimerStatus} />
      ) : (
        <StopButton setTimerStatus={setTimerStatus} />
      )}
      <div className="bg-slate-300 mx-10 mt-10 h-16 drop-shadow-xl rounded-xl">
        <h2 className="text-center pt-4 text-white text-xl">Shoes 👟</h2>
      </div>
    </>
  );
};

export default RunForm;
