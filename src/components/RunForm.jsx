import React, { useState } from "react";
import StartButton from "./StartButton";
import StopButton from "./StopButton";
import { useTimer } from "react-timer-hook";

const RunForm = () => {
  // const second = 1000;
  // const minute = second * 60;
  // const hour = minute * 60;
  // const day = hour * 24;
  // const year = day * 365;

  // // Divide Time with a year
  // const d = new Date();
  // let minutes = Math.round(d.getTime() / minute);

  const [timerStatus, setTimerStatus] = useState("start");
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  const calculateTime = () => {
    setTotalTime((endTime - startTime) / 1000);
  };

  return (
    <div className="flex flex-col">
      {timerStatus === "start" ? (
        <StartButton
          setTimerStatus={setTimerStatus}
          setStartTime={setStartTime}
          startTime={startTime}
          endTime={endTime}
          totalTime={totalTime}
        />
      ) : (
        <StopButton
          setTimerStatus={setTimerStatus}
          setStartTime={setStartTime}
          setEndTime={setEndTime}
          calculateTime={calculateTime}
          startTime={startTime}
          endTime={endTime}
          totalTime={totalTime}
        />
      )}
      <div className="bg-slate-300 mx-10 mt-10 h-28 drop-shadow-xl rounded-xl flex flex-col">
        <h2 className="self-center pt-4 py-3 text-white text-xl">Shoes 👟</h2>
        <select className="self-center" name="shoes" id="cars" form="carform">
          <option value="np">Nike Pegasus 36</option>
          <option value="ub">Adidas Ultraboost</option>
        </select>
      </div>
      <h2 className="text-xl text-center mt-10">{totalTime}</h2>
      <div className="bg-blue-400 mx-10 mt-40 h-16 drop-shadow-xl rounded-xl">
        <h2 className="text-center pt-4 text-white text-xl">Submit Run</h2>
      </div>
    </div>
  );
};

export default RunForm;
