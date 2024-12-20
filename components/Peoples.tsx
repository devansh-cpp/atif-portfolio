"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: " Shah Alam Qadri",
    designation: "Founder of QCL Institute",
    image: "/alam.jpg", // Replace with actual image path
  },
  {
    id: 2,
    name: "Ehtisham Alam",
    designation: "Creative Graphic Designer",
    image: "/ehtisham.jpg", // Replace with actual image path
  },
  {
    id: 3,
    name: "Mohammad Kaif",
    designation: "DRX",
    image: "/kaif.jpg", // Replace with actual image path
  },
  {
    id: 4,
    name: "Omar Mustafa Khan",
    designation: "Owner of FPS",
    image: "/omar.jpg", // Replace with actual image path
  },
  {
    id: 5,
    name: "Dr Shadab ",
    designation: "MBBS",
    image: "/shadab.jpg", // Replace with actual image path
  },
  {
    id: 6,
    name: "Devansh Mishra",
    designation: "Full Stack Developer",
    image: "/devx.png", // Replace with actual image path
  },
];

export function Peoples() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
