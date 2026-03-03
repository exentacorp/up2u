'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, Users, MapPin, Tag, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
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
    description: 'Праздник превратил городской зал в атмосферу тепла, музыки и признательности. Артисты и оформление создали по-настоящему весеннее настроение.',
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
    description: 'Дети младшего школьного возраста отправились в захватывающее путешествие по миру профессий. Игровой формат превратил обучение в яркое приключение.',
    stats: [{ label: 'школьников', value: '1500' }],
    date: 'Февраль 2023',
    location: 'Сахалинская Энергия',
    type: 'culture',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
  },
  {
    id: 3,
    title: 'День работников нефтяной и газовой промышленности «Роснефть»',
    category: 'Корпоративное мероприятие',
    description: 'Яркая шоу-программа и концерт сделали праздник событием регионального масштаба. Атмосфера драйва и корпоративного духа объединила гостей.',
    stats: [{ label: 'участников', value: '1500' }],
    date: 'Сентябрь 2023–2024',
    type: 'corporate',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  },
  {
    id: 4,
    title: 'Реконструкция боевых действий Великой Отечественной Войны',
    category: 'Патриотическое мероприятие',
    description: 'Зрелищные постановки оживили страницы истории. Атмосфера погружения позволила зрителям почувствовать дыхание прошлого.',
    stats: [{ label: 'зрителей', value: '7000' }],
    date: 'Август 2022–2025',
    type: 'culture',
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80',
  },
  {
    id: 5,
    title: 'Всероссийский форум «ОстроVa»',
    category: 'Федеральный проект',
    description: 'Культурная программа форума объединила музыку, арт-проекты и интерактивные форматы. Атмосфера творчества и диалога сделала форум особым пространством общения.',
    stats: [{ label: 'участников', value: '2000' }],
    date: 'Август 2022–2024',
    type: 'federal',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
  },
  {
    id: 6,
    title: '75-летие спортивной отрасли Сахалинской области',
    category: 'Юбилейное мероприятие',
    description: 'Юбилей стал символом преемственности поколений и праздником спортивных достижений. Атмосфера торжества объединила ветеранов и молодых спортсменов.',
    stats: [{ label: 'участников', value: '350' }],
    date: 'Декабрь 2022',
    type: 'sport',
    image: 'https://images.unsplash.com/photo-1461896836934-28e4b8ed0cd0?w=800&q=80',
  },
  {
    id: 7,
    title: 'Чествование спортивной элиты Сахалинской области',
    category: 'Спортивное мероприятие',
    description: 'Торжественная церемония наградила тех, кто вписал свои имена в историю сахалинского спорта. Атмосфера гордости и вдохновения подчеркнула значимость события.',
    stats: [{ label: 'участников', value: '1500' }],
    date: 'Август 2023–2024',
    type: 'sport',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80',
  },
  {
    id: 8,
    title: 'День работников нефтяной и газовой промышленности «Сахалинская Энергия»',
    category: 'Корпоративное мероприятие',
    description: 'Масштабный праздник с концертом, световым шоу и атмосферой гордости за отрасль. Событие стало символом корпоративного единства.',
    stats: [{ label: 'участников', value: '3500' }],
    date: 'Сентябрь 2022–2025',
    type: 'corporate',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
  },
  {
    id: 9,
    title: '15-летие присутствия Газпромбанка на Сахалине',
    category: 'Юбилейное мероприятие',
    description: 'Закрытое событие стало праздничным акцентом в истории компании. Атмосфера доверия и благодарности подчеркнула значимость юбилея.',
    stats: [{ label: 'участников', value: '400' }],
    date: 'Декабрь 2024',
    type: 'corporate',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
  },
  {
    id: 10,
    title: '«Лето в Москве»',
    category: 'Проект Мэра Москвы',
    description: 'UP2U стало оператором крупнейшего городского проекта столицы. Концерты, фестивали и спортивные активности в десятках парков сделали лето особенным.',
    stats: [{ label: 'горожан', value: '100K+' }],
    date: 'Июнь – сентябрь 2025',
    location: 'Москва',
    type: 'federal',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80',
  },
  {
    id: 11,
    title: 'День Победы',
    category: 'Патриотическое мероприятие',
    description: 'Город объединился в торжественном праздновании, наполненном музыкой, шествиями и памятью. Атмосфера единства и благодарности сделала этот день особенным.',
    stats: [{ label: 'участников', value: '10000' }],
    date: 'Май 2025',
    location: 'г. Корсаков',
    type: 'culture',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80',
  },
  {
    id: 12,
    title: 'День города Корсакова',
    category: 'Городской праздник',
    description: 'Главная площадь ежегодно преображалась в центр радости и единства жителей. Концерты, шоу и анимация делали праздник по-настоящему семейным.',
    stats: [{ label: 'ежегодно', value: '20K' }],
    date: 'Сентябрь 2021–2025',
    location: 'г. Корсаков',
    type: 'city',
    image: '/uploads/4M9A2103.JPG',
  },
  {
    id: 13,
    title: 'Первенство России по тяжёлой атлетике среди молодёжи',
    category: 'Спортивное мероприятие',
    description: 'Впервые Сахалин принял соревнования федерального уровня. Турнир стал праздником силы, воли и будущих чемпионов.',
    stats: [{ label: 'участников', value: '3200' }],
    date: 'Июль 2025',
    type: 'sport',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
  },
  {
    id: 14,
    title: 'Летний кубок КВН',
    category: 'Федеральный проект',
    description: 'Организация сопровождения ключевого события сезона подарила зрителям атмосферу юмора и творчества. Мероприятие стало площадкой для смеха и вдохновения.',
    stats: [{ label: 'зрителей', value: '3500' }],
    date: 'Август 2024',
    type: 'federal',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
  },
  {
    id: 15,
    title: 'Всероссийский Олимпийский день',
    category: 'Федеральный проект',
    description: 'Город превратился в большую спортивную площадку. Мастер-классы, активности и концерт создали атмосферу настоящего олимпийского единства.',
    stats: [{ label: 'участников', value: '12000' }],
    date: 'Июнь 2024',
    type: 'federal',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
  },
  {
    id: 16,
    title: 'Застройка музейных экспозиций',
    category: 'Выставочный проект',
    description: 'Каждая экспозиция — это погружение в историю и культуру. Дизайн и архитектурные решения создают эффект вовлечённости и диалога с посетителем.',
    date: 'Постоянные проекты',
    type: 'culture',
    image: 'https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=800&q=80',
  },
  {
    id: 17,
    title: 'Стенды муниципалитетов и корпораций',
    category: 'Выставочный проект',
    description: 'Форумы и выставки становятся яркой площадкой для продвижения. Стенды UP2U сочетают эстетику и функциональность, превращая пространство в инструмент коммуникации.',
    date: 'Разные годы',
    type: 'corporate',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  },
  {
    id: 18,
    title: 'Презентации продуктов и проектов корпораций',
    category: 'Корпоративное мероприятие',
    description: 'Презентации превращаются в истории, которые вдохновляют и убеждают. Дизайн, шоу и сценарий делают каждое событие ярким акцентом в жизни бренда.',
    date: 'Разные годы',
    type: 'corporate',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
  },
  {
    id: 19,
    title: 'VR-проекты для презентаций и демонстраций',
    category: 'Технологический проект',
    description: 'Виртуальная реальность превращает презентации и показы в иммерсивный опыт. Мы создаём VR-проекты для демонстрации продуктов, объектов недвижимости и промышленных решений.',
    date: 'Постоянные проекты',
    type: 'tech',
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800&q=80',
  },
  {
    id: 20,
    title: 'AR-решения и интерактивная навигация',
    category: 'Технологический проект',
    description: 'Дополненная реальность усиливает узнаваемость бренда и вовлекает аудиторию. Мы разрабатываем AR-проекты навигационного и развлекательного формата.',
    date: 'Постоянные проекты',
    type: 'tech',
    image: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&q=80',
  },
  {
    id: 21,
    title: 'R&D и маркетинговые стратегии',
    category: 'Консалтинг',
    description: 'Мы исследуем, создаём и выводим продукты на рынок. Команда UP2U разрабатывает маркетинговые стратегии и инновационные концепции для крупных компаний.',
    date: 'Постоянные проекты',
    type: 'tech',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  },
];

