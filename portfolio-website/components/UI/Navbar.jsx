"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavLink from "@/components/UI/NavLink";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "@/components/UI/MenuOverlay";
import LanguageChanger from "../LanguageChanger";
import { useLanguage } from "@/components/LanguageProvider";

const Navbar = ({ navbarContent }) => {
  const { language } = useLanguage();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const isDark = storedTheme === "dark";
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-10 bg-white dark:bg-[#121212] border-b border-[#33353F] transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        {/* Sol - Logo */}
        <Link
          href={language === "en" ? `/en` : `/`}
          onClick={() => setActiveLink("")} // <-- aktif link sıfırlanıyor
          className="text-2xl md:text-4xl font-bold text-black dark:text-white ml-2"
        >
          <Image
            src={darkMode ? "/images/emir-aydemir-logo-black.png" : "/images/emir-aydemir-logo-white.png"} // Dark mode'a göre resim değişimi
            alt="Logo"
            width={150} // Logo genişliği
            height={50} // Logo yüksekliği
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* Orta - Menü */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex space-x-6 px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-gray-100 dark:bg-[#1e1e1e] shadow-md">
            {navbarContent.map((link, index) => (
              <NavLink key={index} href={link.path} title={link.title} isActive={activeLink === link.path} onClick={() => setActiveLink(link.path)} />
            ))}
          </div>
        </div>

        {/* Sağ - Dil, Tema, Menü Toggle */}
        <div className="flex items-center space-x-4 gap-3 mr-2">
          <LanguageChanger />
          <button onClick={toggleTheme} className="text-black dark:text-white hover:text-yellow-400 transition" aria-label="Toggle Theme">
            {darkMode ? <SunIcon className="w-8 h-8" /> : <MoonIcon className="w-8 h-8" />}
          </button>
          <div className="md:hidden">
            <button onClick={() => setNavbarOpen(!navbarOpen)} className="p-2 border rounded border-slate-300 text-slate-700 dark:text-slate-200 hover:border-white">
              {navbarOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menü */}
      {navbarOpen ? <MenuOverlay links={navbarContent} /> : null}
    </nav>
  );
};

export default Navbar;
