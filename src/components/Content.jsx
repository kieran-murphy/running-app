import { React, useContext } from "react";
import Run from "./Run";
import { RunListContext } from "../context/runContext";

const Content = ({ times, setLayout, setCurrentRun }) => {
  
  const { runList } = useContext(RunListContext);
  

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
