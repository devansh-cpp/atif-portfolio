"use client";

import React from "react";
import { Peoples } from "./Peoples";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
export function Testimonials() {
  return (


<section id="testimonies" className="pt-20 pb-8 ">

  <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
    <div className="text-center mb-12 space-y-5 md:mb-16">
      <div
        className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg bg-[#202c47] bg-opacity-60 hover:bg-opacity-40"
      >
        Words from Others
      </div>
      <Peoples/>
      <h1 className="text-3xl md:text-5xl font-semibold text-white">Its not just me.</h1>
      <p className="text-lg md:text-2xl text-gray-100">Here what others have to say about me.</p>
    </div>
    

   
  </div>
  <div className="py-2 rounded-md flex flex-col antialiased   items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
</section>

  );
}

const testimonials = [
  {
    quote:
      "Atif innovative mindset and dedication to excellence have been a driving force behind his success. He consistently delivers outstanding results.",
    name: "Shah Alam Qadri",
    title: "Founder of QCL Institutes",
  },
  {
    quote:
      "Atif is a visionary leader with an exceptional ability to identify opportunities and turn them into thriving businesses.",
    name: "Ehtisham Alam",
    title: "Creative Graphic Designer",
  },
  {
    quote:
      "Working with Atif has been an inspiring experience. His problem-solving skills and innovative ideas make him stand out in the industry.",
    name: "Mohammad Kaif",
    title: "DRX",
  },
  {
    quote:
      "Atif mentorship has been transformative. His guidance and expertise have helped countless individuals achieve their goals.",
    name: "Omar Mustafa Khan",
    title: "Owner of FPS",
  },
  {
    quote:
      "Atif is a dynamic entrepreneur with a rare blend of creativity and strategic thinking. His contributions to the startup ecosystem are invaluable.",
    name: "Devansh Mishra",
    title: "Full Stack Developer",
  },
];

