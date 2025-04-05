// components/MediaCarousel.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Swiper navigasyon modülünü import ediyoruz
import "swiper/css";
import "swiper/css/navigation"; // Navigasyon stilleri
import { motion } from "framer-motion";

export default function MediaCarousel({ media }) {
  return (
    <div className="mt-8 relative">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation={true} // Navigasyon oklarını aktif ediyoruz
        modules={[Navigation]}
      >
        {media.map((mediaItem, index) => (
          <SwiperSlide key={index}>
            <motion.img src={mediaItem} alt={`Media ${index + 1}`} className="w-full h-auto rounded-lg shadow-lg" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: index * 0.2 }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
