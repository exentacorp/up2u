'use client';

import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: 'Создаём события, которые запоминаются',
    subtitle: 'Креативный подход к каждому проекту',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80',
    position: 'center',
  },
  {
    id: 2,
    title: 'Масштабные городские проекты',
    subtitle: 'Более 100 000 участников на наших мероприятиях',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920&q=80',
    position: 'center top',
  },
  {
    id: 3,
    title: 'Корпоративные мероприятия под ключ',
    subtitle: 'От идеи до реализации — полный цикл продюсирования',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80',
    position: 'center',
  },
  {
    id: 4,
    title: 'Спортивные фестивали и марафоны',
    subtitle: 'Всероссийские и региональные спортивные события',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&q=80',
    position: 'center',
  },
  {
    id: 5,
    title: 'Концерты и шоу-программы',
    subtitle: 'Яркие выступления и незабываемые шоу',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&q=80',
    position: 'center',
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              backgroundPosition: slide.position
            }}
          />
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/70" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-6xl mx-auto pt-32 md:pt-40 pb-16 md:pb-20">
          
          {/* Main Title */}
          <p className="text-hero-subtitle text-[#F1F1F1] mb-8 md:mb-12 tracking-widest">
            ИВЕНТ-АГЕНТСТВО ПОЛНОГО ЦИКЛА
          </p>

          {/* Animated Title */}
          <div className="relative h-32 md:h-40 mb-6">
            {slides.map((slide, index) => (
              <h1
                key={slide.id}
                className={`text-section-title text-white absolute left-0 right-0 transition-all duration-600 ${
                  index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {slide.title}
              </h1>
            ))}
          </div>

          {/* Subtitle */}
          <div className="relative h-10 mb-12 md:mb-16">
            {slides.map((slide, index) => (
              <p
                key={slide.id}
                className={`text-section-body text-[#F1F1F1] absolute left-0 right-0 transition-all duration-600 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {slide.subtitle}
              </p>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 md:mb-24">
            <Button
              size="lg"
              className="btn-primary px-12 py-6 text-lg font-medium"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Оставить заявку
            </Button>
            <Button
              size="lg"
              className="btn-outline px-12 py-6 text-lg font-medium"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Наши услуги
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-6 md:pt-8 border-t border-white/10">
            {[
              { value: '6+', label: 'лет работы' },
              { value: '500+', label: 'мероприятий' },
              { value: '500K+', label: 'участников' },
              { value: '150+', label: 'партнёров' },
            ].map((stat) => (
              <div key={stat.label} className="text-center py-2">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">
                  {stat.value}
                </div>
                <div className="text-section-body text-[#F1F1F1]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
