import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold transition-colors duration-200 
          ${active ? "text-black dark:text-white" : "text-gray-600 dark:text-gray-400"}
          hover:text-black dark:hover:text-gray-100`}
      >
        {children}
      </p>
      <motion.div animate={active ? "active" : "default"} variants={variants} className="h-1 bg-primary-500 mt-2 mr-3" />
    </button>
  );
};

export default TabButton;
