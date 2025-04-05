// components/ProjectDescription.jsx
"use client";

export default function ProjectDescription({ description }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-2">Proje Açıklaması</h2>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}
