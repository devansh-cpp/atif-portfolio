"use client";
import Image from "next/image";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {

    const handleScrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      };

  const words = [
    
    {
      text: "Mohammad Atif Abbas",
      className: "text-2xl text-teal-600 text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center mt-24 justify-center h-[40rem]  ">
        <Image
                      src="/atif2.png"  // Replace with your actual image path
                      alt="Centered Image"
                      width={750}  // Set your desired image width
                      height={500} // Set your desired image height
                      className="object-cover p-4  "
                    />
      <p className="text-neutral-600 dark:text-neutral-200 text-sm sm:text-base  ">
        A visionary entrepreneur, passionate social activis
      </p>
      <TypewriterEffectSmooth words={words} />
        <button onClick={handleScrollToContact} className="px-8 py-4 mb-16 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Connect with Atif
        </button>
    </div>
  );
}
