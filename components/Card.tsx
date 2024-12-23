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
    <div className="h-screen flex flex-col items-center mt-12 justify-center   ">
        <Image
                      src="/atif2.png"  // Replace with your actual image path
                      alt="Centered Image"
                      width={500}  // Set your desired image width
                      height={300} // Set your desired image height
                      className="object-cover scale-90 p-4  "
                    />
      <TypewriterEffectSmooth words={words} />
      <p className="text-neutral-600 opacity-50 px-4 pb-4 text-cneter dark:text-neutral-200 text-sm sm:text-base  ">
      A visionary entrepreneur, passionate social activist, and dynamic public speaker dedicated to creating impact and shaping the future. From building innovative businesses to driving social change, Atif Abbas inspires individuals and communities to dream big, act boldly, and lead with purpose.
      </p>
        <button onClick={handleScrollToContact} className="px-8 py-4 mb-32 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Connect with Atif
        </button>

    </div>
  );
}
