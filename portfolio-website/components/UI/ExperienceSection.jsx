import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Software Developer",
    company: "Zeugma Yazılım - Tam Zamanlı",
    date: "Temmuz 2021 - Halen",
    description: "Zeugma Şirketinde OfficeSharp Enterprise Resource Planning (ERP) Programının geliştirme ekibindeyim. Bu ekibimiz .Net Framework ile backend geliştirme yapmaktadır. Masaüstü uygulamalarının yanında E-Ofis şirketinin mobil uygulaması için Flutter üzerinde çalışıyorum.",
    icon: "work",
    url: "https://zeugma.com.tr",
  },
  {
    title: "Stajyer",
    company: "Motor Aşin Otomotiv A.Ş. - Stajyer",
    date: "Eylül 2017 - Haziran 2018",
    description: "Motor Aşin firmasında stajyer olarak web geliştirme sürecinde yer aldım. Şirketin web sitesinin hazırlanması ve IT ekibinin sanal makineler üzerinden çalışan yetkilerini düzenlemesine destek verdim.",
    icon: "work",
    url: "https://motorasin.com.tr",
  },
  {
    title: "Computer Engineering",
    company: "Marmara University",
    date: "2019 - 2023",
    description: "Marmara Üniversitesi'nde 3. sınıf bilgisayar mühendisliği öğrencisiyim.",
    icon: "education",
    url: "https://marmara.edu.tr",
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-16 px-4 sm:px-8 max-w-5xl mx-auto" id="experience">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Deneyimlerim & <span className="text-yellow-400">Eğitimlerim</span>
      </h2>

      <div className="space-y-16">
        {experiences.map((exp, idx) => (
          <a key={idx} href={exp.url} target="_blank" rel="noopener noreferrer" className="relative flex items-stretch">
            {/* Soldaki ikon ve çizgi */}
            <div className="relative flex flex-col items-center mr-6">
              <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black shadow-lg z-10">{exp.icon === "work" ? <Briefcase size={20} /> : <GraduationCap size={20} />}</div>

              {/* Çizgi: varsa kalan alanı dolduracak */}
              <div className="w-px bg-white flex-1"></div>
            </div>

            {/* Sağdaki deneyim içeriği */}
            <div className="bg-[#1f1f1f] p-5 rounded-xl border border-gray-700 hover:border-yellow-400 transition duration-300 flex-1">
              <p className="text-sm text-gray-400 mb-1">{exp.date}</p>
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <p className="text-md text-yellow-400 mb-2">{exp.company}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{exp.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
