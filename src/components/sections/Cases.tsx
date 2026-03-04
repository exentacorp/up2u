'use client';

import { useRef, useState, useEffect } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export interface CaseItem {
  id: number;
  title: string;
  category: string;
  description: string;
  stats?: { label: string; value: string }[];
  date: string;
  location?: string;
  type: 'federal' | 'city' | 'corporate' | 'culture' | 'sport' | 'tech';
  image: string;
}

export const casesData: CaseItem[] = [
  {
    id: 1,
    title: 'Концерт к Международному женскому дню',
    category: 'Корпоративное мероприятие',
    description: 'Праздник превратил городской зал в атмосферу тепла, музыки и признательности.',
    stats: [{ label: 'участников', value: '500' }],
    date: 'Март 2021',
    location: 'г. Корсаков',
    type: 'corporate',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
  },
  {
    id: 2,
    title: '«Октамен» — профориентационный квест',
    category: 'Образовательный проект',
    description: 'Дети отправились в захватывающее путешествие по миру профессий.',
    stats: [{ label: 'школьников', value: '1500' }],
    date: 'Февраль 2023',
    type: 'culture',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
  },
  {
    id: 3,
    title: 'День работников нефтяной и газовой промышленности «Роснефть»',
    category: 'Корпоративное мероприятие',
    description: 'Яркая шоу-программа и концерт сделали праздник событием регионального масштаба.',
    stats: [{ label: 'участников', value: '1500' }],
    date: 'Сентябрь 2023–2024',
    type: 'corporate',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  },
  {
    id: 4,
    title: 'Реконструкция боевых действий ВОВ',
    category: 'Патриотическое мероприятие',
    description: 'Зрелищные постановки оживили страницы истории.',
    stats: [{ label: 'зрителей', value: '7000' }],
    date: 'Август 2022–2025',
    type: 'culture',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80',
  },
  {
    id: 5,
    title: 'Всероссийский форум «ОстроVa»',
    category: 'Федеральный проект',
    description: 'Культурная программа форума объединила музыку, арт-проекты и интерактивные форматы.',
    stats: [{ label: 'участников', value: '2000' }],
    date: 'Август 2022–2024',
    type: 'federal',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
  },
  {
    id: 6,
    title: '75-летие спортивной отрасли Сахалинской области',
    category: 'Юбилейное мероприятие',
    description: 'Юбилей стал символом преемственности поколений и праздником спортивных достижений.',
    stats: [{ label: 'участников', value: '350' }],
    date: 'Декабрь 2022',
    type: 'sport',
    image: 'https://images.unsplash.com/photo-1461896836934-28e4b8ed0cd0?w=800&q=80',
  },
];

const typeLabels: Record<string, string> = {
  federal: 'Федеральный проект',
  city: 'Городской проект',
  corporate: 'Корпоративное',
  culture: 'Культурное',
  sport: 'Спортивное',
  tech: 'Технологии',
};

interface CasesProps {
  showAll?: boolean;
}

export function Cases({ showAll = false }: CasesProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const [filter, setFilter] = useState<string>('all');

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

  const filteredCases = filter === 'all' 
    ? casesData 
    : casesData.filter(c => c.type === filter);

  const displayedCases = showAll ? filteredCases : filteredCases.slice(0, 6);

  return (
    <section id="cases" ref={containerRef} className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-section-medium text-gray-500 mb-4 block uppercase tracking-wider">
            Наши проекты
          </span>
          <h2 className="text-section-title text-[#1E1E1E] mb-8">
            Кейсы и достижения
          </h2>
          <p className="text-section-body text-gray-600 max-w-3xl mx-auto">
            Более 500 реализованных проектов за 6 лет работы
          </p>
        </div>

        {/* Filters */}
        <div className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
          <Button
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'bg-black hover:bg-gray-800 text-white' : 'bg-transparent border-2 border-black text-black hover:bg-black hover:text-white'}
          >
            Все проекты
          </Button>
          {Object.entries(typeLabels).slice(0, 4).map(([type, label]) => (
            <Button
              key={type}
              onClick={() => setFilter(type)}
              className={filter === type ? 'bg-black hover:bg-gray-800 text-white' : 'bg-transparent border-2 border-black text-black hover:bg-black hover:text-white'}
            >
              {label}
            </Button>
          ))}
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedCases.map((caseItem, index) => (
            <div
              key={caseItem.id}
              className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white border border-gray-200 h-full hover:border-black transition-all duration-300 group">
                {/* Image */}
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white text-black px-3 py-1 text-sm font-medium">
                      {caseItem.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{caseItem.date}</span>
                    {caseItem.location && (
                      <>
                        <span className="mx-1">•</span>
                        <MapPin className="h-4 w-4" />
                        <span>{caseItem.location}</span>
                      </>
                    )}
                  </div>
                  
                  <h3 className="text-section-medium text-[#1E1E1E] mb-2">
                    {caseItem.title}
                  </h3>
                  
                  <p className="text-section-body text-gray-600 mb-4">
                    {caseItem.description}
                  </p>

                  {caseItem.stats && (
                    <div className="flex gap-4">
                      {caseItem.stats.map((stat) => (
                        <div key={stat.label} className="bg-[#F1F1F1] px-4 py-2">
                          <div className="text-lg font-bold text-[#1E1E1E]">{stat.value}</div>
                          <div className="text-sm text-gray-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && (
          <div className={`text-center mt-8 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '800ms' }}>
            <Link href="/cases">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-lg font-medium"
              >
                Все проекты
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
