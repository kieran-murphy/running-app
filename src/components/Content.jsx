import { React, useState, useEffect } from "react";
import Run from "./Run";


const Content = ({ setLayout, setCurrentRun, times, setTimes }) => {
  return (
    <div>
      <div className="flex-col pb-40">
        {times.map((time) => (
          <Run
            key={time.realTime}
            time={time}
            setLayout={setLayout}
            setCurrentRun={setCurrentRun}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
