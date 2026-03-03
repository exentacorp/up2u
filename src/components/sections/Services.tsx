'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Trophy, 
  Music, 
  Palette, 
  Users, 
  Star,
  Calendar,
  Mic,
  Camera,
  PartyPopper,
  Building,
  Lightbulb,
  Monitor,
  Award
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const serviceCategories = [
  {
    id: 'sport',
    title: 'Спортивные события',
    icon: Trophy,
    color: 'from-orange-500 to-red-500',
    description: 'Городские спортивные фестивали и уикенды с массовыми активностями',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80',
    services: [
      { name: 'Многопрофильные активности и перформансы', description: 'Спортивные шоу, челленджи и семейные зоны для массовых мероприятий' },
      { name: 'Дни спорта и Олимпийские дни', description: 'Федеральные и региональные мероприятия в сотрудничестве с МосГорСпорт' },
      { name: 'Марафоны и велофестивали', description: 'Массовые забеги и велопрогулки с профессиональной организацией' },
      { name: 'Праздники ГТО', description: 'Торжественные мероприятия по сдаче норм ГТО с награждением' },
      { name: 'День футбола, День бега', description: 'Тематические спортивные праздники для широкой аудитории' },
      { name: 'Йога-марафоны и фитнес на закате', description: 'Велнес-мероприятия на открытом воздухе' },
      { name: 'Массовые тренировки с амбассадорами', description: 'Занятия с чемпионами и известными спортсменами' },
      { name: 'Мотивационные кампании и контент-продакшн', description: 'Видео, сторителлинг, SMM и визуальные форматы' },
    ],
  },
  {
    id: 'culture',
    title: 'Культурные проекты',
    icon: Music,
    color: 'from-purple-500 to-pink-500',
    description: 'Городские фестивали и сезонные программы для всех возрастов',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80',
    services: [
      { name: 'Акустические и камерные концерты', description: 'Музыкальные вечера в парках и на открытых площадках' },
      { name: 'Театрализованные перформансы', description: 'Интерактивные театральные постановки под открытым небом' },
      { name: 'Литературные вечера', description: 'Встречи с писателями, чтения и дискуссии' },
      { name: 'Арт-пространства под открытым небом', description: 'Временные инсталляции и выставочные проекты' },
      { name: 'Творческие мастерские', description: 'Мастер-классы для детей и взрослых' },
      { name: 'Уличные выставки и арт-инсталляции', description: 'Современное искусство в городской среде' },
      { name: 'Квесты и коллаборации с музеями', description: 'Образовательные программы и интерактивы' },
      { name: 'Праздничные даты и фестивали', description: 'Мероприятия к национальным и региональным праздникам' },
    ],
  },
  {
    id: 'corporate',
    title: 'Корпоративные мероприятия',
    icon: Users,
    color: 'from-[oklch(0.72_0.18_150)] to-[oklch(0.55_0.15_150)]',
    description: 'Team building, конференции и корпоративные праздники любой масштаба',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    services: [
      { name: 'Тимбилдинги и корпоративные праздники', description: 'Программы сплочения коллектива и праздничные мероприятия' },
      { name: 'Конференции и бизнес-форумы', description: 'Профессиональные события с полной технической поддержкой' },
      { name: 'Презентации продуктов', description: 'Яркие запуски новых продуктов и услуг' },
      { name: 'Юбилеи компаний', description: 'Торжественные мероприятия к важным датам компании' },
      { name: 'Новогодние мероприятия', description: 'Корпоративные праздники с программой и банкетом' },
      { name: 'Семейные дни для сотрудников', description: 'Мероприятия для детей и семей сотрудников' },
      { name: 'HR-ивенты и мотивационные программы', description: 'Внутренние коммуникации и мотивация команды' },
      { name: 'Выездные мероприятия', description: 'Организация событий за пределами офиса' },
    ],
  },
  {
    id: 'city',
    title: 'Городские праздники',
    icon: PartyPopper,
    color: 'from-blue-500 to-cyan-500',
    description: 'Масштабные городские мероприятия и общественные события',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
    services: [
      { name: 'Дни города', description: 'Главные городские праздники с концертами и активностями' },
      { name: 'Национальные праздники', description: 'Торжества к государственным и национальным датам' },
      { name: 'Патриотические мероприятия', description: 'День Победы, реконструкции и памятные даты' },
      { name: 'Сезонные фестивали', description: 'Летние, осенние и зимние городские программы' },
      { name: 'Районные программы', description: 'Локальные инициативы и праздники двора' },
      { name: 'Публичные перформансы', description: 'Музыкальные вечера и уличные шоу' },
    ],
  },
  {
    id: 'tech',
    title: 'Технологические решения',
    icon: Monitor,
    color: 'from-indigo-500 to-purple-500',
    description: 'VR/AR проекты и инновационные форматы для презентаций',
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=800&q=80',
    services: [
      { name: 'VR-проекты для презентаций', description: 'Иммерсивные презентации для недвижимости и промышленности' },
      { name: 'AR-решения и интерактивная навигация', description: 'Дополненная реальность для брендов и мероприятий' },
      { name: 'R&D и маркетинговые стратегии', description: 'Исследования и разработка концепций для компаний' },
      { name: 'Цифровые платформы', description: 'Разработка цифровых решений для мероприятий' },
    ],
  },
  {
    id: 'additional',
    title: 'Дополнительные услуги',
    icon: Star,
    color: 'from-yellow-500 to-orange-500',
    description: 'Полный спектр сервисов для организации мероприятий',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80',
    services: [
      { name: 'Разработка концепций', description: 'Сценарии и режиссура мероприятий' },
      { name: 'Техническая реализация', description: 'Звук, свет, видео и сценические конструкции' },
      { name: 'Анимация и ведущие', description: 'Профессиональные ведущие и аниматоры' },
      { name: 'Декор и оформление', description: 'Оформление площадок и фотозон' },
      { name: 'Кейтеринг', description: 'Организация питания и банкетов' },
      { name: 'Застройка выставок', description: 'Стенды и музейные экспозиции' },
    ],
  },
];

export function Services({ showAll = false }: { showAll?: boolean }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const displayedServices = showAll ? serviceCategories : serviceCategories.slice(0, 3);

  return (
    <section id="services" className="py-20 md:py-32 bg-[oklch(0.97_0_0)]">
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
            Наши услуги
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[oklch(0.31_0.04_250)] mb-6">
            Что мы предлагаем
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Полный цикл организации мероприятий: от разработки концепции до технической реализации
          </p>
        </motion.div>

        {/* Service Categories */}
        <div className={`grid gap-6 md:gap-8 mb-16 ${showAll ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-3'}`}>
          {displayedServices.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-0">
                  {/* Header with Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-80`} />
                    <div className="absolute inset-0 flex items-center p-6">
                      <category.icon className="h-10 w-10 text-white mb-2" />
                      <h3 className="text-xl md:text-2xl font-bold text-white absolute bottom-6 left-6 right-6">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Services List */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <ul className="space-y-2">
                      {category.services.slice(0, showAll ? undefined : 5).map((service, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.18_150)] mt-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{service.name}</span>
                        </li>
                      ))}
                    </ul>
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
            className="text-center"
          >
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-[oklch(0.72_0.18_150)] text-[oklch(0.72_0.18_150)] hover:bg-[oklch(0.72_0.18_150)] hover:text-white px-8 rounded-full"
              >
                Все услуги
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
