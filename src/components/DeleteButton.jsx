import React from "react";
import { motion } from "framer-motion";

const DeleteButton = ({ setLayout, deleteRun, currentRun }) => {
  return (
    <motion.div
      onClick={() => {
        //deleteRun(currentRun.realTime)
        setLayout("confirm");
      }}

      className="bg-red-500 mx-10 my-10 h-16 drop-shadow-xl rounded-xl"
      whileTap={{ scale: 0.9 }}
    >
      <h2 className="text-center pt-4 text-white text-xl">Delete 🗑️</h2>
    </motion.div>
  );
};

export default DeleteButton