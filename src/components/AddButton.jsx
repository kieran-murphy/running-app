import React from "react";

const AddButton = ({ setLayout }) => {
  return (
    <div
      onClick={() => {
        setLayout("add");
      }}
      className="bg-green-300 mx-10 mt-10 h-16 drop-shadow-xl rounded-xl"
    >
      <h2 className="text-center pt-4 text-white text-xl">Add Run</h2>
    </div>
  );
};

export default AddButton;
