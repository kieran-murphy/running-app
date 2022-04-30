import React from 'react'
import { motion } from "framer-motion";

const ShoesButton = ({setLayout}) => {
  return (
    <motion.div
      onClick={() => {
        setLayout("shoeSettings");
      }}
      className="bg-indigo-400 mx-10 mt-10 h-16 drop-shadow-xl rounded-xl"
      whileTap={{ scale: 0.9 }}
    >
      <h2 className="text-center pt-4 text-white text-xl">Shoes 👟</h2>
    </motion.div>
  )
}

export default ShoesButton