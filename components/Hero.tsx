"use client"
import React from 'react';
import Image from 'next/image';
import { FaLongArrowAltRight } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { TypewriterEffectSmoothDemo } from './Card';



function HomePage() {

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="container sm:mx-auto sm:px-32 sm:relative flex justify-center text-[#DAC5A7] sm:h-[720px] overflow-hidden">
        
        <div className="sm:flex hidden">
          
        {/* Left Section */}
        <div className="w-3/5 mt-48 p-8 flex justify-center items-start">
          <div>
            <h1 className="text-7xl text-[#d8ab6f] font-bold mb-2">ATIF ABBAS</h1>
            <h1 className="text-3xl text-[#d8ab6f] opacity-60 font-bold mb-4">A Young Entrepreneur</h1>
            <h1 className="max-w-[400px] text-sm text-[#b7d1e1] opacity-60  mb-4">A visionary entrepreneur, passionate social activist, and dynamic public speaker dedicated to creating impact and shaping the future. From building innovative businesses to driving social change, Atif Abbas inspires individuals and communities to dream big, act boldly, and lead with purpose.</h1>
           
            <button onClick={handleScrollToContact} className="absolute z-30 px-4 py-2 text-[#ce906d] hover:text-black hover:bg-[#ce906d] border-2 border-[#ce906d] rounded-full flex justify-center items-center gap-2">
            Learn More<FaLongArrowAltRight className='text-2xl'/></button>
       
          </div>
        </div>

        {/* Center Section */}
        <div className="w-[370px] bg-gradient-to-r from-[#351903] via-[#6b3f25] to-[#351903] relative flex items-baseline">
          {/* Image with absolute positioning and z-index */}
          <div className="absolute -inset-16 w-[450px] flex justify-center items-baseline z-10">
            <Image
              src="/atif.png"  // Replace with your actual image path
              alt="Centered Image"
              width={1000}  // Set your desired image width
              height={1000} // Set your desired image height
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="w-2/5 mt-14 m p-8 flex justify-center items-start">
          <div>
          
            <h1 className="text-[#b7d1e1] mt-12 ml-8 flex items-center  text-xl font-semibold"> <GiAchievement className="text-3xl hover:animate-bounceHorizontal" />Member of EO</h1>
            <h1 className="text-[#b7d1e1] text-sm ml-16"> Entreprenur Organisation Member</h1>
            <h1 className="text-[#b7d1e1] mt-8 ml-8 flex items-center  text-xl font-semibold"> <GiAchievement className="text-3xl hover:animate-bounceHorizontal" />Public Speaker</h1>
            <h1 className="text-[#b7d1e1] text-sm ml-16"> Mentors 1K+ Audience</h1>
            <h1 className="text-[#b7d1e1] mt-8 ml-8 flex items-center  text-xl font-semibold"> <GiAchievement className="text-3xl hover:animate-bounceHorizontal" />Owned 3+ Businesses</h1>
            <h1 className="text-[#b7d1e1] text-sm ml-16"> Ayodhya,Lucknow,Portugal</h1>
          </div>
        </div>
          {/* Black Vintage Blur Effect */}
          <div className="sm:flex hidden absolute z-20 bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-black via-transparent to-transparent filter"></div>
        </div>

        {/* Phone View */}
        <div className="sm:hidden flex flex-col items-center justify-center mt-0 ">
        
        <TypewriterEffectSmoothDemo/>
        </div>
     </div>
    </>
  );
}

export default HomePage;
