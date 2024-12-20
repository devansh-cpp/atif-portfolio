"use client";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

export function MyWorks() {
    return <>
     
     <div className="flex flex-col justify-center items-center mt-8">
    <h1 className="md:text-4xl text-2xl font-bold p-4"> Work Insights </h1>
     <ParallaxScroll images={images} />
     </div>
    </>
}

const images = [
  "/mlt.jpg",
  "/jmmall.jpg",
  "/mlt2.jpg"
];
