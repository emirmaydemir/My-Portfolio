import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const { language } = useLanguage();
  const previewLink = language === "en" ? `/en/projects/${previewUrl}` : `/projects/${previewUrl}`;

  const handleCardClick = () => {
    window.location.href = previewLink;
  };

  return (
    <div onClick={handleCardClick} className="p-2 rounded-2xl transition duration-300 lg:p-0 lg:rounded-none lg:shadow-none shadow-lg shadow-black/20 bg-[#1f1f1f] lg:bg-transparent">
      <div className="h-52 md:h-72 rounded-t-xl relative group" style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }}>
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link href={gitUrl} className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link href={previewLink} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-5 lg:mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-base md:text-xl font-semibold mb-2 text-black dark:text-white max-lg:text-white">{title}</h5>
        <p className="text-sm md:text-base text-gray-700 dark:text-[#ADB7BE] max-lg:text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
