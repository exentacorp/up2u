'use client';

import { motion } from 'framer-motion';
import { Services as ServicesComponent, serviceCategories } from '@/components/sections/Services';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ContactForm } from '@/components/sections/ContactForm';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ServicesPage() {
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
              Услуги
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[oklch(0.31_0.04_250)] mb-6">
              Полный спектр услуг для вашего мероприятия
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              От разработки концепции до технической реализации — мы берём на себя все этапы организации
            </p>
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

      {/* All Services */}
      <ServicesComponent showAll />

      {/* Why Choose Us */}
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
              Почему выбирают нас
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '6+ лет опыта', description: 'на рынке ивент-услуг' },
              { title: '500+ проектов', description: 'реализовано за это время' },
              { title: '500K+ участников', description: 'на наших мероприятиях' },
              { title: 'Под ключ', description: 'полный цикл организации' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-[oklch(0.97_0_0)] rounded-2xl"
              >
                <div className="text-3xl font-bold text-[oklch(0.72_0.18_150)] mb-2">{item.title}</div>
                <div className="text-gray-600">{item.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-[oklch(0.97_0_0)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[oklch(0.31_0.04_250)] mb-6">
              Детали услуг
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Каждая услуга включает полный комплекс работ для достижения ваших целей
            </p>
          </motion.div>

          <div className="space-y-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-3 gap-0">
                      <div className="relative h-48 md:h-auto">
                        <img
                          src={category.image}
                          alt={category.title}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-70`} />
                        <div className="absolute inset-0 flex items-center justify-center p-6">
                          <h3 className="text-2xl font-bold text-white text-center">{category.title}</h3>
                        </div>
                      </div>
                      <div className="md:col-span-2 p-6 md:p-8">
                        <p className="text-gray-600 mb-6">{category.description}</p>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {category.services.map((service, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-[oklch(0.72_0.18_150)] mt-0.5 flex-shrink-0" />
                              <div>
                                <div className="font-medium text-[oklch(0.31_0.04_250)]">{service.name}</div>
                                <div className="text-sm text-gray-500">{service.description}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
      
      <Footer />
    </main>
  );
}
