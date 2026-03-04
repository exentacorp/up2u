'use client';

import { Cases as CasesComponent, casesData } from '@/components/sections/Cases';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ContactForm } from '@/components/sections/ContactForm';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export default function CasesPage() {
  const [selectedCase, setSelectedCase] = useState<typeof casesData[0] | null>(null);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-section-medium text-[#F1F1F1] mb-4 block uppercase tracking-wider">
              Портфолио
            </span>
            <h1 className="text-section-title text-white mb-6">
              Наши проекты
            </h1>
            <p className="text-section-body text-[#F1F1F1] mb-8">
              Более 500 реализованных мероприятий за 6 лет работы. 
              Каждый проект — это уникальная история, которую мы создали вместе с нашими клиентами.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">21+</div>
                <div className="text-base text-[#F1F1F1]">масштабный проект</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">150K+</div>
                <div className="text-base text-[#F1F1F1]">участников</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">6</div>
                <div className="text-base text-[#F1F1F1]">лет работы</div>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Обсудить проект
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* All Cases */}
      <CasesComponent showAll />

      {/* Featured Project */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-section-medium text-gray-500 mb-4 block uppercase tracking-wider">
              Флагманский проект
            </span>
            <h2 className="text-section-title text-[#1E1E1E] mb-6">
              «Лето в Москве» 2025
            </h2>
          </div>

          <div className="bg-white border border-gray-200 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto min-h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80"
                  alt="Лето в Москве"
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="bg-black text-white px-4 py-1.5 text-sm font-medium w-fit mb-4">
                  Проект Мэра Москвы
                </span>
                <p className="text-section-body text-gray-600 mb-6">
                  UP2U стало оператором крупнейшего городского проекта столицы. Концерты, 
                  фестивали и спортивные активности в десятках парков сделали лето особенным 
                  для более чем 100 тысяч горожан и гостей столицы.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-[#F1F1F1]">
                    <div className="text-xl font-bold text-[#1E1E1E]">100K+</div>
                    <div className="text-sm text-gray-500">горожан</div>
                  </div>
                  <div className="text-center p-4 bg-[#F1F1F1]">
                    <div className="text-xl font-bold text-[#1E1E1E]">55+</div>
                    <div className="text-sm text-gray-500">площадок</div>
                  </div>
                  <div className="text-center p-4 bg-[#F1F1F1]">
                    <div className="text-xl font-bold text-[#1E1E1E]">600+</div>
                    <div className="text-sm text-gray-500">мероприятий</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                className="w-full h-64 object-cover mb-6 grayscale"
              />
              <h2 className="text-section-title text-[#1E1E1E] mb-2">
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
              <p className="text-section-body text-gray-600 mb-6">{selectedCase.description}</p>
              {selectedCase.stats && (
                <div className="flex gap-4">
                  {selectedCase.stats.map((stat) => (
                    <div key={stat.label} className="bg-[#F1F1F1] px-4 py-2">
                      <div className="text-xl font-bold text-[#1E1E1E]">{stat.value}</div>
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
