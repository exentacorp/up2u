'use client';

import { motion } from 'framer-motion';
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
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: index === currentSlide ? 1 : 0,
            scale: index === currentSlide ? 1 : 1.1
          }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0"
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
        </motion.div>
      ))}

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[oklch(0.72_0.18_150/0.1)] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[oklch(0.72_0.18_150/0.1)] rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="text-6xl md:text-8xl font-bold tracking-tight drop-shadow-2xl">
              UP<span className="text-[oklch(0.72_0.18_150)]">2</span>U
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/70 mb-8 tracking-wide"
          >
            ИВЕНТ-АГЕНТСТВО ПОЛНОГО ЦИКЛА
          </motion.p>

          {/* Animated Title */}
          <div className="relative h-24 md:h-32 mb-4">
            {slides.map((slide, index) => (
              <motion.h1
                key={slide.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: index === currentSlide ? 1 : 0, 
                  y: index === currentSlide ? 0 : 30 
                }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-5xl lg:text-6xl font-bold absolute left-0 right-0 drop-shadow-lg"
              >
                {slide.title}
              </motion.h1>
            ))}
          </div>

          {/* Subtitle */}
          <div className="relative h-8 mb-10">
            {slides.map((slide, index) => (
              <motion.p
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentSlide ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl md:text-2xl text-white/80 absolute left-0 right-0"
              >
                {slide.subtitle}
              </motion.p>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
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
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16"
          >
            {[
              { value: '6+', label: 'лет работы' },
              { value: '500+', label: 'мероприятий' },
              { value: '500K+', label: 'участников' },
              { value: '150+', label: 'партнёров' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-[oklch(0.72_0.18_150)]">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Slide Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3"
        >
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
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 12, 0] }}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2"
        >
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-white/60"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
