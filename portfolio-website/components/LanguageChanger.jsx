"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function LanguageChanger({ className }) {
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
    router.refresh();
  };

  const flagSrc = (() => {
    if (language === "en" || currentPathname.startsWith("/en")) {
      return "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg"; // Turkish Flag
    } else if (language === "tr" || (language === "en" && !currentPathname.startsWith("/en"))) {
      return "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"; // English Flag
    } else {
      return "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg";
    }
  })();

  return (
    <div className={className}>
      <Image className="w-9 h-9" src={flagSrc} alt={language === "en" ? "Turkish Flag" : "English Flag"} width={30} height={20} onClick={() => handleChange(language === "en" ? "tr" : "en")} />
    </div>
  );
}
