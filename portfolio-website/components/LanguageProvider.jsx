"use client";

import { useState, useEffect, createContext, useContext } from "react";
import { usePathname } from "next/navigation";

// Dil bilgisini saklamak için bir context oluşturuyoruz
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    setLanguage(savedLanguage);
    // Eğer kayıtlı dil "en" ise ve URL'de /en yoksa ekle
    if (savedLanguage === "en" && !pathname.startsWith("/en")) {
      changeLanguage("tr");
    }
    if ((savedLanguage === "tr" && pathname.startsWith("/en")) || pathname.startsWith("/en")) {
      changeLanguage("en");
    }
  }, []);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return <LanguageContext.Provider value={{ language, changeLanguage }}>{children}</LanguageContext.Provider>;
}

// Dil bilgisini kullanmak için bir custom hook
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
