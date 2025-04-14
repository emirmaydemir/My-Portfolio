"use client";
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "@/components/UI/TabButton";
import CertificationCard from "@/components/UI/CertificationCard";
import PublicationCard from "@/components/UI/PublicationCard";
import { motion } from "framer-motion";

const AboutSection = ({ aboutContent, certifications, publications }) => {
  const [tab, setTab] = useState("skills");

  const handleShowPublication = (publication) => {
    // Buton işlevselliğini buraya ekleyebilirsin.
    alert(`Yayın: ${publication.title}`);
  };

  // Sekme içeriği tanımlamaları
  const TAB_DATA = [
    {
      title: aboutContent.about_skill,
      id: "skills",
      content: (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {[".NET Core", "C#", "Rest API", "Entity Framework Core", "Clean Architecture", "SOLID", "Multi-Project Solution", "CI/CD", "CQRS and Mediator pattern", "ERP Software", "Dependency Injection", "SignalR", "OOP", "Data Structures", "React.js", "Next.js", "CSS", "Tailwind CSS", "Bootstrap", "TypeScript", "JavaScript", "Mobx", "AutoMapper", "XML", "JSON", "Visual Studio", "Android Studio", "Java", "Firebase", "SDK", "JDBC", "SQL", "LINQ", "AWS S3", "Git", "GitHub", "Subversion", "Postman", "Unit Testing", "Python"].map((skill, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: i * 0.05 }} viewport={{ once: false }} className="w-36 h-12 flex items-center justify-center rounded-full shadow-lg bg-gradient-to-r from-gray-700 to-gray-800 hover:from-primary-500 hover:to-secondary-600 transition-transform duration-300 transform hover:scale-105 px-2">
              <span className="text-sm font-medium text-white text-center">{skill}</span>
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      title: aboutContent.about_publications,
      id: "publications",
      content: (
        <div className="space-y-6">
          {publications.map(
            (
              pub,
              i // 'i' burada tanımlandı
            ) => (
              <motion.div key={pub.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.2 }} viewport={{ once: false, amount: 0.5 }}>
                <PublicationCard title={pub.title} date={pub.date} description={pub.description} buttonText={aboutContent.about_publications_button} onShow={() => handleShowPublication(pub)} />
              </motion.div>
            )
          )}
        </div>
      ),
    },
    {
      title: aboutContent.about_certifications,
      id: "certifications",
      content: (
        <div className="space-y-4">
          {certifications.map(
            (
              cert,
              i // 'i' burada tanımlandı
            ) => (
              <motion.div key={cert.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.2 }} viewport={{ once: false, amount: 0.5 }}>
                <CertificationCard title={cert.title} institution={cert.institution} date={cert.date} buttonText={aboutContent.about_certifications_button} />
              </motion.div>
            )
          )}
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="mb-20">
      {/* Başlık */}
      <div className="text-center pt-16 pb-8 px-4 mb-5">
        <h2 className="text-4xl font-bold mb-4">{aboutContent.about_title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-600 mx-auto rounded"></div>
      </div>

      {/* Hakkımda: Resim ve Yazı */}
      <div className="md:grid md:grid-cols-2 items-center mb-16 px-5">
        <motion.div initial={{ x: -150, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.9 }} viewport={{ once: false, amount: 0.85 }} className="flex justify-center">
          <Image src="/images/about-image.png" width={475} height={475} alt="About Me" />
        </motion.div>

        <motion.div initial={{ x: 150, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.9 }} viewport={{ once: false, amount: 0.85 }} className="mt-4 md:mt-0 flex flex-col">
          <p className="text-base lg:text-lg mb-6 text-justify">{aboutContent.about_description}</p>
        </motion.div>
      </div>

      {/* Sekme Geçişleri: Skills / Publications / Certifications */}
      <div className="px-4 xl:px-16">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {TAB_DATA.map((t) => (
            <TabButton key={t.id} selectTab={() => setTab(t.id)} active={tab === t.id}>
              {t.title}
            </TabButton>
          ))}
        </div>
        <motion.div className="max-w-5xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: false }}>
          {TAB_DATA.find((t) => t.id === tab).content}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
