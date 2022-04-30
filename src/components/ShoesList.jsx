import React from 'react'
import { motion } from "framer-motion";

const ShoesList = ({shoes}) => {
  return (
    <div className="flex-col pb-40">
        {shoes.map((shoe) => (
          <motion.div
          key={shoe}
          className="bg-slate-100 mx-10 my-7 h-16 drop-shadow-xl rounded-xl"
          whileTap={{ scale: 0.9 }}
        >
          <h2 className="text-center pt-4 text-xl">{shoe} 👟</h2>
        </motion.div>
        ))}
      </div>
  )
}

export default ShoesList