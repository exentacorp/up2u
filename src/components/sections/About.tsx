'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Calendar, Users, Award, MapPin, Briefcase, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Calendar,
    value: 6,
    suffix: '+',
    label: 'лет работы',
    description: 'с 2019 года',
  },
  {
    icon: Briefcase,
    value: 500,
    suffix: '+',
    label: 'мероприятий',
    description: 'реализовано',
  },
  {
    icon: Users,
    value: 500000,
    suffix: '+',
    label: 'участников',
    description: 'на наших событиях',
  },
  {
    icon: MapPin,
    value: 55,
    suffix: '+',
    label: 'площадок',
    description: 'по всей Москве',
  },
  {
    icon: Award,
    value: 10,
    suffix: '+',
    label: 'федеральных заказчиков',
    description: 'доверяют нам',
  },
  {
    icon: TrendingUp,
    value: 150,
    prefix: 'до ',
    suffix: ' млн',
    label: 'бюджет проектов',
    description: 'от 2.5 млн рублей',
  },
];

function AnimatedNumber({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'М';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

export function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[oklch(0.72_0.18_150)] font-semibold text-lg mb-2 block">
            О компании
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[oklch(0.31_0.04_250)] mb-6">
            UP2U — креативное ивент-агентство
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Создаём масштабные городские, корпоративные и культурные проекты по всей России.
            С 2019 года команда реализует события, которые объединяют людей, бренды и города —
            от федеральных фестивалей и городских праздников до камерных корпоративных форматов.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-[oklch(0.97_0_0)] rounded-2xl p-6 md:p-8 hover:bg-[oklch(0.95_0_0)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-[oklch(0.72_0.18_150/0.2)]">
                <div className="flex items-start justify-between mb-4">
                  <stat.icon className="h-8 w-8 text-[oklch(0.72_0.18_150)]" />
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[oklch(0.31_0.04_250)] mb-2">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <div className="text-lg font-semibold text-[oklch(0.31_0.04_250)] mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-br from-[oklch(0.72_0.18_150)] to-[oklch(0.55_0.15_150)] rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Наша миссия</h3>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              Превращать идеи в эмоции, а эмоции — в запоминающиеся впечатления.
              Мы специализируемся на разработке концепций, режиссуре, продюсировании
              и технической реализации мероприятий любого масштаба.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
