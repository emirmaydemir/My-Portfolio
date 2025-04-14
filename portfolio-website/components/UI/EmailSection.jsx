"use client";
import React, { useState } from "react";
import GithubIcon from "@/public/github-icon.svg";
import LinkedinIcon from "@/public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Animasyon ayarları
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const EmailSection = ({ emailContent }) => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  };

  return (
    <motion.section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}>
      {/* Arka plan efekti */}
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2" />

      {/* Sol taraf - metin ve sosyal linkler */}
      <motion.div className="z-10" variants={itemVariants}>
        <h5 className="text-xl font-bold text-black dark:text-white my-2">{emailContent.email_title}</h5>
        <p className="text-gray-700 dark:text-[#ADB7BE] mb-4 max-w-md">{emailContent.email_description}</p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/emirmaydemir" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" className="invert dark:invert-0" />
          </Link>
          <Link href="https://www.linkedin.com/in/emir-muhammet-aydemir/" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" className="invert dark:invert-0" />
          </Link>
        </div>
      </motion.div>

      {/* Sağ taraf - form */}
      <motion.div variants={itemVariants}>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">{emailContent.email_mail}</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-black dark:text-white block mb-2 text-sm font-medium">
                {emailContent.email_mail}
              </label>
              <input name="email" type="email" id="email" required className="bg-white dark:bg-[#18191E] border border-gray-300 dark:border-[#33353F] placeholder-gray-500 dark:placeholder-[#9CA2A9] text-black dark:text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="emir@google.com" />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-black dark:text-white block text-sm mb-2 font-medium">
                {emailContent.email_subject}
              </label>
              <input name="subject" type="text" id="subject" required className="bg-white dark:bg-[#18191E] border border-gray-300 dark:border-[#33353F] placeholder-gray-500 dark:placeholder-[#9CA2A9] text-black dark:text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder={emailContent.email_subject_description} />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-black dark:text-white block text-sm mb-2 font-medium">
                {emailContent.email_message}
              </label>
              <textarea name="message" id="message" className="bg-white dark:bg-[#18191E] border border-gray-300 dark:border-[#33353F] placeholder-gray-500 dark:placeholder-[#9CA2A9] text-black dark:text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder={emailContent.email_message_description} />
            </div>
            <button type="submit" className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
              {emailContent.email_button_text}
            </button>
          </form>
        )}
      </motion.div>
    </motion.section>
  );
};

export default EmailSection;
