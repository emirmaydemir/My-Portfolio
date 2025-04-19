"use client";
import { useEffect } from "react";

export default function ThemeManager() {
  useEffect(() => {
    // localStorage’dan tema oku
    let theme = localStorage.getItem("theme");

    // Eğer daha önce hiç kayıt yoksa, default dark ata
    if (!theme) {
      theme = "dark";
      localStorage.setItem("theme", theme);
    }

    // <html> etiketine sınıf ekle/çıkar
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return null; // UI render etmiyoruz, sadece yan etki
}
