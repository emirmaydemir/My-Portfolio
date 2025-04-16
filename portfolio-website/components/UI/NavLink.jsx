import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const NavLink = ({ href, title, isActive, onClick }) => {
  const { language } = useLanguage();
  const baseHref = href.replace(/^#/, "");
  const fullHref = `${language === "en" ? "/en" : ""}/${baseHref}`;

  const handleClick = (e) => {
    e.preventDefault();
    const el = document.getElementById(baseHref);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    onClick?.(); // eğer varsa onClick'i çalıştır (örneğin aktif link ayarlama veya menü kapatma)
  };

  return (
    <Link
      href={fullHref}
      onClick={handleClick}
      className={`block py-2 px-4 rounded-lg sm:text-xl font-medium transition-all duration-300
        ${isActive ? "text-blue-500 dark:text-blue-400 border-b-2 border-blue-500 dark:border-blue-400" : "text-[#4B5563] dark:text-[#ADB7BE] hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-[#2A2A2A]"}
      `}
    >
      {title}
    </Link>
  );
};

export default NavLink;
