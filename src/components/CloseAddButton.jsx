import React from "react";

const CloseAddButton = ({ setLayout }) => {
  return (
    <div
      onClick={() => {
        setLayout("home");
      }}
      className="bg-orange-400 mx-10 mt-10 h-16 drop-shadow-xl rounded-xl"
    >
      <h2 className="text-center pt-4 text-white text-xl">Back</h2>
    </div>
  );
};

export default CloseAddButton;
