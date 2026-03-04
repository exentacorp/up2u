'use client';

import { motion } from 'framer-motion';
import { Cases as CasesComponent, casesData } from '@/components/sections/Cases';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ContactForm } from '@/components/sections/ContactForm';
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export default function CasesPage() {
  const [selectedCase, setSelectedCase] = useState<typeof casesData[0] | null>(null);

  const totalStats = {
    events: casesData.length,
    participants: casesData.reduce((sum, c) => {
      const num = c.stats?.[0]?.value.replace(/[^0-9]/g, '') || '0';
      return sum + parseInt(num);
    }, 0),
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-[oklch(0.97_0_0)] to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-[oklch(0.72_0.18_150)] font-semibold text-lg mb-2 block">
              Портфолио
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[oklch(0.31_0.04_250)] mb-6">
              Наши проекты
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Более 500 реализованных мероприятий за 6 лет работы. 
              Каждый проект — это уникальная история, которую мы создали вместе с нашими клиентами.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[oklch(0.72_0.18_150)]">21+</div>
                <div className="text-gray-600">масштабный проект</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[oklch(0.72_0.18_150)]">150K+</div>
                <div className="text-gray-600">участников</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[oklch(0.72_0.18_150)]">6</div>
                <div className="text-gray-600">лет работы</div>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-[oklch(0.72_0.18_150)] hover:bg-[oklch(0.55_0.15_150)] text-white px-8 rounded-full"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Обсудить проект
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* All Cases */}
      <CasesComponent showAll />

      {/* Featured Project */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.31_0.04_250)] mb-6">
              Флагманский проект
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden border-0 shadow-xl">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto min-h-[400px]">
                    <img
                      src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80"
                      alt="Лето в Москве"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <span className="bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-medium w-fit mb-4">
                      Проект Мэра Москвы
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-[oklch(0.31_0.04_250)] mb-4">
                      «Лето в Москве» 2025
                    </h3>
                    <p className="text-gray-600 text-lg mb-6">
                      UP2U стало оператором крупнейшего городского проекта столицы. Концерты, 
                      фестивали и спортивные активности в десятках парков сделали лето особенным 
                      для более чем 100 тысяч горожан и гостей столицы.
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-[oklch(0.97_0_0)] rounded-xl">
                        <div className="text-xl font-bold text-[oklch(0.72_0.18_150)]">100K+</div>
                        <div className="text-xs text-gray-500">горожан</div>
                      </div>
                      <div className="text-center p-3 bg-[oklch(0.97_0_0)] rounded-xl">
                        <div className="text-xl font-bold text-[oklch(0.72_0.18_150)]">55+</div>
                        <div className="text-xs text-gray-500">площадок</div>
                      </div>
                      <div className="text-center p-3 bg-[oklch(0.97_0_0)] rounded-xl">
                        <div className="text-xl font-bold text-[oklch(0.72_0.18_150)]">600+</div>
                        <div className="text-xs text-gray-500">мероприятий</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
      
      <Footer />

      {/* Case Detail Modal */}
      <Dialog open={!!selectedCase} onOpenChange={() => setSelectedCase(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedCase && (
            <div>
              <img
                src={selectedCase.image}
                alt={selectedCase.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h2 className="text-2xl font-bold text-[oklch(0.31_0.04_250)] mb-2">
                {selectedCase.title}
              </h2>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {selectedCase.date}
                </div>
                {selectedCase.location && (
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {selectedCase.location}
                  </div>
                )}
              </div>
              <p className="text-gray-600 mb-6">{selectedCase.description}</p>
              {selectedCase.stats && (
                <div className="flex gap-4">
                  {selectedCase.stats.map((stat) => (
                    <div key={stat.label} className="bg-[oklch(0.97_0_0)] rounded-lg px-4 py-2">
                      <div className="text-xl font-bold text-[oklch(0.72_0.18_150)]">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
