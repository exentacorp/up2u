'use client';

import { Services as ServicesComponent, serviceCategories } from '@/components/sections/Services';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ContactForm } from '@/components/sections/ContactForm';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-section-medium text-[#F1F1F1] mb-4 block uppercase tracking-wider">
              Услуги
            </span>
            <h1 className="text-section-title text-white mb-6">
              Полный спектр услуг для вашего мероприятия
            </h1>
            <p className="text-section-body text-[#F1F1F1] mb-8">
              От разработки концепции до технической реализации — мы берём на себя все этапы организации
            </p>
            <Button
              size="lg"
              className="btn-primary px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Обсудить проект
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* All Services */}
      <ServicesComponent showAll />

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-section-medium text-gray-500 mb-4 block uppercase tracking-wider">
              Преимущества
            </span>
            <h2 className="text-section-title text-[#1E1E1E] mb-6">
              Почему выбирают нас
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '6+ лет опыта', description: 'на рынке ивент-услуг' },
              { title: '500+ проектов', description: 'реализовано за это время' },
              { title: '500K+ участников', description: 'на наших мероприятиях' },
              { title: 'Под ключ', description: 'полный цикл организации' },
            ].map((item, index) => (
              <div
                key={item.title}
                className="text-center p-6 bg-[#F1F1F1]"
              >
                <div className="text-2xl md:text-3xl font-bold text-[#1E1E1E] mb-2">{item.title}</div>
                <div className="text-base text-gray-600">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-section-medium text-gray-500 mb-4 block uppercase tracking-wider">
              Детали
            </span>
            <h2 className="text-section-title text-[#1E1E1E] mb-6">
              Детали услуг
            </h2>
            <p className="text-section-body text-gray-600 max-w-3xl mx-auto">
              Каждая услуга включает полный комплекс работ для достижения ваших целей
            </p>
          </div>

          <div className="space-y-8">
            {serviceCategories.map((category, index) => (
              <div key={category.id} className="bg-white border border-gray-200 overflow-hidden">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="relative h-48 md:h-auto">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <h3 className="text-xl md:text-2xl font-bold text-white text-center">{category.title}</h3>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-6 md:p-8">
                    <p className="text-section-body text-gray-600 mb-6 bg-[#F1F1F1] p-4 -m-2 md:-m-0 md:bg-transparent md:p-0">{category.description}</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {category.services.map((service, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
                          <span className="text-base text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
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
