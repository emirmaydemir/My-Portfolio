"use client";
import React, { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function ExperienceSection({ experienceContent, experienceText }) {
  return (
    <section id="experience" className="py-5 sm:py-16 px-4 sm:px-8 max-w-5xl mx-auto">
      <div className="text-center pt-16 pb-8 px-4 mb-5">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          {experienceText.experience} & <span className="text-primary-400">{experienceText.education}</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-600 mx-auto rounded"></div>
      </div>

      <div className="space-y-16">
        {experienceContent.map((exp) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: false, amount: 0.4 });

          return (
            <motion.a key={exp.id} ref={ref} href={exp.url} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} transition={{ duration: 0.6, ease: "easeOut" }} className="flex flex-col sm:flex-row items-stretch relative group">
              {/* Sol: İkon ve Çizgi */}
              <div className="sm:relative absolute -top-4 -left-5 sm:top-0 sm:left-0 flex flex-col items-center mr-6">
                <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-black shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">{exp.icon === "work" ? <Briefcase size={20} /> : <GraduationCap size={20} />}</div>
                <div className="w-px bg-black dark:bg-white flex-1 mt-1"></div>
              </div>

              {/* Sağ: İçerik */}
              <div className="bg-[#1e293b] dark:bg-[#1f1f1f] p-5 rounded-xl border border-gray-700 hover:border-yellow-400 transition duration-300 flex-1">
                <p className="text-sm text-gray-400 mb-2">{exp.date}</p>
                <h3 className="text-base lg:text-xl font-semibold text-white">{exp.title}</h3>
                <p className="text-sm lg:text-base text-primary-400 mb-2">{exp.company}</p>
                <p className="text-gray-300 text-sm lg:text-base leading-relaxed">{exp.description}</p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
