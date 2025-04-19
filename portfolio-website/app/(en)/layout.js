import "@/app/globals.css";
import { Inter } from "next/font/google";
import ThemeManager from "@/components/ThemeManager";
import { LanguageProvider } from "@/components/LanguageProvider";
import ToastNotifications from "@/components/UI/ToastNotifications";
import { Fragment } from "react";
import Navbar from "@/components/UI/Navbar";
import ScrollToTopButton from "@/components/UI/ScrollToTopButton";
import NavbarData from "@/locales/en/navbarData.json";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(`https://emiraydemir.com/en`),
  title: "Emir Aydemir | Full Stack Software Developer",
  description: "I am a Full Stack developer with 4 years of experience. I build user-centric web and mobile applications using .NET on the backend and React with TypeScript on the frontend. I prioritize clean code, sustainability, and high-performance solutions.",
  keywords: "Emir Muhammet Aydemir, software developer, fullstack developer, frontend, backend, React, JavaScript, .NET, portfolio, web developer, mobile app, REST API, SQL, Amazon S3, CI/CD",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({ children }) {
  const navbarData = NavbarData.navbarData;
  return (
    <html lang="en">
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
      <GoogleAnalytics gaId="G-KYYVFCFBD9" />
    </html>
  );
}
