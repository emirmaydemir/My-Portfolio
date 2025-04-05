import HeroSection from "@/components/UI/HeroSection";
import Navbar from "@/components/UI/Navbar";
import AboutSection from "@/components/UI/AboutSection";
import ProjectsSection from "@/components/UI/ProjectsSection";
import EmailSection from "@/components/UI/EmailSection";
import Footer from "@/components/UI/Footer";
import AchievementsSection from "@/components/UI/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-black dark:bg-[#121212] dark:text-white transition-colors duration-300">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
