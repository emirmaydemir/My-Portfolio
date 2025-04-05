import Link from "next/link";

const NavLink = ({ href, title, isActive, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`block py-2 px-4 rounded-lg sm:text-xl font-medium transition-all duration-300
        ${isActive ? "text-blue-500 dark:text-blue-400 border-b-2 border-blue-500 dark:border-blue-400" : "text-[#6B7280] dark:text-[#ADB7BE] hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-[#2A2A2A]"}
      `}
    >
      {title}
    </Link>
  );
};

export default NavLink;
