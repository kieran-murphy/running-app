import React from "react";

const Run = ({ time, setLayout, setCurrentRun }) => {
  return (
    <div
      className="bg-slate-100 mx-10 my-7 h-16 drop-shadow-xl rounded-xl"
      onClick={() => {
        setLayout("view");
        setCurrentRun(time);
      }}
    >
      <h2 className="text-center pt-4 text-slate-800 text-xl">
        ⏱️ {time.displayTime} | 📅 {time.date} |
        {time.night === "am" ? "☀️" : "🌃"}
      </h2>
    </div>
  );
};

export default Run;
