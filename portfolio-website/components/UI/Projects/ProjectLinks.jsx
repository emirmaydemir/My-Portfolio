// components/ProjectLinks.jsx
"use client";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectLinks({ gitUrl, previewUrl }) {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      {previewUrl && (
        <a className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition cursor-pointer">
          <FaExternalLinkAlt />
          Live Demo
        </a>
      )}
      {gitUrl && (
        <a className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition cursor-pointer">
          <FaGithub />
          Kodları Görüntüle
        </a>
      )}
    </div>
  );
}
