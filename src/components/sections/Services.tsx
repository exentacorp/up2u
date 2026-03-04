'use client';

import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const serviceCategories = [
  {
    id: 'sport',
    title: 'Спортивные события',
    description: 'Городские спортивные фестивали и уикенды с массовыми активностями',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
    services: [
      'Многопрофильные активности и перформансы',
      'Дни спорта и Олимпийские дни',
      'Марафоны и велофестивали',
      'Праздники ГТО',
      'День футбола, День бега',
    ],
  },
  {
    id: 'culture',
    title: 'Культурные проекты',
    description: 'Городские фестивали и сезонные программы для всех возрастов',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    services: [
      'Акустические и камерные концерты',
      'Театрализованные перформансы',
      'Литературные вечера',
      'Арт-пространства под открытым небом',
      'Творческие мастерские',
    ],
  },
  {
    id: 'corporate',
    title: 'Корпоративные мероприятия',
    description: 'Team building, конференции и корпоративные праздники любой масштаба',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    services: [
      'Тимбилдинги и корпоративные праздники',
      'Конференции и бизнес-форумы',
      'Презентации продуктов',
      'Юбилеи компаний',
      'Новогодние мероприятия',
    ],
  },
  {
    id: 'city',
    title: 'Городские праздники',
    description: 'Масштабные городские мероприятия и общественные события',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
    services: [
      'Дни города',
      'Национальные праздники',
      'Патриотические мероприятия',
      'Сезонные фестивали',
    ],
  },
  {
    id: 'tech',
    title: 'Технологические решения',
    description: 'VR/AR проекты и инновационные форматы для презентаций',
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800&q=80',
    services: [
      'VR-проекты для презентаций',
      'AR-решения и интерактивная навигация',
      'R&D и маркетинговые стратегии',
    ],
  },
  {
    id: 'additional',
    title: 'Дополнительные услуги',
    description: 'Полный спектр сервисов для организации мероприятий',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80',
    services: [
      'Разработка концепций',
      'Техническая реализация',
      'Анимация и ведущие',
      'Декор и оформление',
    ],
  },
];

export function Services({ showAll = false }: { showAll?: boolean }) {
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

  const displayedServices = showAll ? serviceCategories : serviceCategories.slice(0, 3);

  return (
    <section id="services" ref={containerRef} className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-section-medium text-gray-500 mb-4 block uppercase tracking-wider">
            Наши услуги
          </span>
          <h2 className="text-section-title text-[#1E1E1E] mb-8">
            Что мы предлагаем
          </h2>
          <p className="text-section-body text-gray-600 max-w-3xl mx-auto">
            Полный цикл организации мероприятий: от разработки концепции до технической реализации
          </p>
        </div>

        {/* Service Categories */}
        <div className={`grid gap-6 md:gap-8 mb-10 ${showAll ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-3'}`}>
          {displayedServices.map((category, index) => (
            <div
              key={category.id}
              className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white border border-gray-200 h-full hover:border-black transition-all duration-300 group">
                {/* Header with Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale"
                  />
                  <div className="absolute inset-0 bg-black/60" />
                  <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-section-medium text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>
                
                {/* Services List */}
                <div className="p-6">
                  <p className="text-section-body text-gray-600 bg-[#F1F1F1] p-3 -mx-6 -mt-6 mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.services.slice(0, showAll ? undefined : 4).map((service, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-black mt-2 flex-shrink-0" />
                        <span className="text-section-body text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && (
          <div className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '800ms' }}>
            <Link href="/services">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg font-medium"
              >
                Все услуги
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
