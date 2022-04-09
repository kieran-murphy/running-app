import React from "react";

const SortButton = ({ sort, setSort }) => {
  const handleSort = () => {
    if (sort === "time") {
      return "date";
    } else {
      return "time";
    }
  };

  return (
    <div
      className="bg-indigo-400 mx-10 mt-10 mb-14 h-16 drop-shadow-xl rounded-xl"
      onClick={() => {
        setSort(handleSort());
      }}
    >
      <h2 className="text-center pt-4 text-white text-xl">
        Sort Runs {sort === "date" ? "📅" : "⏱️"}
      </h2>
    </div>
  );
};

export default SortButton;
