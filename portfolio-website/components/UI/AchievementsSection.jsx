"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { motion } from "framer-motion";
import { SiDotnet, SiSharp, SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiPython, SiGithub, SiSubversion, SiBootstrap, SiAxios, SiAndroidstudio, SiPostman, SiGithubactions, SiGoogleads, SiGoogleanalytics, SiCloudinary } from "react-icons/si";
import { FaAws, FaJava, FaDatabase, FaRegCheckCircle, FaGitAlt, FaGoogle } from "react-icons/fa";
import { TbApi, TbSeo } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { MdArchitecture } from "react-icons/md";
import { GrCloudSoftware } from "react-icons/gr";
import { IoLogoFirebase } from "react-icons/io5";

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
  { name: "Cloudinary", icon: SiCloudinary, color: "#3448C5" },
  { name: "Analytics", icon: SiGoogleanalytics, color: "#F57C00" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "Python", icon: SiPython, color: "#306998" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: SiGithub },
  { name: "Subversion", icon: SiSubversion, color: "#8097BF" },
  { name: "Visual Studio", icon: DiVisualstudio, color: "#5C2D91" },
  { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
  { name: "Firebase", icon: IoLogoFirebase, color: "#FFCA28" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Search Engine Optimization", icon: TbSeo, color: "#9E9E9E" },
  { name: "Google Ads", icon: SiGoogleads, color: "#4285F4" },
  { name: "Google Search Console", icon: FaGoogle, color: "#4285F4" },
  { name: "Analytics", icon: SiGoogleanalytics, color: "#F57C00" },
];

const MotionIcon = ({ Icon, color, name }) => (
  <motion.div whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }} className="flex flex-col items-center justify-center h-full">
    <Icon className="w-8 h-8 xl:w-12 xl:h-12" color={color} />
    <span className="mt-2 text-[11px] xl:text-base text-white font-medium text-center">{name}</span>
  </motion.div>
);

const AchievementsSection = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <div className="py-8 px-4 mt-8 mb-12 bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] rounded-lg shadow-2xl h-[120px] xl:h-[145px]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        loop={true}
        speed={1500}
        breakpoints={{
          0: { slidesPerView: 2 },
          390: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center h-full">
            <MotionIcon Icon={skill.icon} color={skill.color} name={skill.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AchievementsSection;
