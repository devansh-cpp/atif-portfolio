"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);


// Scroll to Projects section
const handleScrollToTeam = () => {
  const projectsSection = document.getElementById("team");
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  }
};
const handleScrollToJourney = () => {
  const projectsSection = document.getElementById("journey");
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  }
};
const handleScrollToBussiness = () => {
  const projectsSection = document.getElementById("bussiness");
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  }
};
const handleScrollToContact = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};


  return (
    <>
    <div className='sm:block hidden container z-10 absolute mt-10 mx-auto px-32'>

     <div className=' text-[#d8ab6f]  absolute flex justify-center items-center '>
        <Image
        src="/logo.png" 
        alt="Centered Image"
        width={60}
        height={75}
        className="object-cover"
        />
        <div className='flex justify-center ml-8 gap-10 items-center font-bold '>

        <button onClick={handleScrollToBussiness}>Bussiness</button>
        <button onClick={handleScrollToJourney}>Journey</button>
        <button onClick={handleScrollToTeam}>Team</button>
        <button onClick={handleScrollToContact}>Contact</button>
        </div>
     
     </div>
    </div>
    <div className="bg-black  z-50 w-[100vw] h-[50px] sm:hidden fixed top-0 left-0 mb-14 flex justify-between items-center p-2">
        {/* Logo */}
        <Link href={'/'}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={50} // Adjusted for better responsiveness
            height={50} // Adjusted for better responsiveness
          />
        </Link>

        {/* Hamburger icon */}
        <div onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer">
          <FaBars size={24}  className='text-[#d8ab6f]'/>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-16 right-5   backdrop-blur-lg  shadow-md rounded-lg p-3 space-y-2 w-[150px]">
            <button className="block z-20 px-4 py-2 text-[#d8ab6f] hover:bg-gray-200 rounded">
              Home
            </button>
            <Link href={'./'}
              onClick={handleScrollToTeam}
              className="block px-4 py-2 text-[#d8ab6f] hover:bg-gray-200 rounded"
            >
              Teams
            </Link>
            <button onClick={handleScrollToContact} className="block px-4 py-2 text-[#d8ab6f] hover:bg-gray-200 rounded">
              Contact
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar