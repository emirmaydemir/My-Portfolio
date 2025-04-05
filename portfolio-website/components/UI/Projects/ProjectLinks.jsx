// components/ProjectLinks.jsx
"use client";

export default function ProjectLinks({ gitUrl, previewUrl }) {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      {previewUrl && (
        <a href={previewUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Live Demo
        </a>
      )}
      {gitUrl && (
        <a href={gitUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition">
          Kodları Görüntüle
        </a>
      )}
    </div>
  );
}
