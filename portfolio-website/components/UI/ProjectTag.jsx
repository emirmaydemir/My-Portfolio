import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected ? "text-black dark:text-white border-primary-500" : "text-gray-500 dark:text-[#ADB7BE] border-slate-300 dark:border-slate-600 hover:border-black dark:hover:border-white";

  return (
    <button className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer transition-colors duration-300`} onClick={() => onClick(name)}>
      {name}
    </button>
  );
};

export default ProjectTag;
