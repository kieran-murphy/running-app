import { useState, useEffect } from "react";
import _, { map } from 'underscore';
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import AddButton from "./components/AddButton";
import SortButton from "./components/SortButton";
import CloseAddButton from "./components/CloseAddButton";
import DeleteButton from "./components/DeleteButton";
import RunForm from "./components/RunForm";
import RunView from "./components/RunView";
import Settings from "./components/Settings";
import DeleteConfirm from "./components/DeleteConfirm";
import ShoesButton from "./components/ShoesButton";
import ShoesList from "./components/ShoesList";
import ShoeForm from "./components/ShoeForm";


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
  const [shoes, setShoes] = useState(['Nike Pegasus 36', 'Nike React', 'Adidas Ultraboost']);

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

  const deleteRun=(realTime)=>{
    const filteredTimes=times.filter((element,index)=>{
      return element.realTime !== realTime
    })
    setTimes(filteredTimes);
  }

  switch (layout) {
    case "add":
      return (
        <div>
          <Navbar />
          <CloseAddButton setLayout={setLayout} />
          <RunForm setLayout={setLayout} setTimes={setTimes} times={times} shoes={shoes} />
        </div>
      );
    case "view":
      return (
        <div>
          <Navbar />
          <CloseAddButton setLayout={setLayout} />
          <RunView currentRun={currentRun} />
          <DeleteButton setLayout={setLayout} deleteRun={deleteRun} currentRun={currentRun} />
        </div>
      );
    case "confirm":
      return (
        <div>
          <Navbar />
          <CloseAddButton setLayout={setLayout} />
          <DeleteConfirm deleteRun={deleteRun} currentRun={currentRun} setLayout={setLayout}/>
        </div>
      );

    case "settings":
      return (
        <div>
          <Navbar />
          <CloseAddButton setLayout={setLayout} />
          <ShoesButton setLayout={setLayout}/>
        </div>
      );
    case "shoeSettings":
        return (
          <div>
            <Navbar />
            <CloseAddButton setLayout={setLayout} />
            <ShoeForm setShoes={setShoes} shoes={shoes}/>
            <ShoesList shoes={shoes}/>
          </div>
        );
    

    default:
      return (
        <div>
          <Navbar />
          <AddButton setLayout={setLayout} />
          <Settings setLayout={setLayout} />
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
