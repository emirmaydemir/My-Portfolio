// app/projects/[id]/page.jsx
import React from "react";
import ProjectHeader from "@/components/UI/Projects/ProjectHeader";
import MediaCarousel from "@/components/UI/Projects/MediaCarousel";
import ProjectDescription from "@/components/UI/Projects/ProjectDescription";
import Technologies from "@/components/UI/Projects/Technologies";
import ProjectLinks from "@/components/UI/Projects/ProjectLinks";
import FollowCursor from "@/components/UI/FollowCursor";
import ProjectDetail from "@/locales/tr/projectDetail.json";
import Projects from "@/locales/tr/projectData.json";

export function generateStaticParams() {
  const data = Projects.projectData;

  // Ürünlerin slug parametrelerini almak
  const slugs = data.map((item) => ({ id: item.project_previewUrl }));

  // Her slug için parametre döndürülüyor
  return slugs;
}

// Metadata ayarlama fonksiyonu
export function generateMetadata({ params: { id } }) {
  const data = ProjectDetail.projectDetail;

  const singleProductItem = data.find((item) => item.previewId === id);

  if (!singleProductItem) {
    return {
      title: "Proje Bulunamadi",
      description: "Aradiginiz proje bulunamadi.",
    };
  }

  const defaultKeywords = "Emir Aydemir, Full Stack Developer, web geliştirme, yazılım projeleri, React, TypeScript, .NET, JavaScript, REST API, SQL, CI/CD, mobil uygulamalar, portföy projeleri, yazılım geliştirme, modern web teknolojileri, yenilikçi çözümler, yazılım mühendisliği, teknolojik projeler, kullanıcı odaklı yazılım, responsive web tasarımı, backend geliştirme, frontend geliştirme";
  const keywords = `${singleProductItem.title || ""}, ${defaultKeywords}`;

  return {
    title: `${singleProductItem.title}`,
    description: `${singleProductItem.description}`,
    keywords: keywords.trim(),
    alternates: {
      canonical: `https://emiraydemir.com/projects/${id}`,
    },
  };
}

export default function ProjectDetailPage({ params: { id } }) {
  const projectDetail = ProjectDetail.projectDetail;

  const project = projectDetail.find((p) => p.previewId === id);
  if (!project) return <div className="text-center p-8">Proje bulunamadı.</div>;

  return (
    <section className="max-w-5xl mx-auto p-4 pt-28 mt-5">
      <FollowCursor />
      <ProjectHeader title={project.title} tagline={project.subtitle} />
      <MediaCarousel title={project.title} media={project.media} />
      <ProjectDescription description={project.description} descriptionTitle={project.description_title} />
      <Technologies technologies={project.technologies} technologiesTitle={project.technologies_title} />
      <ProjectLinks gitUrl={project.gitUrl} previewUrl={project.previewUrl} gitText={project.gitText} previewText={project.previewText} />
    </section>
  );
}
