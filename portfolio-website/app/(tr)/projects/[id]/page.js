// app/projects/[id]/page.jsx
"use client";

import React from "react";
import ProjectHeader from "@/components/UI/Projects/ProjectHeader";
import MediaCarousel from "@/components/UI/Projects/MediaCarousel";
import ProjectDescription from "@/components/UI/Projects/ProjectDescription";
import Technologies from "@/components/UI/Projects/Technologies";
import ProjectLinks from "@/components/UI/Projects/ProjectLinks";

// Örnek projeler verisi
const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    tagline: "E-ticaret deneyimini yeniden tanımlayan modern web uygulaması",
    description: "Bu projede, modern React ve Next.js kullanarak şık bir portfolyo sitesi geliştirdim. Kullanıcı dostu arayüz, responsive tasarım ve animasyonlarla desteklendi.",
    media: ["/images/projects/1.png", "/images/projects/2.png", "/images/projects/3.png"],
    technologies: ["React", "NextJS", "Tailwind CSS", "Framer Motion"],
    gitUrl: "https://github.com/username/react-portfolio",
    previewUrl: "https://live-demo.com",
  },
];

export default function ProjectDetailPage({ params: { id } }) {
  const project = projectsData.find((p) => p.id === Number(id));
  if (!project) return <div className="text-center p-8">Proje bulunamadı.</div>;

  return (
    <div className="max-w-5xl mx-auto p-4 pt-28 mt-5">
      <ProjectHeader title={project.title} tagline={project.tagline} />
      <MediaCarousel media={project.media} />
      <ProjectDescription description={project.description} />
      <Technologies technologies={project.technologies} />
      <ProjectLinks gitUrl={project.gitUrl} previewUrl={project.previewUrl} />
    </div>
  );
}
