import React from 'react'
import { motion } from "framer-motion";

const DeleteConfirm = ({setLayout, deleteRun, currentRun}) => {
  return (
    <>
    
    <div
        className=" mx-10 mt-20 h-16 rounded-xl"
      >
        <h2 className="text-center pt-4 text-slate-800 text-3xl">Are you sure?</h2>
      
    </div>
    <motion.div
      onClick={() => {
        deleteRun(currentRun.realTime)
        setLayout("home");
      }}

      className="bg-red-500 mx-10 mt-40 h-16 drop-shadow-xl rounded-xl"
      whileTap={{ scale: 0.9 }}
    >
      <h2 className="text-center pt-4 text-white text-xl">Delete 🗑️</h2>
    </motion.div>
    </>
  )
}

export default DeleteConfirm