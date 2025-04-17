import React from "react";

const Footer = ({ footerContent }) => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="w-full max-w-7xl mx-auto p-12 flex justify-between items-center">
        <div>
          <span className="text-black dark:text-white text-xs sm:text-base">Emir</span>
          <span className="text-blue-600 ml-2 dark:text-yellow-400 text-xs sm:text-base">Aydemir</span>
        </div>
        <p className="text-slate-700 dark:text-slate-400 text-xs sm:text-base">{footerContent.footer_data}</p>
      </div>
    </footer>
  );
};

export default Footer;
