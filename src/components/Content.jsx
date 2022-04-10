import React from "react";
import Run from "./Run";

const Content = ({ times }) => {
  return (
    <div>
      <div className="flex-col">
        {times.map((time) => (
          <Run key={time.realTime} time={time} />
        ))}
      </div>
    </div>
  );
};

export default Content;
