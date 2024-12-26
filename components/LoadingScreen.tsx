import React from "react";
import { motion } from "framer-motion";
export function LoadingScreen() {
  // Animation variants for text
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2.0 } },
  };

  return (
  <>
      <motion.div
        className="flex flex-col justify-center items-center h-screen"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Flipping logo */}
        <div className="card">
          <div className="card-inner">
            {/* Front of the card */}
            <div className="card-front">
              <img src="/logo.png" alt="Logo" style={{ width: "60px" }} />
            </div>

            {/* Back of the card */}
            <div className="card-back">
              <img src="/logo.png" alt="Logo" style={{ width: "60px" }} />
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="flex justify-center items-center px-5">

        <motion.h2
          className="text-xl  relative z-20 mt-8 md:text-4xl lg:text-5xl font-bold text-center text-black dark:text-white font-sans tracking-tight"
          variants={itemVariants}
        >
          Mohammad Atif Abbas
          <div className="relative  flex justify-center items-center w-max">
            <motion.div
              className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-[#d8ab6f] via-neutral-500 to-orange-200"
              variants={itemVariants}
            >
              <span>AED of JM Group | Co-Founder of MLT</span>
            </motion.div>
          </div>
        </motion.h2>
        </div>
      </motion.div>
  </>
  );
}
