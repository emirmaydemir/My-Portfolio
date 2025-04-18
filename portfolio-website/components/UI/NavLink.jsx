import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";

const NavLink = ({ href, title, isActive, onClick }) => {
  const { language } = useLanguage();
  const router = useRouter();

  const baseHref = href.replace(/^#/, "");
  const isEnglish = language === "en";
  const homePath = isEnglish ? "/en" : "/";
  const fullHref = `${homePath}#${baseHref}`;

  const handleClick = async (e) => {
    e.preventDefault();

    if (router.pathname !== homePath) {
      // Eğer home'da değilsek, önce home'a git sonra scroll yap
      await router.push(fullHref); // Bu zaten #id ile gidiyor ama smooth değil
      setTimeout(() => {
        const el = document.getElementById(baseHref);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // DOM’un yüklenmesi için küçük gecikme
    } else {
      const el = document.getElementById(baseHref);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }

    onClick?.();
  };

  return (
    <Link
      href={fullHref}
      onClick={handleClick}
      scroll={false} // scroll'u biz manuel yapıyoruz
      className={`block py-2 px-4 rounded-lg text-base xl:text-xl font-medium transition-all duration-300
        ${isActive ? "text-blue-500 dark:text-blue-400 border-b-2 border-blue-500 dark:border-blue-400" : "text-[#4B5563] dark:text-[#ADB7BE] hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-[#2A2A2A]"}
      `}
    >
      {title}
    </Link>
  );
};

export default NavLink;
