"use client";

import { SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiNodedotjs, SiMongodb, SiPostgresql, SiMysql, SiDotnet } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaQuestion } from "react-icons/fa"; // Bilinmeyenler için yedek ikon

const iconMap = {
  "Framer Motion": TbBrandFramerMotion,
  React: SiReact,
  NextJS: SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  HTML: SiHtml5,
  CSS: SiCss3,
  "Node.js": SiNodedotjs,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  ".NET": SiDotnet,
};

export default function Technologies({ technologies, technologiesTitle }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">{technologiesTitle}</h2>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, index) => {
          const Icon = iconMap[tech] || FaQuestion;

          return (
            <div key={index} className="flex items-center gap-2 bg-gray-900 dark:bg-white px-3 py-1 rounded-full text-sm shadow hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Icon className="text-xl text-blue-500" />
              <span className="text-white dark:text-black">{tech}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
