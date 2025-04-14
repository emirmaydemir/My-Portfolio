// components/ProjectDescription.jsx
"use client";

export default function ProjectDescription({ description, descriptionTitle }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-2">{descriptionTitle}</h2>
      <p className="text-gray-900 dark:text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}
