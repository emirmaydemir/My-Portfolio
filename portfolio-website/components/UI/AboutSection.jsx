"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import TabButton from "@/components/UI/TabButton";
import CertificationCard from "@/components/UI/CertificationCard";
import PublicationCard from "@/components/UI/PublicationCard";
import { motion, useInView } from "framer-motion";

const AboutSection = ({ aboutContent, certifications, publications }) => {
  const [tab, setTab] = useState("certifications");

  const imageRef = useRef(null);
  const textRef = useRef(null);

  const isImageInView = useInView(imageRef, { once: false, amount: 0.6 });
  const isTextInView = useInView(textRef, { once: false, amount: 0.6 });

  const handleShowPublication = (publication) => {
    // Buton işlevselliğini buraya ekleyebilirsin.
    window.open(publication.link, "_blank");
  };

  // Sekme içeriği tanımlamaları
  const TAB_DATA = [
    {
      title: aboutContent.about_skill,
      id: "skills",
      content: (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {[".NET Core", "C#", "Rest API", "EF Core", "Clean Architecture", "SOLID", "Multi-Project Solution", "CI/CD", "CQRS and Mediator pattern", "ERP Software", "Dependency Injection", "SignalR", "OOP", "Data Structures", "React.js", "Next.js", "CSS", "Tailwind CSS", "Bootstrap", "TypeScript", "JavaScript", "Mobx", "AutoMapper", "XML", "JSON", "Visual Studio", "Android Studio", "Java", "Firebase", "SDK", "IIS Server", "SQL", "LINQ", "AWS S3", "Git", "GitHub", "Subversion", "Postman", "Unit Testing", "Python"].map((skill, i) => (
            <div key={i} className="w-36 h-12 max-[420px]:w-28 max-[440px]:h-10 flex items-center justify-center rounded-full shadow-lg bg-gradient-to-r from-gray-700 to-gray-800 hover:from-primary-500 hover:to-secondary-600 transition-transform duration-300 transform hover:scale-105 px-2">
              <span className="text-xs lg:text-sm font-medium text-white text-center">{skill}</span>
            </div>
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
                <CertificationCard title={cert.title} institution={cert.institution} date={cert.date} buttonText={aboutContent.about_certifications_button} link={cert.link} />
              </motion.div>
            )
          )}
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="mb-5 sm:mb-20 ">
      {/* Başlık */}
      <div className="text-center pt-16 pb-8 px-4 mb-5">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{aboutContent.about_title}</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-600 mx-auto rounded"></div>
      </div>

      {/* Hakkımda: Resim ve Yazı */}
      <div className="xl:grid xl:grid-cols-2 items-center mb-16 px-5">
        {/* Resim */}
        <motion.div ref={imageRef} initial={{ x: -100, opacity: 0 }} animate={isImageInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="flex justify-center mb-5">
          <Image src="/images/about-image.png" width={475} height={475} alt="About Me" />
        </motion.div>

        {/* Yazı */}
        <motion.div ref={textRef} initial={{ x: 100, opacity: 0 }} animate={isTextInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} className="mt-4 md:mt-0 flex flex-col">
          <p className="text-sm lg:text-base xl:text-base 2xl:text-xl mb-6 text-justify">{aboutContent.about_description}</p>
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
