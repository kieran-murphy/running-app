import { React, useState, useEffect } from "react";
import Run from "./Run";


const Content = ({ setLayout, setCurrentRun, times, setTimes }) => {
  
  
  
  // console.log(typeof(runList))
  // console.log(Array.isArray(runList))
  // console.log(runList)
  
  

  // useEffect(() => {
  //   setTims(runList.map((obj) => {
  //     console.log(obj)
  //     JSON.parse(obj);
  // }))
  // }, [runList]);
  
  

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
