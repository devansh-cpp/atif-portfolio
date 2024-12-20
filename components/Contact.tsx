"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { FaInstagram,  FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";


export function Contact() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        id="contact"
        className="mt-8  bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center sm:text-4xl text-2xl font-bold  tracking-tight text-transparent md:text-7xl"
      >
        Connect with <br /> Mohammad Atif Abbas
        <div className="flex justify-center items-center mt-6  gap-6">
      {/* Instagram Icon */}
<a
  href="https://www.instagram.com/official_atif_8005/profilecard/?igsh=MWQ4bnlhc3NibHQyeA=="
  className="text-cyan-500 hover:text-cyan-300 text-3xl hover:scale-110 transition duration-300"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaInstagram />
</a>

{/* X (Twitter) Icon */}
<a
  href="https://x.com/MohammadAtif001?t=josDktTQBVcN28AUMlBo6A&s=08"
  className="text-cyan-500 hover:text-cyan-300 text-3xl hover:scale-110 transition duration-300"
  target="_blank"
  rel="noopener noreferrer"
>
<BsTwitterX />

</a>

{/* Facebook Icon */}
<a
  href="https://www.facebook.com/nawabmohammad.atif?mibextid=ZbWKwL"
  className="text-cyan-500 hover:text-blue-300 text-3xl hover:scale-110 transition duration-300"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaFacebook />
</a>

{/* LinkedIn Icon */}
<a
  href="https://www.linkedin.com/in/mohammad-atif-abbas-4a879b2ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  className="text-cyan-500 hover:text-cyan-300 text-3xl hover:scale-110 transition duration-300"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaLinkedin />
</a>

    </div>
      </motion.h1>
    </LampContainer>
  );
}
