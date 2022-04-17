import React from "react";

const RunView = ({ currentRun }) => {
  return (
    <>
      <div className="bg-slate-100 mx-10 mt-10 h-16 drop-shadow-xl rounded-xl">
        <h2 className="text-center pt-4 text-slate-800 text-xl">
          📅 {currentRun.date}
        </h2>
      </div>
      <div className="bg-slate-100 mx-10 mt-10 h-16 drop-shadow-xl rounded-xl">
        <h2 className="text-center pt-4 text-slate-800 text-xl">
          ⏱️ {currentRun.displayTime}
        </h2>
      </div>

      <div className="bg-slate-100 mx-10 mt-10 h-16 drop-shadow-xl rounded-xl">
        <h2 className="text-center pt-4 text-slate-800 text-xl">
          👟 {currentRun.shoes}
        </h2>
      </div>
      <div className="bg-slate-100 mx-10 mt-10 h-16 drop-shadow-xl rounded-xl">
        <h2 className="text-center pt-4 text-slate-800 text-xl">
          {currentRun.night === "am" ? "☀️ " : "🌃"} {currentRun.localTime}
        </h2>
      </div>

      <div className="bg-slate-100 mx-10 mt-10 h-16 drop-shadow-xl rounded-xl">
        <h2 className="text-center pt-4 text-slate-800 text-xl">
          {currentRun.Conditions} {currentRun.Temperature}°C
        </h2>
      </div>
    </>
  );
};

export default RunView;
