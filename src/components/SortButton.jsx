import React from "react";
import { motion } from "framer-motion";

const SortButton = ({ sort, setSort }) => {
  const handleSort = () => {
    if (sort === "time") {
      return "date";
    } else {
      return "time";
    }
  };

  return (
    <motion.div
      className="bg-indigo-400 mx-10 mt-10 mb-14 h-16 drop-shadow-xl rounded-xl"
      onClick={() => {
        setSort(handleSort());
      }}
      whileTap={{ scale: 0.9 }}
    >
      <h2 className="text-center pt-4 text-white text-xl">
        Sort Runs {sort === "date" ? "📅" : "⏱️"}
      </h2>
    </motion.div>
  );
};

export default SortButton;
