import React, { createContext, useEffect, useState } from "react";

export const RunListContext = createContext();
const defaultRuns = [];

export const RunContextProvider = (props) => {
  const loading = () => {
    if (localStorage.getItem("runList")) {
      return localStorage.getItem("runList");
    } else {
      return defaultRuns;
    }
  };

  const [runList, setRunList] = useState(loading());

  useEffect(() => {
    localStorage.setItem("runList", runList);
  }, [runList]);

  const addRun = (run) => {
    if (!runList.includes(run)) {
      setRunList([...runList, run]);
    }
  };

  const deleteRun = (run) => {
    setRunList(
      runList.filter((el) => {
        return el !== run;
      })
    );
  };

  const resetRuns = () => {
    setRunList();
    setRunList(defaultRuns);
  };

  return (
    <RunListContext.Provider value={{ runList, deleteRun, addRun, resetRuns }}>
      {props.children}
    </RunListContext.Provider>
  );
};
