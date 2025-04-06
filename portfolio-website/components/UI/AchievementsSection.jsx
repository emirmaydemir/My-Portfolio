"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiDotnet, SiCss3, SiAmazonaws, SiJavascript, SiTailwindcss } from "react-icons/si";
import { IconContext } from "react-icons";

const skills = [
  { name: "React", icon: SiReact, color: "#61DBFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: ".NET", icon: SiDotnet, color: "#5C2D91" },
  { name: "CSS3", icon: SiCss3, color: "#264de4" },
  { name: "JavaScript", icon: SiJavascript, color: "#f0db4f" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
];

const AchievementsSection = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="py-8 px-4 mt-10 mb-10 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] rounded-lg shadow-2xl">
      <h2 className="text-3xl font-bold text-white text-center mb-12">Yeteneklerim</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={500} // animasyon geçiş süresi
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <SwiperSlide key={index} className="flex flex-col items-center justify-center">
              <IconContext.Provider value={{ size: "3rem", color: skill.color }}>
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }} className="flex flex-col items-center justify-center">
                  <Icon />
                  <span className="mt-2 text-white font-medium">{skill.name}</span>
                </motion.div>
              </IconContext.Provider>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default AchievementsSection;
