"use client";

import { SiDotnet, SiSharp, SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiPython, SiGithub, SiSubversion, SiBootstrap, SiAxios, SiAndroidstudio, SiPostman, SiGithubactions, SiGoogleads, SiGoogleanalytics, SiCloudinary, SiMobx } from "react-icons/si";
import { TbBrandFramerMotion, TbApi, TbSeo } from "react-icons/tb";
import { FaAws, FaJava, FaDatabase, FaRegCheckCircle, FaGitAlt, FaGoogle, FaKey, FaServer } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import { MdArchitecture } from "react-icons/md";
import { GrCloudSoftware } from "react-icons/gr";
import { IoLogoFirebase } from "react-icons/io5";
import { TbFileTypeXml, TbBrandDjango } from "react-icons/tb";
import { FcApproval } from "react-icons/fc";

const iconMap = {
  Java: { icon: FaJava, color: "#3F7FBF" },
  "Android Studio": { icon: SiAndroidstudio, color: "#3DDC84" },
  SQL: { icon: FaDatabase, color: "#CC2927" },
  "Java Derby": { icon: FaDatabase, color: "#CC2927" },
  Git: { icon: FaGitAlt, color: "#F05032" },
  "Framer Motion": { icon: TbBrandFramerMotion, color: "#C445EA" },
  React: { icon: SiReact, color: "#61DAFB" },
  NextJS: { icon: SiNextdotjs, color: "#000000" },
  MobX: { icon: SiMobx, color: "#FF9955" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  HTML: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss3, color: "#264de4" },
  Bootstrap: { icon: SiBootstrap, color: "#7952B3" },
  SEO: { icon: TbSeo, color: "#9E9E9E" },
  "Google Ads": { icon: SiGoogleads, color: "#4285F4" },
  "Search Console": { icon: FaGoogle, color: "#4285F4" },
  Analytics: { icon: SiGoogleanalytics, color: "#F57C00" },
  ".NET": { icon: SiDotnet, color: "#512BD4" },
  "C#": { icon: SiSharp, color: "#5C2D91" },
  "REST API": { icon: TbApi, color: "#FF5722" },
  "Visual Studio": { icon: DiVisualstudio, color: "#5C2D91" },
  "GitHub Actions": { icon: SiGithubactions, color: "#F66A0A" },
  Axios: { icon: SiAxios, color: "#5A29A0" },
  Cloudinary: { icon: SiCloudinary, color: "#3448C5" },
  "Amazon S3": { icon: FaAws, color: "#FF9900" },
  IIS: { icon: FaServer, color: "#4B6EAF" },
  JWT: { icon: FaKey, color: "#F05032" },
  Firebase: { icon: IoLogoFirebase, color: "#FFCA28" },
  XML: { icon: TbFileTypeXml, color: "#E44D26" },
  Python: { icon: SiPython, color: "#306998" },
  Django: { icon: TbBrandDjango, color: "#10B981" },
};

export default function Technologies({ technologies, technologiesTitle }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">{technologiesTitle}</h2>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, index) => {
          const iconData = iconMap[tech] || { icon: FcApproval, color: "#6B7280" }; // varsayılan gri
          const Icon = iconData.icon;

          return (
            <div key={index} className="flex items-center gap-2 bg-gray-900 dark:bg-white px-3 py-1 rounded-full text-sm shadow hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Icon className="text-xl" style={{ color: iconData.color }} />
              <span className="text-white dark:text-black md:text-base font-medium">{tech}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
