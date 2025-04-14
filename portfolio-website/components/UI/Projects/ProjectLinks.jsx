// components/ProjectLinks.jsx
"use client";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectLinks({ gitUrl, previewUrl, gitText, previewText }) {
  return (
    <div className="mt-10 mb-4 flex flex-wrap gap-4">
      {previewUrl && (
        <a href={previewUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition cursor-pointer">
          <FaExternalLinkAlt />
          {previewText}
        </a>
      )}
      {gitUrl && (
        <a href={gitUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition cursor-pointer">
          <FaGithub />
          {gitText}
        </a>
      )}
    </div>
  );
}
