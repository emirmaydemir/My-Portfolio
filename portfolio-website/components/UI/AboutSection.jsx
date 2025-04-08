"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "@/components/UI/TabButton";
import CertificationCard from "@/components/UI/CertificationCard";
import PublicationCard from "@/components/UI/PublicationCard";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  // Sertifikalar verileri
  const certifications = [
    {
      id: 1,
      title: "Next.js 15 & React - The Complete Guide",
      institution: "Udemy",
      date: "Yayınlama Eki 2024",
    },
    {
      id: 2,
      title: "Complete guide to building an app with .Net Core and React",
      institution: "Udemy",
      date: "Yayınlama Kas 2023",
    },
    {
      id: 3,
      title: "Android Mobil Uygulama Kursu: Kotlin & Java",
      institution: "Udemy",
      date: "Yayınlama Mar 2021",
    },
    {
      id: 4,
      title: "JavaScript Algorithms and Data Structures",
      institution: "freeCodeCamp",
      date: "Yayınlama Nisan 2025",
    },
  ];

  // Yayınlar verileri
  const publications = [
    {
      id: 1,
      title: "Note Ideas Not Defteri",
      date: "9 Haz 2021",
      description: "Android Studio üzerinde Java programlama dili ile yazılmış bir not uygulamasıdır. Veritabanı tarafında ise SQL nesneleri ile çalışmayı kolaylaştıran Room kütüphanesi kullanılmıştır.",
    },
    {
      id: 2,
      title: "İnoksist Endüstri Paslanmaz Civata Paslanmaz Somun",
      date: "23 Ekim 2024",
      description: "Bu proje, paslanmaz civata firması için Next.js ve React kullanılarak geliştirilen modern ve kullanıcı dostu bir web sitesi olup, dinamik içerik yönetimi ve responsive tasarım özellikleri taşımaktadır.",
    },
  ];

  const handleShowPublication = (publication) => {
    // Buton işlevselliğini buraya ekleyebilirsin.
    alert(`Yayın: ${publication.title}`);
  };

  // Sekme içeriği tanımlamaları
  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {[".NET Core", "C#", "Rest API", "Clean Architecture", "Multi-Project Solution", "CI/CD", "CQRS and Mediator pattern", "ERP Software", "Dependency Injection", "SignalR", "OOP", "Data Structures", "React.js", "Next.js", "CSS", "Tailwind CSS", "Bootstrap", "TypeScript", "JavaScript", "Mobx", "AutoMapper", "XML", "JSON", "Visual Studio", "Android Studio", "Android Development", "Java", "Firebase", "SDK", "JDBC", "SQL", "Database Management", "AWS S3", "Git", "GitHub", "Subversion", "Postman", "Unit Testing", "xUnit", "Python"].map((skill, i) => (
            <div key={i} className="w-36 h-12 flex items-center justify-center rounded-full shadow-lg bg-gradient-to-r from-gray-700 to-gray-800 hover:from-primary-500 hover:to-secondary-600 transition-transform duration-300 transform hover:scale-105 px-2">
              <span className="text-sm font-medium text-white text-center">{skill}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Publications",
      id: "publications",
      content: (
        <div className="space-y-6">
          {publications.map((pub) => (
            <PublicationCard key={pub.id} title={pub.title} date={pub.date} description={pub.description} onShow={() => handleShowPublication(pub)} />
          ))}
        </div>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <div className="space-y-4">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} title={cert.title} institution={cert.institution} date={cert.date} />
          ))}
        </div>
      ),
    },
  ];

  return (
    <section className="text-white mb-20" id="about">
      {/* Başlık */}
      <div className="text-center pt-16 pb-8 px-4 mb-5">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-600 mx-auto rounded"></div>
      </div>

      {/* Hakkımda: Resim ve Yazı */}
      <div className="md:grid md:grid-cols-2 items-start mb-16 px-5">
        <div className="flex justify-center">
          <Image src="/images/about-image.png" width={475} height={475} alt="Hakkımda" />
        </div>
        <div className="mt-4 md:mt-0 flex flex-col">
          <p className="text-base lg:text-lg mb-6 text-justify">I am a Computer Engineer with 4 years of Full Stack development experience, driven by continuous improvement and a strong interest in emerging technologies. On the backend, I develop RESTful APIs using .NET Core, and efficiently utilize SQL databases along with cloud services such as AWS S3. I manage CI/CD pipelines through GitHub Actions and prioritize sustainability by writing Unit Tests for every piece of code. On the frontend, I build fast, user-centric, and modern interfaces with React and TypeScript, while adhering to UI/UX principles. I actively contribute to projects that involve transforming multi-layered desktop ERP applications into modern web-based architectures by applying software design patterns such as Clean Architecture. Additionally, I develop corporate websites using Next.js as a freelancer. My strongest assets are my analytical thinking, problem-solving skills, and dedication to software quality.</p>
        </div>
      </div>

      {/* Sekme Geçişleri: Skills / Publications / Certifications */}
      <div className="px-4 xl:px-16">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          {TAB_DATA.map((t) => (
            <TabButton key={t.id} selectTab={() => handleTabChange(t.id)} active={tab === t.id}>
              {t.title}
            </TabButton>
          ))}
        </div>
        <div className="transition-opacity duration-300 ease-in-out max-w-5xl mx-auto">{TAB_DATA.find((t) => t.id === tab).content}</div>
      </div>
    </section>
  );
};

export default AboutSection;
