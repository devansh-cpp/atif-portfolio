"use client";
import MasonryGrid from "./ui/MasonaryGrid";

export function MyWorks() {
    return <>
     
     <div className="flex flex-col justify-center items-center mt-8">
    <h1 className="md:text-4xl text-[#d8ab6f]  text-2xl font-bold p-4"> Work Insights </h1>
     <MasonryGrid images={images} />
     </div>
    </>
}

const images = [
  "/mlt.jpg",
  "/inst0.png",
  '/inst1.jpg',
  '/inst2.jpg',
  "/jmlogo.png",
  "/mlt2.jpg",
  "/inst3.jpg",
  "/inst4.jpg",
  "/inst5.jpg",
   
];
