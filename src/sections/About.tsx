"use client";

import { Card } from "@/components/Card";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export const AboutSection = () => {
 return (
  <div
   id="about"
   className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black"
  >
   <div className="container">
    {/* Section Header with Typing Effect */}
    <div className="text-center max-w-2xl mx-auto">
     <p className="text-indigo-500 font-semibold tracking-wide uppercase">
      About CodeStudio
     </p>

     {/* Typing animation for title */}
     <TypeAnimation
      sequence={[
       "Crafting Websites That Inspire",
       2000,
       "Crafting Experiences That Convert",
       2000,
       "Crafting Designs That Shine",
       2000,
      ]}
      speed={50}
      repeat={Infinity}
      wrapper="h2"
      className="text-3xl md:text-4xl font-bold mt-2 font-inherit"
     />

     <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
      We don’t just build websites — we create digital experiences. From sleek
      designs to powerful functionality, our mission is to bring ideas to life
      online.
     </p>
    </div>

    {/* Cards with motion */}
    <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-3">
     {[
      {
       title: "Who We Are",
       text:
        "A team of creative developers and designers passionate about building beautiful, functional websites.",
       points: [
        "User-friendly, scalable solutions",
        "Creativity meets functionality",
        "Inspired by modern trends",
       ],
      },
      {
       title: "Our Toolbox",
       text:
        "We use modern tools and frameworks to make every project reliable, scalable, and future-ready.",
       points: ["HTML & CSS", "React JS", "Next JS"],
      },
      {
       title: "Why Choose Us",
       text:
        "Every project gets a personal touch. We collaborate closely with clients to turn ideas into high-quality results.",
       points: [
        "Custom solutions",
        "Seamless collaboration",
        "Commitment to quality",
       ],
      },
     ].map((card, i) => (
      <motion.div
       key={i}
       initial={{ opacity: 0, y: 40 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6, delay: i * 0.2 }}
       viewport={{ once: true }}
      >
       <Card className="flex flex-col rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 p-10 min-h-[340px] group">
        <h3 className="text-2xl font-bold relative w-fit pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-2/3 after:h-[3px] after:bg-indigo-500 after:rounded-full after:transition-all after:duration-300 group-hover:after:w-full">
         {card.title}
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-5">
         {card.text}
        </p>
        <ul className="list-disc list-inside mt-5 text-lg text-gray-600 dark:text-gray-300 space-y-2">
         {card.points.map((p, idx) => (
          <motion.li
           key={idx}
           whileHover={{ scale: 1.05, x: 4 }}
           transition={{ type: "spring", stiffness: 200 }}
          >
           {p}
          </motion.li>
         ))}
        </ul>
       </Card>
      </motion.div>
     ))}
    </div>
   </div>
  </div>
 );
};
