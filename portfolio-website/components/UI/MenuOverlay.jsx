import React from "react";
import NavLink from "@/components/UI/NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul
      className={`
        flex flex-col items-center py-4
        bg-white dark:bg-[#121212] shadow-md
        animate-slideDown
        transition-all duration-300 ease-in-out
        border-t border-gray-300 dark:border-gray-700
      `}
    >
      {links.map((link, index) => (
        <li key={index} className="w-full text-center my-1">
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
