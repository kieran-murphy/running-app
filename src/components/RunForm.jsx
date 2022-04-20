import React, { useState, useEffect, useContext } from "react";
import StartButton from "./StartButton";
import StopButton from "./StopButton";
import { useStopwatch, useTime } from "react-timer-hook";
import weather from "../data/weather";
import { RunListContext } from "../context/runContext";
const axios = require("axios").default;

// import { weather } from "weather-js";

const RunForm = ({ setLayout, times, setTimes }) => {
  const { seconds, minutes, isRunning, start, pause } = useStopwatch({
    autoStart: false,
  });

  const {
    minutes: timeMinutes,
    hours: timeHours,
    ampm,
  } = useTime({ format: "12-hour" });

  const [shoe, setShoe] = useState("Nike Pegasus 36");
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [temp, setTemp] = useState(0);
  const [conditions, setConditions] = useState(0);
  const { addRun } = useContext(RunListContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://api.open-meteo.com/v1/forecast?latitude=-28.0167&longitude=153.4000&daily=weathercode,temperature_2m_max&timezone=Australia%2FSydney"
      );
      const res = response.data;

      setConditions(res.daily.weathercode[0]);
      setTemp(res.daily.temperature_2m_max[0]);
    };

    fetchData();
  }, []);

  const handleClick = (run) => {
    addRun(run);
    setLayout("home");
  };

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
              localTime: `${timeHours}:${
                timeMinutes > 9 ? timeMinutes : `0${timeMinutes}`
              } ${ampm}`,
              realTime: d.getTime(),
              date: `${d.getUTCDate()}/${d.getUTCMonth()}/${d.getUTCFullYear()}`,
              shoes: shoe,
              night: ampm,
              Temperature: temp,
              Conditions: weather(conditions),
            },
          ]);

          handleClick(
            JSON.stringify({
              displayTime: `${minutes}:${seconds}`,
              localTime: `${timeHours}:${
                timeMinutes > 9 ? timeMinutes : `0${timeMinutes}`
              } ${ampm}`,
              realTime: d.getTime(),
              date: `${d.getUTCDate()}/${d.getUTCMonth()}/${d.getUTCFullYear()}`,
              shoes: shoe,
              night: ampm,
              Temperature: temp,
              Conditions: weather(conditions),
            })
          );
        }}
      >
        <h2 className="text-center pt-4 text-white text-xl">Submit Run</h2>
      </div>
    </div>
  );
};

export default RunForm;
