
import React, { createContext, useEffect, useState } from "react";

export const RunListContext = createContext();
const defaultRuns = [];

export const RunContextProvider = (props) => {
  const loading = () => {
    if (localStorage.getItem("runList")) {
      if (localStorage.getItem("runList") === "") {
        return defaultRuns;
      } else {
        const firstArray = localStorage.getItem("runList").split('@#');
        const secondArray = firstArray.filter(word => word !== "")
        return secondArray;
        }
        
      
    } else {
      return defaultRuns;
    }
  };


  //const [times, setTimes] = useState(localStorage.getItem("runList").split(',').map((obj) => JSON.parse(obj))); 
// const stringified = times.map((obj) => JSON.stringify(obj));
// localStorage.setItem("runList", stringified);


// const parsed = localStorage.getItem("runList").split('@#');
// const parsedOne = parsed.map((text) => text.slice(0, -1));
//         console.log(parsedOne); 
//         const parsedTwo = parsedOne.map((obj) => {
//           if (obj) {
//             JSON.parse(obj)
//           }
          
//         });


  const [runList, setRunList] = useState(loading());

  useEffect(() => {
    const writingArray = runList.map((obj) => obj + '@#');
    localStorage.setItem("runList", writingArray);
  }, [runList]);

  const addRun = (run) => {
    if (!runList.includes(run)) {
      setRunList([...runList, run]);
    }
  };

  // const deleteRun = (run) => {
  //   setRunList(
  //     runList.filter((el) => {
  //       return el !== run;
  //     })
  //   );
  // };

  return (
    <RunListContext.Provider value={{ runList, addRun }}>
      {props.children}
    </RunListContext.Provider>
  );
};
