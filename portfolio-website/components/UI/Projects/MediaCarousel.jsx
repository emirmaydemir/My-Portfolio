// components/MediaCarousel.jsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Swiper navigasyon modülünü import ediyoruz
import "swiper/css";
import "swiper/css/navigation"; // Navigasyon stilleri
import { motion } from "framer-motion";

export default function MediaCarousel({ title, media }) {
  return (
    <div className="mt-8 relative">
      <Swiper spaceBetween={10} slidesPerView={1} navigation={true} modules={[Navigation]}>
        {media.map((mediaItem, index) => (
          <SwiperSlide key={index}>{mediaItem.type === "image" ? <motion.img src={mediaItem.src} alt={`${title} ${index + 1}`} className="max-w-[1000px] h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-lg shadow-lg border border-gray-400 object-contain mx-auto" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: index * 0.2 }} /> : <motion.video src={mediaItem.src} controls className="max-w-[1000px] h-[500px] w-full rounded-lg shadow-lg border border-gray-400 object-contain mx-auto" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: index * 0.2 }} />}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
