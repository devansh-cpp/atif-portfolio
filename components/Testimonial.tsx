"use client";

import React from "react";
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
      <h1 className="text-3xl md:text-5xl font-semibold text-[#d8ab6f] ">Its not just me.</h1>
      <p className="text-lg md:text-2xl text-gray-100">Here what others have to say about me.</p>
    </div>
    

   
  </div>
  <div className="py-2 rounded-md flex flex-col antialiased   items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
</section>

  );
}

const testimonials = [
  {
    quote:
      "Atif innovative mindset and dedication to excellence have been a driving force behind his success. He consistently delivers outstanding results.",
    name: "Dr. Shah Alam Qadri",
    title: "Founder of QCL Institutes",
    people : './Alam.jpg'
  },
  {
    quote:
      "Atif is a visionary leader with an exceptional ability to identify opportunities and turn them into thriving businesses.",
    name: "Ehtisham Alam",
    title: "Creative Graphic Designer",
    people : './Ehtisham.jpg'
  },
  {
    quote:
      "Working with Atif has been an inspiring experience. His problem-solving skills and innovative ideas make him stand out in the industry.",
    name: "DRX Mohammad Kaif",
    title: "",
    people : './Kaif.jpg'
  },
  {
    quote:  "Atif's dedication and creativity are truly commendable. His ability to tackle challenges with innovative solutions is unmatched.",
    name: "Dr Shadab Ameerullah ",  
    title: "MBBS ( University of Ulyanvosk Russia)",  
    people: './Shadab.jpg'  

  }
  ,
  {
    quote:
      "Atif mentorship has been transformative. His guidance and expertise have helped countless individuals achieve their goals.",
    name: "Omar Mustafa Khan",
    title: "Owner of FPS",
    people : './Omar.jpg'
  },
  {
    quote:
      "Atif is a dynamic entrepreneur with a rare blend of creativity and strategic thinking. His contributions to the startup ecosystem are invaluable.",
    name: "Devansh Mishra",
    title: "Full Stack Developer",
    people : './devx.jpg'
  },
];

