import React from 'react'
import { motion } from "framer-motion";

const Settings = ({setLayout}) => {
  return (
    <motion.div
      onClick={() => {
        setLayout("settings");
      }}
      className="bg-slate-400 mx-10 mt-10 h-16 drop-shadow-xl rounded-xl"
      whileTap={{ scale: 0.9 }}
    >
      <h2 className="text-center pt-4 text-white text-xl">Settings ⚙️</h2>
    </motion.div>
  )
}

export default Settings