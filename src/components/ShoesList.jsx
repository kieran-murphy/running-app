import React from "react";
import { motion } from "framer-motion";
import { BsFillXCircleFill } from "react-icons/bs";

const ShoesList = ({ shoes, deleteShoe }) => {
  return (
    <div className="flex-col pb-40">
      {shoes.map((shoe) => (
        <motion.div
          key={shoe}
          className="bg-slate-100 mx-10 my-7 h-16 drop-shadow-xl rounded-xl"
          whileTap={{ scale: 0.9 }}
        >
          <div className="flex pt-4 justify-between px-6">
            <h2 className="text-center text-xl">{shoe} 👟</h2>
            <BsFillXCircleFill
              className="text-2xl text-red-600"
              onClick={() => {
                deleteShoe(shoe);
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ShoesList;
