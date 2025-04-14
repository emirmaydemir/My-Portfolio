// components/ProjectHeader.jsx
"use client";

import { motion } from "framer-motion";

export default function ProjectHeader({ title, tagline }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h1 className="text-4xl font-bold mt-4">{title}</h1>
      <p className="text-xl text-gray-700 dark:text-gray-400 mt-2">{tagline}</p>
    </motion.div>
  );
}
