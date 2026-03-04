'use client';

import { useRef, useEffect, useState } from 'react';

const stats = [
  {
    value: '6+',
    label: 'лет работы',
    description: 'с 2019 года',
  },
  {
    value: '500+',
    label: 'мероприятий',
    description: 'реализовано',
  },
  {
    value: '500K+',
    label: 'участников',
    description: 'на наших событиях',
  },
  {
    value: '55+',
    label: 'площадок',
    description: 'по всей Москве',
  },
  {
    value: '10+',
    label: 'федеральных заказчиков',
    description: 'доверяют нам',
  },
  {
    value: 'до 150 млн',
    label: 'бюджет проектов',
    description: 'от 2.5 млн рублей',
  },
];

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '-100px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-section-medium text-gray-500 mb-4 block uppercase tracking-wider">
            О компании
          </span>
          <h2 className="text-section-title text-[#1E1E1E] mb-8">
            UP2U — креативное ивент-агентство
          </h2>
          <p className="text-section-body text-gray-600 max-w-3xl mx-auto">
            Создаём масштабные городские, корпоративные и культурные проекты по всей России.
            С 2019 года команда реализует события, которые объединяют людей, бренды и города —
            от федеральных фестивалей и городских праздников до камерных корпоративных форматов.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-[#F1F1F1] p-8 hover:bg-gray-200 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-2">
                  {stat.value}
                </div>
                <div className="text-section-medium text-[#1E1E1E] mb-1">
                  {stat.label}
                </div>
                <div className="text-section-body text-gray-500">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div 
          className={`mt-16 bg-black p-12 md:p-16 text-white transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-section-title text-white mb-6">Наша миссия</h3>
            <p className="text-section-body text-[#F1F1F1]">
              Превращать идеи в эмоции, а эмоции — в запоминающиеся впечатления.
              Мы специализируемся на разработке концепций, режиссуре, продюсировании
              и технической реализации мероприятий любого масштаба.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
