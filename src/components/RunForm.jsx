import React, { useState } from "react";
import StartButton from "./StartButton";
import StopButton from "./StopButton";
import { useStopwatch, useTime } from "react-timer-hook";

const RunForm = ({ setLayout, times, setTimes }) => {
  const { seconds, minutes, isRunning, start, pause, reset } = useStopwatch({
    autoStart: false,
  });

  const { ampm } = useTime({ format: "12-hour" });
  const [shoe, setShoe] = useState("Nike Pegasus 36");
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  const calculateTime = () => {
    setTotalTime((endTime - startTime) / 1000);
  };

  function handleInputChange(event) {
    setShoe(event.target.value);
  }

  return (
    <div className="flex flex-col">
      {!isRunning ? (
        <StartButton
          start={start}
          setStartTime={setStartTime}
          startTime={startTime}
          endTime={endTime}
          totalTime={totalTime}
        />
      ) : (
        <StopButton
          pause={pause}
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
        <select
          className="self-center"
          name="shoes"
          id="shoes"
          value={shoe}
          form="carform"
          onChange={handleInputChange}
        >
          <option value="Nike Pegasus 36">Nike Pegasus 36</option>
          <option value="Adidas Ultraboost">Adidas Ultraboost</option>
        </select>
      </div>
      <h2 className="text-xl text-center mt-10">
        {minutes}:{seconds}
      </h2>
      <div
        className="bg-blue-400 mx-10 mt-40 h-16 drop-shadow-xl rounded-xl"
        onClick={() => {
          const d = new Date();
          setTimes((prevArray) => [
            ...prevArray,
            {
              displayTime: `${minutes}:${seconds}`,
              realTime: d.getTime(),
              date: `${d.getUTCDate()}/${d.getUTCMonth()}/${d.getUTCFullYear()}`,
              shoes: shoe,
              night: ampm,
            },
          ]);

          setLayout("home");
        }}
      >
        <h2 className="text-center pt-4 text-white text-xl">Submit Run</h2>
      </div>
    </div>
  );
};

export default RunForm;
