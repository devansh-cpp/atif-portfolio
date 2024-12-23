"use client";
import MasonryGrid from "./ui/MasonaryGrid";

export function MyWorks() {
    return <>
     
     <div className="flex flex-col justify-center items-center mt-8">
    <h1 className="md:text-4xl text-white text-2xl font-bold p-4"> Work Insights </h1>
     <MasonryGrid images={images} />
     </div>
    </>
}

const images = [
  "/mlt.jpg",
  "/mlt2.jpg",
  "/jmmall.jpg",
  '/work1.png',
  '/coming1.png',
  "/mlt.jpg",
  "/mlt2.jpg",
  "/jmmall.jpg",
   
];
