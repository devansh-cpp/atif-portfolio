import React from "react";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { motion } from "framer-motion"; // Import Framer Motion

export function LoadingScreen() {
  // Define animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }, // Stagger animations for child elements
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden with a downward offset
    visible: { opacity: 1, y: 0, transition: { duration: 1.0 } }, // Animate to visible
  };

  return (
    <BackgroundBeamsWithCollision>
      {/* Animated container */}
      <motion.div
        className="flex flex-col justify-center items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated logo */}
        <motion.div variants={itemVariants}>
          <Image
            src="/logo.png"
            alt="Centered Image"
            width={60}
            height={75}
            className="object-cover"
          />
        </motion.div>

        {/* Animated text */}
        <motion.h2
          className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight"
          variants={itemVariants}
        >
          Mohammad Atif Abbas
          <div className="relative mx-auto flex justify-center items-center w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <motion.div
              className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]"
              variants={itemVariants}
            >
              <span>AED of JM Group | Entrepreneur</span>
            </motion.div>
          </div>
        </motion.h2>
      </motion.div>
    </BackgroundBeamsWithCollision>
  );
}
