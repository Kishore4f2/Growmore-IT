import React from 'react';
import './HeroCarousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const defaultSlides = [
  {
    title: 'Empowering Growth Through Technology',
    subtitle: 'Modern solutions that accelerate your digital transformation.',
    image: '/Growmore.jpg'
  },
  {
    title: 'Build Experiences Your Users Love',
    subtitle: 'Web, mobile, and platforms crafted for performance.',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Cloud, Data, and AI',
    subtitle: 'Operate securely, scale globally, innovate faster.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Design That Converts',
    subtitle: 'Premium UI/UX that turns visitors into customers.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop'
  }
];

const HeroCarousel = ({ slides = defaultSlides, onPrimary }) => {
  return (
    <section className="hc-hero">
      {/* Fallback background in case Swiper assets fail to mount */}
      <div className="hc-fallback" style={{ backgroundImage: `url('${(slides && slides[0] && slides[0].image) || defaultSlides[0].image}')` }} />
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade, Parallax]}
        effect="fade"
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5200, disableOnInteraction: false }}
        speed={900}
        className="hc-swiper"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="hc-slide active" style={{ backgroundImage: `url('${s.image}')` }}>
              <div className="hc-overlay" />
              <div className="hc-content" data-swiper-parallax="-120">
                <h1>{s.title}</h1>
                <p>{s.subtitle}</p>
                <div className="hc-cta">
                  <button className="btn btn-primary" onClick={onPrimary}>Explore Services</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroCarousel;


