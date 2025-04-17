"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function LanguageChanger() {
  const { language, changeLanguage } = useLanguage();
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (newLocale) => {
    changeLanguage(newLocale);

    // Yönlendirme işlemi
    if (newLocale === "tr") {
      if (currentPathname.startsWith("/en")) {
        // Eğer dil Türkçe'ye dönecekse ve /en varsa, /en'yi kaldır
        const newPathname = currentPathname.replace(/^\/en/, "");

        // Eğer ana sayfa (/) ise, yönlendirirken boş bırak, diğer sayfalarda /en kaldır
        if (newPathname === "/en" || newPathname === "") {
          router.push("/"); // Ana sayfaya yönlendir
        } else {
          router.push(newPathname); // Diğer sayfada /en'yi kaldırıp doğru yönlendir
        }
      } else {
        router.push(currentPathname); // Eğer /en yoksa, mevcut path'e yönlendir
      }
    } else {
      if (!currentPathname.startsWith("/en")) {
        // Eğer dil İngilizce olacaksa ve /en yoksa, /en ekle
        router.push("/en" + currentPathname);
      } else {
        router.push(currentPathname); // Eğer zaten /en varsa, mevcut path'i koru
      }
    }

    // Sayfa yenilenir (Zorla yenileme)
    //router.refresh();
  };

  const displayLang = language === "en" || currentPathname.startsWith("/en") ? "EN" : "TR";

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <MenuButton className="px-3 py-2 text-sm md:px-4 md:py-2 md:text-base border border-[#4c4f5c] rounded-md bg-white text-black dark:bg-[#181818] dark:text-white">{displayLang}</MenuButton>

        <MenuItems className="absolute top-full right-0 mt-2 w-24 origin-top-right bg-white dark:bg-[#181818] border border-gray-200 dark:border-[#33353F] rounded-md shadow-md focus:outline-none z-50">
          <div className="py-1">
            <MenuItem as="button" onClick={() => handleChange("tr")} className={({ active }) => `w-full text-left px-4 py-2 text-sm text-black dark:text-white ${active ? "bg-gray-100 dark:bg-gray-700" : ""}`}>
              TR
            </MenuItem>
            <MenuItem as="button" onClick={() => handleChange("en")} className={({ active }) => `w-full text-left px-4 py-2 text-sm text-black dark:text-white ${active ? "bg-gray-100 dark:bg-gray-700" : ""}`}>
              EN
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
}
