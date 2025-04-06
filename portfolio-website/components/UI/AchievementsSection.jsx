"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { motion } from "framer-motion";
import { SiDotnet, SiSharp, SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiPython, SiGithub, SiSubversion, SiBootstrap, SiAxios, SiAndroidstudio, SiPostman, SiGithubactions } from "react-icons/si";
import { FaAws, FaJava, FaDatabase, FaRegCheckCircle } from "react-icons/fa";
import { TbApi, TbSeo } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { MdArchitecture } from "react-icons/md";
import { GrCloudSoftware } from "react-icons/gr";

const skills = [
  { name: "C#", icon: SiSharp, color: "#5C2D91" },
  { name: ".NET", icon: SiDotnet, color: "#5C2D91" },
  { name: "SQL", icon: FaDatabase, color: "#CC2927" },
  { name: "REST API", icon: TbApi, color: "#FF5722" },
  { name: "Clean Architecture", icon: MdArchitecture, color: "#3498db" },
  { name: "Unit Testing", icon: FaRegCheckCircle, color: "#2ecc71" },
  { name: "CI/CD", icon: SiGithubactions, color: "#F5F5F5" },
  { name: "ERP Software Development", icon: GrCloudSoftware, color: "#B0BEC5" },
  { name: "Axios", icon: SiAxios, color: "#5A29A0" },
  { name: "React", icon: SiReact, color: "#61DBFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#f0db4f" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#264de4" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Amazon S3", icon: FaAws, color: "#FF9900" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "Python", icon: SiPython, color: "#306998" },
  { name: "GitHub", icon: SiGithub },
  { name: "Subversion", icon: SiSubversion, color: "#8097BF" },
  { name: "Visual Studio", icon: DiVisualstudio, color: "#5C2D91" },
  { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Search Engine Optimization", icon: TbSeo, color: "#9E9E9E" },
];

const MotionIcon = ({ Icon, color, name }) => (
  <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }} className="flex flex-col items-center justify-center">
    <Icon size="3rem" color={color} />
    <span className="mt-2 text-white font-medium">{name}</span>
  </motion.div>
);

const AchievementsSection = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="py-8 px-4 mt-10 mb-10 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] rounded-lg shadow-2xl">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1500} // animasyon geçiş süresi
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {skills.map((skill, index) => {
          return (
            <SwiperSlide key={index} className="flex flex-col items-center justify-center">
              <MotionIcon Icon={skill.icon} color={skill.color} name={skill.name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default AchievementsSection;
