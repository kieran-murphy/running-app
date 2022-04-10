import { useState } from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import AddButton from "./components/AddButton";

import SortButton from "./components/SortButton";
import CloseAddButton from "./components/CloseAddButton";
import RunForm from "./components/RunForm";

function App() {
  const [layout, setLayout] = useState("home");
  const [sort, setSort] = useState("date");

  switch (layout) {
    case "add":
      return (
        <div>
          <Navbar />
          <CloseAddButton setLayout={setLayout} />
          <RunForm setLayout={setLayout} />
        </div>
      );
    default:
      return (
        <div>
          <Navbar />

          <AddButton setLayout={setLayout} />

          <SortButton sort={sort} setSort={setSort} />
          <Content />
        </div>
      );
  }
}

export default App;
