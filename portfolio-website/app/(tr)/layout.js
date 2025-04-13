import "@/app/globals.css";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Fragment } from "react";
import Navbar from "@/components/UI/Navbar";
import ScrollToTopButton from "@/components/UI/ScrollToTopButton";
import NavbarData from "@/locales/tr/navbarData.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const navbarData = NavbarData.navbarData;
  return (
    <html lang="tr">
      <LanguageProvider>
        <body className={inter.className}>
          <Fragment>
            <ScrollToTopButton />
            <Navbar navbarContent={navbarData} />
            <main className="bg-white text-black dark:bg-[#121212] dark:text-white">{children}</main>
          </Fragment>
        </body>
      </LanguageProvider>
    </html>
  );
}
