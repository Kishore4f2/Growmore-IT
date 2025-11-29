import React from 'react';
import './ServiceCarousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FALLBACK_IMAGES = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop'
];

const ServiceCarousel = ({ images = [], height = 220, ariaLabel = 'Service screenshots' }) => {
  const imgs = Array.isArray(images) && images.length > 0 ? images : FALLBACK_IMAGES;
  const onImgErr = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = FALLBACK_IMAGES[0];
  };
  return (
    <div className="svc-wrap" style={{ height }} role="region" aria-label={ariaLabel}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={12}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3800, disableOnInteraction: false }}
        speed={600}
        className="svc-swiper"
      >
        {imgs.map((src, i) => (
          <SwiperSlide key={i} aria-hidden="false">
            <div className="svc-slide">
              <img src={src} loading="lazy" alt={`Screenshot ${i + 1}`} onError={onImgErr} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceCarousel;


