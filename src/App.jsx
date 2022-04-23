import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import AddButton from "./components/AddButton";


import SortButton from "./components/SortButton";
import CloseAddButton from "./components/CloseAddButton";
import RunForm from "./components/RunForm";
import RunView from "./components/RunView";
import _, { map } from 'underscore';

const getDatafromLS = () => {
  const data = localStorage.getItem("runList");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function App() {
  const [layout, setLayout] = useState("home");
  const [sort, setSort] = useState("date");
  const [times, setTimes] = useState(getDatafromLS());
  const [currentRun, setCurrentRun] = useState({});

  useEffect(() => {
    localStorage.setItem("runList", JSON.stringify(times));
  }, [times]);

  useEffect(() => {
    if(sort === "date"){
      var sortedObjs = _.sortBy( times, 'realTime' );
      setTimes(sortedObjs.reverse());
    } else {
      var sortedObjs = _.sortBy( times, 'totalSeconds' );
      setTimes(sortedObjs);
    }
  }, [sort])

  switch (layout) {
    case "add":
      return (
        <div>
          <Navbar />
          <CloseAddButton setLayout={setLayout} />
          <RunForm setLayout={setLayout} setTimes={setTimes} times={times} />
        </div>
      );
    case "view":
      return (
        <div>
          <Navbar />
          <CloseAddButton setLayout={setLayout} />
          <RunView currentRun={currentRun} />
        </div>
      );
    default:
      return (
        <div>
          <Navbar />
          <AddButton setLayout={setLayout} />
          <SortButton sort={sort} setSort={setSort} />
          <Content
            times={times}
            setTimes={setTimes}
            setLayout={setLayout}
            setCurrentRun={setCurrentRun}
          />
        </div>
      );
  }
}

export default App;
