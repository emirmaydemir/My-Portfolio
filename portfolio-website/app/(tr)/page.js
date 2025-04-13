import HeroSection from "@/components/UI/HeroSection";
import AboutSection from "@/components/UI/AboutSection";
import ProjectsSection from "@/components/UI/ProjectsSection";
import EmailSection from "@/components/UI/EmailSection";
import Footer from "@/components/UI/Footer";
import ExperienceSection from "@/components/UI/ExperienceSection";
import AchievementsSection from "@/components/UI/AchievementsSection";
import HeroData from "@/locales/tr/heroData.json";
import AboutData from "@/locales/tr/aboutData.json";
import ProjectData from "@/locales/tr/projectData.json";
import ExperienceData from "@/locales/tr/experienceData.json";
import EmailData from "@/locales/tr/emailData.json";
import FooterData from "@/locales/tr/footerData.json";
import FollowCursor from "@/components/UI/FollowCursor";

export default function Home() {
  const heroData = HeroData.heroData;
  const aboutData = AboutData.aboutData;
  const certifications = AboutData.certifications;
  const publications = AboutData.publications;
  const projectData = ProjectData.projectData;
  const buttonText = ProjectData.buttonText;
  const experienceData = ExperienceData.experienceData;
  const titleText = ExperienceData.titleText;
  const emailData = EmailData.emailData;
  const footerData = FooterData.footerData;

  return (
    <main className="flex min-h-screen flex-col transition-colors duration-300" id="top">
      <div className="container mt-24 mx-auto px-12 py-4">
        <FollowCursor />
        <HeroSection heroContent={heroData} />
        <AchievementsSection />
        <AboutSection aboutContent={aboutData} certifications={certifications} publications={publications} />
        <ProjectsSection projectContent={projectData} projectText={buttonText} />
        <ExperienceSection experienceContent={experienceData} experienceText={titleText} />
        <EmailSection emailContent={emailData} />
      </div>
      <Footer footerContent={footerData} />
    </main>
  );
}