const typeColors: Record<string, string> = {
  federal: 'from-purple-500 to-pink-500',
  city: 'from-blue-500 to-cyan-500',
  corporate: 'from-[oklch(0.72_0.18_150)] to-[oklch(0.55_0.15_150)]',
  culture: 'from-orange-500 to-red-500',
  sport: 'from-yellow-500 to-orange-500',
  tech: 'from-indigo-500 to-purple-500',
};

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
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState<string>('all');

  const filteredCases = filter === 'all' 
    ? casesData 
    : casesData.filter(c => c.type === filter);

  const displayedCases = showAll ? filteredCases : filteredCases.slice(0, 6);

  return (
    <section id="cases" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[oklch(0.72_0.18_150)] font-semibold text-lg mb-2 block">
            Наши проекты
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[oklch(0.31_0.04_250)] mb-6">
            Кейсы и достижения
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Более 500 реализованных проектов за 6 лет работы
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12"
        >
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            onClick={() => setFilter('all')}
            className={filter === 'all' ? 'bg-[oklch(0.72_0.18_150)] hover:bg-[oklch(0.55_0.15_150)]' : ''}
          >
            Все проекты
          </Button>
          {Object.entries(typeLabels).map(([type, label]) => (
            <Button
              key={type}
              variant={filter === type ? 'default' : 'outline'}
              onClick={() => setFilter(type)}
              className={filter === type ? 'bg-[oklch(0.72_0.18_150)] hover:bg-[oklch(0.55_0.15_150)]' : ''}
            >
              {label}
            </Button>
          ))}
        </motion.div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedCases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <img
                      src={caseItem.image}
                      alt={caseItem.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`bg-gradient-to-r ${typeColors[caseItem.type]} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                        {typeLabels[caseItem.type]}
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
                    
                    <h3 className="text-lg md:text-xl font-bold text-[oklch(0.31_0.04_250)] mb-2 line-clamp-2">
                      {caseItem.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {caseItem.description}
                    </p>

                    {caseItem.stats && (
                      <div className="flex gap-4">
                        {caseItem.stats.map((stat) => (
                          <div key={stat.label} className="bg-[oklch(0.97_0_0)] rounded-lg px-3 py-2">
                            <div className="text-lg font-bold text-[oklch(0.72_0.18_150)]">{stat.value}</div>
                            <div className="text-xs text-gray-500">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link href="/cases">
              <Button
                size="lg"
                variant="outline"
                className="border-[oklch(0.72_0.18_150)] text-[oklch(0.72_0.18_150)] hover:bg-[oklch(0.72_0.18_150)] hover:text-white px-8 rounded-full"
              >
                Все проекты
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
