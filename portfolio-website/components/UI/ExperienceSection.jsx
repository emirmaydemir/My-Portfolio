"use client";
import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      // Her çocuğun arasında 0.3 saniyelik gecikme olacak
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function ExperienceSection({ experienceContent, experienceText }) {
  return (
    <section id="experience" className="py-16 px-4 sm:px-8 max-w-5xl mx-auto">
      <div className="text-center pt-16 pb-8 px-4 mb-5">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          {experienceText.experience} & <span className="text-primary-400">{experienceText.education}</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-600 mx-auto rounded"></div>
      </div>

      <motion.div className="space-y-16" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }}>
        {experienceContent.map((exp, idx) => (
          <motion.a key={exp.id} href={exp.url} target="_blank" rel="noopener noreferrer" variants={itemVariants} transition={{ duration: 0.5 }} className="relative flex items-stretch group">
            {/* Sol: İkon ve Çizgi */}
            <div className="relative flex flex-col items-center mr-6">
              <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-black shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">{exp.icon === "work" ? <Briefcase size={20} /> : <GraduationCap size={20} />}</div>
              <div className="w-px bg-white flex-1 mt-1"></div>
            </div>
            {/* Sağ: İçerik */}
            <div className="bg-[#1f1f1f] p-5 rounded-xl border border-gray-700 hover:border-yellow-400 transition duration-300 flex-1">
              <p className="text-sm text-gray-400 mb-1">{exp.date}</p>
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <p className="text-md text-primary-400 mb-2">{exp.company}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
