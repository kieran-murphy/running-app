import { React, useContext, useState, useEffect } from "react";
import Run from "./Run";
import { RunListContext } from "../context/runContext";

const Content = ({ setLayout, setCurrentRun }) => {
  
  const { runList } = useContext(RunListContext);
  const [tims, setTims] = useState([])
  // console.log(typeof(runList))
  // console.log(Array.isArray(runList))
  // console.log(runList)
  
  

  useEffect(() => {
    setTims(runList.map((obj) => {
      console.log(obj)
      JSON.parse(obj);
  }))
  }, [runList]);
  
  

  return (
    <div>
      <div className="flex-col pb-40">
        {tims.map((time) => (
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
