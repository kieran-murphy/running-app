import React, { useState } from "react";
import StartButton from "./StartButton";
import StopButton from "./StopButton";

const RunForm = () => {
  const [timerStatus, setTimerStatus] = useState("start");
  return (
    <div className="flex flex-col">
      {timerStatus === "start" ? (
        <StartButton setTimerStatus={setTimerStatus} />
      ) : (
        <StopButton setTimerStatus={setTimerStatus} />
      )}
      <div className="bg-slate-300 mx-10 mt-10 h-28 drop-shadow-xl rounded-xl flex flex-col">
        <h2 className="self-center pt-4 py-3 text-white text-xl">Shoes 👟</h2>
        <select className="self-center" name="shoes" id="cars" form="carform">
          <option value="np">Nike Pegasus 36</option>
          <option value="ub">Adidas Ultraboost</option>
          
        </select>
      </div>
      <div
      
      className="bg-blue-400 mx-10 mt-44 h-16 drop-shadow-xl rounded-xl"
    >
      <h2 className="text-center pt-4 text-white text-xl">Submit Run</h2>
    </div>
    </div>
  );
};

export default RunForm;
