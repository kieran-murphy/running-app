import React from "react";
import ReactDom from "react-dom";

const AddOverlay = ({ open, onClose }) => {
  if (!open) {
    return null;
  }
  return ReactDom.createPortal(
    <>
      <div id="overlay" onClick={onClose} />
      {/* <div className="bg-slate-200 mx-10 my-12 h-[600px] drop-shadow-xl rounded-xl flex-col overflow-auto z-50"> */}
      <div id="modal">
        <div>
          <h2>Close </h2>
        </div>
      </div>
    </>,
    document.getElementById("addOverlay")
  );
};

export default AddOverlay;
