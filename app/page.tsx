"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Contact } from "@/components/Contact";
import Hero from "@/components/Hero";
import { WorldMapDemo } from "@/components/Map";
import { MyTimeline } from "@/components/MyTImeline";
import { MyWorks } from "@/components/MyWork";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonial";
import { LoadingScreen } from "@/components/LoadingScreen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const totalDuration = 1500; // Total loading time in ms (5 seconds)

    // Start fade-out 2 seconds before the loading ends
    const fadeOutTimer = setTimeout(() => {
      setIsLoading(false);
    }, totalDuration);

    return () => {
      clearTimeout(fadeOutTimer);
    };
  }, []);

  return (
    <> 
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(50px)" }}
            transition={{ duration: 2 }} // Fade-out duration
          >
            <LoadingScreen />
          </motion.div>
        )}
      </AnimatePresence>
     
        <Hero />
        <MyTimeline />
        <MyWorks />
        <Team />
        <WorldMapDemo />
        <Testimonials />
        <Contact />
    </>
  );
}
