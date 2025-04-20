"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const HeroSection = ({ heroContent }) => {
  const { language } = useLanguage();
  return (
    <section className="lg:py-16">
      <style jsx>{`
        @media (max-width: 1023px) {
          .custom-heading {
            font-size: 1.6rem; /* 28px - biraz daha küçük */
            line-height: 1.2;
          }
        }

        @media (min-width: 1024px) and (max-width: 1279px) {
          .custom-heading {
            font-size: 2.7rem; /* Örnek: lg ile 7xl yerine daha küçük bir boyut */
            line-height: 1.3;
          }
        }

        @media (min-width: 1279px) and (max-width: 1535px) {
          .custom-heading {
            font-size: 3.5rem; /* Örnek: lg ile 7xl yerine daha küçük bir boyut */
            line-height: 1.3;
          }
        }

        @media (min-width: 1024px) and (max-width: 1100px) {
          .hero-image-custom-size {
            width: 20rem !important;
            height: 20rem !important;
          }
        }

        @media (min-width: 1024px) and (max-width: 1535px) {
          .custom-description {
            font-size: 1.125rem; /* 18px — normalde lg:text-base (16px idi) */
            line-height: 1.4;
            text-align: justify;
          }
        }
      `}</style>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Text, Headings & Buttons */}
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-12 lg:col-span-8 place-self-center text-center lg:text-left">
          {/* Title */}
          <h1 className="text-black dark:text-white mb-4 text-3xl sm:text-4xl lg:text-7xl lg:leading-normal font-extrabold custom-heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              {heroContent.hero_title}, {heroContent.hero_subtitle}
            </span>
            <br />
            <TypeAnimation sequence={heroContent.hero_sequence} wrapper="span" speed={50} repeat={Infinity} />
          </h1>
          {/* Description */}
          <p className="text-sm lg:text-base 2xl:text-xl dark:text-[#ADB7BE] mb-9 text-justify lg:text-left custom-description">{heroContent.hero_description}</p>

          {/* Mobile (<1024px): Card layout */}
          <div className="lg:hidden p-4 bg-gray-800 rounded-2xl shadow-md flex items-center mb-4">
            <div className="relative w-32 h-32 flex-shrink-0 mr-4">
              <Image width={160} height={160} src="/images/hero-image.webp" alt="emir-aydemir-image" className="rounded-full object-cover" sizes="(max-width: 768px) 160px, (min-width: 769px) 300px" />
            </div>
            <div className="flex flex-col space-y-2 flex-1">
              {/* Contact Button */}
              <Link href={language === "en" ? "/en/#contact" : "/#contact"} className="px-3 py-1.5 text-sm rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 hover:shadow-lg hover:scale-105 transition-all text-white text-center">
                {heroContent.hero_contact}
              </Link>
              {/* CV Download Button */}
              <a href="/emir-aydemir-cv.pdf" download className="p-[2px] rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-blue-600 hover:to-blue-800 hover:shadow-lg hover:scale-105 transition-all">
                <span className="block px-3 py-1.5 text-sm bg-[#121212] rounded-full text-white text-center">{heroContent.hero_cv}</span>
              </a>
            </div>
          </div>

          {/* Desktop & Medium (>=1024px): Horizontal buttons */}
          <div className="hidden lg:flex items-center mb-8">
            {/* Contact */}
            <Link href={language === "en" ? "/en/#contact" : "/#contact"} className="px-4 py-2 text-sm lg:px-6 lg:py-3 lg:text-base rounded-full mr-4 w-full lg:w-fit bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 hover:shadow-lg hover:scale-105 transition-all text-white">
              {heroContent.hero_contact}
            </Link>
            {/* CV */}
            <a href="/emir-aydemir-cv.pdf" download className="p-[4px] rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-blue-600 hover:to-blue-800 hover:shadow-lg hover:scale-105 transition-all">
              <span className="block px-5 py-2 text-sm lg:text-base bg-[#121212] rounded-full text-white text-center">{heroContent.hero_cv}</span>
            </a>
          </div>
        </motion.div>

        {/* Medium & Desktop Image: show >=1024px */}
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="hidden lg:block col-span-4 place-self-start ml-10 lg:mt-0">
          <div className="rounded-full bg-[#4b656d] w-[20px] h-[20px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] 2xl:w-[400px] 2xl:h-[400px] relative mx-auto hero-image-custom-size">
            <Image src="/images/hero-image.webp" alt="emir-aydemir-image" className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" width={300} height={300} priority />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
