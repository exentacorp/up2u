'use client';

import { ArrowDown, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: 'Создаём события, которые запоминаются',
    subtitle: 'Креативное ивент-агентство полного цикла',
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          {/* Multi-layer gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
          {/* Brand color overlay */}
          <div className="absolute inset-0 bg-[oklch(0.72_0.18_150/0.1)]" />
        </div>
      ))}

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[oklch(0.72_0.18_150/0.1)] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[oklch(0.72_0.18_150/0.1)] rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Logo */}
          <div className="mb-6 animate-scale-in">
            <span className="text-6xl md:text-8xl font-bold tracking-tight drop-shadow-2xl">
              UP<span className="text-[oklch(0.72_0.18_150)]">2</span>U
            </span>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-white/70 mb-8 tracking-wide animate-fade-in-delay-1">
            ИВЕНТ-АГЕНТСТВО ПОЛНОГО ЦИКЛА
          </p>

          {/* Animated Title */}
          <div className="relative h-24 md:h-32 mb-4">
            {slides.map((slide, index) => (
              <h1
                key={slide.id}
                className={`text-3xl md:text-5xl lg:text-6xl font-bold absolute left-0 right-0 drop-shadow-lg transition-all duration-600 ${
                  index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {slide.title}
              </h1>
            ))}
          </div>

          {/* Subtitle */}
          <div className="relative h-8 mb-10">
            {slides.map((slide, index) => (
              <p
                key={slide.id}
                className={`text-xl md:text-2xl text-white/80 absolute left-0 right-0 transition-all duration-600 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {slide.subtitle}
              </p>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            <Button
              size="lg"
              className="bg-[oklch(0.72_0.18_150)] hover:bg-[oklch(0.55_0.15_150)] text-white px-10 py-7 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Оставить заявку
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/20 px-10 py-7 text-lg rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="mr-2 h-5 w-5" />
              Наши услуги
            </Button>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 animate-fade-in-delay-3">
            {[
              { value: '6+', label: 'лет работы' },
              { value: '500+', label: 'мероприятий' },
              { value: '500K+', label: 'участников' },
              { value: '150+', label: 'партнёров' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[oklch(0.72_0.18_150)]">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 animate-fade-in-delay-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? 'bg-[oklch(0.72_0.18_150)] w-10'
                  : 'bg-white/30 hover:bg-white/50 w-6'
              }`}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-scroll" />
          </div>
        </div>
      </div>
    </section>
  );
}
