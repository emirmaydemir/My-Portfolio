"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "@/components/UI/ProjectCard";
import ProjectTag from "@/components/UI/ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

function ProjectsSection({ projectContent }) {
  const [tag, setTag] = useState("All");
  // Başlangıçta 6 proje gösterilecek
  const [expanded, setExpanded] = useState(false);
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(6);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setExpanded(false);
    setVisibleProjectsCount(6);
  };

  const filteredProjects = projectContent.filter((project) => project.project_tag.includes(tag));

  const toggleShowMore = () => {
    if (expanded) {
      setExpanded(false);
      setVisibleProjectsCount(6);
    } else {
      setExpanded(true);
      setVisibleProjectsCount(filteredProjects.length);
    }
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="pt-20">
      <div className="text-center pt-16 pb-8 px-4">
        <h2 className="text-4xl font-bold mb-4">My Projects</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-600 mx-auto rounded"></div>
      </div>
      <div className="text-white flex flex-wrap justify-center items-center gap-2 md:gap-4 py-6 px-4">
        <ProjectTag onClick={() => handleTagChange("All")} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={() => handleTagChange("Web")} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={() => handleTagChange("Mobile")} name="Mobile" isSelected={tag === "Mobile"} />
        <ProjectTag onClick={() => handleTagChange("Desktop")} name="Desktop" isSelected={tag === "Desktop"} />
        <ProjectTag onClick={() => handleTagChange("Backend")} name="Backend & ERP" isSelected={tag === "Backend"} />
        <ProjectTag onClick={() => handleTagChange("AI")} name="AI / Data / Vision" isSelected={tag === "AI"} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.slice(0, visibleProjectsCount).map((project, index) => (
          <motion.li key={project.project_id} variants={cardVariants} initial="initial" animate={expanded || isInView ? "animate" : "initial"} transition={{ duration: 0.3, delay: expanded ? index * 0.1 : index * 0.4 }}>
            <ProjectCard title={project.project_title} description={project.project_description} imgUrl={project.project_image} gitUrl={project.project_gitUrl} previewUrl={project.project_previewUrl} />
          </motion.li>
        ))}
      </ul>
      {filteredProjects.length > 6 && (
        <div className="flex justify-center mt-8">
          <button onClick={toggleShowMore} className="px-6 py-2 text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/30 hover:scale-105 transition duration-300">
            {expanded ? "Show Less ..." : "Show More ..."}
          </button>
        </div>
      )}
    </section>
  );
}

export default ProjectsSection;
