import React from 'react';
import './ServiceCarousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ServiceCarousel = ({ images = [], height = 220, ariaLabel = 'Service screenshots' }) => {
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
        {images.map((src, i) => (
          <SwiperSlide key={i} aria-hidden="false">
            <div className="svc-slide">
              <img src={src} loading="lazy" alt={`Screenshot ${i + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceCarousel;


