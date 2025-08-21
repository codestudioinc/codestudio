"use client";

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export const Footer = () => {
 return (
  <footer className="relative overflow-hidden">
   {/* Decorative Glow */}
   <div
    className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-400/30 blur-3xl"
    style={{
     maskImage: "radial-gradient(50% 50% at bottom center, black, transparent)",
     WebkitMaskImage:
      "radial-gradient(50% 50% at bottom center, black, transparent)",
    }}
   ></div>

   {/* Footer Content */}
   <div className="container relative z-10">
    <div className="border-t border-white/10 py-8 flex flex-col md:flex-row md:justify-between items-center gap-6">
     {/* Left Side */}
     <div className="text-white/50 text-sm hover:text-white/80 transition-colors duration-300">
      &copy; {new Date().getFullYear()} CodeStudio. All rights reserved.
     </div>

     {/* Right Side - Email with Typing Animation */}
     <nav className="flex items-center gap-6 text-sm">
      <a
       href="https://mail.google.com/mail/?view=cm&fs=1&to=codestudio.service@gmail.com&su=Hello%20CodeStudio&body=I%20would%20like%20to%20connect%20with%20you."
       target="_blank"
       rel="noopener noreferrer"
       className="inline-flex items-center gap-2 text-white/60 hover:text-emerald-300 transition-all duration-300 group"
      >
       <FaEnvelope className="text-xl text-red-400 group-hover:scale-110 transition-transform duration-300" />

       {/* Typing effect for email */}
       <TypeAnimation
        sequence={[
         "codestudio.service@gmail.com", // type email
         2000, // wait 2s
         "", // delete
         500,
         "Let's build something great 🚀", // new text
         2000,
         "",
         500,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="font-medium"
       />

       <ArrowUpRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
     </nav>
    </div>
   </div>
  </footer>
 );
};
