import { useState } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import AddButton from "./components/AddButton";

import SortButton from "./components/SortButton";
import CloseAddButton from "./components/CloseAddButton";
import RunForm from "./components/RunForm";
import RunView from "./components/RunView";

function App() {
  const [layout, setLayout] = useState("home");
  const [sort, setSort] = useState("date");
  const [times, setTimes] = useState([]);
  const [currentRun, setCurrentRun] = useState({});

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
            setLayout={setLayout}
            setCurrentRun={setCurrentRun}
          />
        </div>
      );
  }
}

export default App;
