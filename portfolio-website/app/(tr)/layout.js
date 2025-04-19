import "@/app/globals.css";
import { Inter } from "next/font/google";
import ThemeManager from "@/components/ThemeManager";
import { LanguageProvider } from "@/components/LanguageProvider";
import ToastNotifications from "@/components/UI/ToastNotifications";
import { Fragment } from "react";
import Navbar from "@/components/UI/Navbar";
import ScrollToTopButton from "@/components/UI/ScrollToTopButton";
import NavbarData from "@/locales/tr/navbarData.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(`https://emiraydemir.com/`),
  title: "Emir Aydemir | Full Stack Yazılım Geliştirici",
  description: "4 yıllık deneyime sahip bir Full Stack geliştiriciyim. Backend tarafında .NET, frontend tarafında ise React ve TypeScript ile kullanıcı odaklı web ve mobil uygulamalar geliştiriyorum. Temiz kod, sürdürülebilirlik ve yüksek performans odaklı çözümler üretmeyi önceliklendiriyorum.",
  keywords: "Emir Muhammet Aydemir, yazılım geliştirici, fullstack geliştirici, frontend, backend, React, JavaScript, .NET, portföy, web geliştirici, mobil uygulama, REST API, SQL, Amazon S3, CI/CD",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({ children }) {
  const navbarData = NavbarData.navbarData;
  return (
    <html lang="tr">
      <LanguageProvider>
        <body className={inter.className}>
          <ThemeManager />
          <Fragment>
            <ScrollToTopButton />
            <Navbar navbarContent={navbarData} />
            <main className="bg-white text-black dark:bg-[#121212] dark:text-white">{children}</main>
            <ToastNotifications />
          </Fragment>
        </body>
      </LanguageProvider>
    </html>
  );
}
