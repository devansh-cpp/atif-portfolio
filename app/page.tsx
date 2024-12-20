"use client"

import React, { useState, useEffect } from "react";
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
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Adjust the delay as needed (e.g., 2 seconds)
    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  if (isLoading) {
    // Show loading screen while the content is loading
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800  z-50">
        <LoadingScreen/>
      </div>
    );
  }

  return (
    <>
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
