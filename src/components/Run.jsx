import React from "react";
import { motion } from "framer-motion";

const Run = ({ time, setLayout, setCurrentRun }) => {
  return (
    <motion.div
      className="bg-slate-100 mx-10 my-7 h-16 drop-shadow-xl rounded-xl"
      onClick={() => {
        setLayout("view");
        setCurrentRun(time);
      }}
      whileTap={{ scale: 0.9 }}
    >
      <h2 className="text-center pt-4 text-slate-800 text-xl">
        ⏱️ {time.displayTime} | 📅 {time.date} |
        {time.night === "am" ? "☀️" : "🌃"}
      </h2>
    </motion.div>
  );
};

export default Run;
