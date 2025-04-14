import React from "react";

const Footer = ({ footerContent }) => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <div>
          <span className="text-black dark:text-white">Emir</span>
          <span className="text-blue-600 ml-2 dark:text-yellow-400">Aydemir</span>
        </div>
        <p className="text-slate-700 dark:text-slate-400">{footerContent.footer_data}</p>
      </div>
    </footer>
  );
};

export default Footer;
