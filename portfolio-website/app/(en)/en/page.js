import HeroSection from "@/components/UI/HeroSection";
import AboutSection from "@/components/UI/AboutSection";
import ProjectsSection from "@/components/UI/ProjectsSection";
import EmailSection from "@/components/UI/EmailSection";
import Footer from "@/components/UI/Footer";
import ExperienceSection from "@/components/UI/ExperienceSection";
import AchievementsSection from "@/components/UI/AchievementsSection";
import HeroData from "@/locales/en/heroData.json";
import AboutData from "@/locales/en/aboutData.json";
import ProjectData from "@/locales/en/projectData.json";

export default function Home() {
  const heroData = HeroData.heroData;
  const aboutData = AboutData.aboutData;
  const certifications = AboutData.certifications;
  const publications = AboutData.publications;
  const projectData = ProjectData.projectData;
  return (
    <main className="flex min-h-screen flex-col bg-white text-black dark:bg-[#121212] dark:text-white transition-colors duration-300">
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection heroContent={heroData} />
        <AchievementsSection />
        <AboutSection aboutContent={aboutData} certifications={certifications} publications={publications} />
        <ProjectsSection projectContent={projectData} />
        <ExperienceSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
