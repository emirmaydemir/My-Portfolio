import HeroSection from "@/components/UI/HeroSection";
import Navbar from "@/components/UI/Navbar";
import AboutSection from "@/components/UI/AboutSection";
import ProjectsSection from "@/components/UI/ProjectsSection";
import EmailSection from "@/components/UI/EmailSection";
import Footer from "@/components/UI/Footer";
import AchievementsSection from "@/components/UI/AchievementsSection";
import HeroData from "@/locales/en/heroData.json";
import AboutData from "@/locales/en/aboutData.json";

export default function Home() {
  const heroData = HeroData.heroData;
  const aboutData = AboutData.aboutData;
  const certifications = AboutData.certifications;
  const publications = AboutData.publications;
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection heroContent={heroData} />
        <AchievementsSection />
        <AboutSection aboutContent={aboutData} certifications={certifications} publications={publications} />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
