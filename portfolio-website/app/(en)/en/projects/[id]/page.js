// app/projects/[id]/page.jsx
"use client";

import React from "react";
import ProjectHeader from "@/components/UI/Projects/ProjectHeader";
import MediaCarousel from "@/components/UI/Projects/MediaCarousel";
import ProjectDescription from "@/components/UI/Projects/ProjectDescription";
import Technologies from "@/components/UI/Projects/Technologies";
import ProjectLinks from "@/components/UI/Projects/ProjectLinks";
import FollowCursor from "@/components/UI/FollowCursor";
import ProjectDetail from "@/locales/en/projectDetail.json";

export default function ProjectDetailPage({ params: { id } }) {
  const projectDetail = ProjectDetail.projectDetail;

  const project = projectDetail.find((p) => p.previewId === id);
  if (!project) return <div className="text-center p-8">Proje bulunamadı.</div>;

  return (
    <section className="max-w-5xl mx-auto p-4 pt-28 mt-5">
      <FollowCursor />
      <ProjectHeader title={project.title} tagline={project.subtitle} />
      <MediaCarousel media={project.images} />
      <ProjectDescription description={project.description} descriptionTitle={project.description_title} />
      <Technologies technologies={project.technologies} technologiesTitle={project.technologies_title} />
      <ProjectLinks gitUrl={project.gitUrl} previewUrl={project.previewUrl} gitText={project.gitText} previewText={project.previewText} />
    </section>
  );
}
