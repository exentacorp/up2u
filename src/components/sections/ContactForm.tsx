'use client';

import { useRef, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CheckCircle2, Loader2, Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  contact: z.string().min(5, 'Введите корректный телефон или email'),
  eventType: z.string().min(1, 'Выберите тип мероприятия'),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const eventTypes = [
  { value: 'corporate', label: 'Корпоративное мероприятие' },
  { value: 'sport', label: 'Спортивное событие' },
  { value: 'culture', label: 'Культурный проект' },
  { value: 'city', label: 'Городской праздник' },
  { value: 'team-building', label: 'Тимбилдинг' },
  { value: 'other', label: 'Другое' },
];

export function ContactForm() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      contact: '',
      eventType: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSuccess(true);
    form.reset();
    
    // Reset success state after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" ref={containerRef} className="py-20 md:py-32 bg-[oklch(0.97_0_0)]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <span className="text-[oklch(0.72_0.18_150)] font-semibold text-lg mb-2 block">
              Свяжитесь с нами
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[oklch(0.31_0.04_250)] mb-6">
              Оставьте заявку на расчёт
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Расскажите о вашем проекте, и мы свяжемся с вами в течение 24 часов 
              для обсуждения деталей и подготовки индивидуального предложения.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[oklch(0.95_0.12_150)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[oklch(0.55_0.15_150)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Телефон</div>
                  <a href="tel:+79140893989" className="text-lg font-semibold text-[oklch(0.31_0.04_250)] hover:text-[oklch(0.72_0.18_150)] transition-colors">
                    +7 (914) 089-39-89
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[oklch(0.95_0.12_150)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[oklch(0.55_0.15_150)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <a href="mailto:up2uevent.russia@yandex.ru" className="text-lg font-semibold text-[oklch(0.31_0.04_250)] hover:text-[oklch(0.72_0.18_150)] transition-colors">
                    up2uevent.russia@yandex.ru
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[oklch(0.95_0.12_150)] flex items-center justify-center">
                  <svg className="w-5 h-5 text-[oklch(0.55_0.15_150)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Контактное лицо</div>
                  <div className="text-lg font-semibold text-[oklch(0.31_0.04_250)]">
                    Филипп Ермак
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '200ms' }}>
            <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl">
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-[oklch(0.95_0.12_150)] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10 text-[oklch(0.72_0.18_150)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[oklch(0.31_0.04_250)] mb-2">
                    Заявка отправлена!
                  </h3>
                  <p className="text-gray-600">
                    Мы свяжемся с вами в ближайшее время
                  </p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[oklch(0.31_0.04_250)]">Ваше имя *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Как к вам обращаться?"
                              className="h-12 rounded-xl border-gray-200 focus:border-[oklch(0.72_0.18_150)] focus:ring-[oklch(0.72_0.18_150)]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="contact"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[oklch(0.31_0.04_250)]">Телефон или Email *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="+7 (___) ___-__-__ или email@example.com"
                              className="h-12 rounded-xl border-gray-200 focus:border-[oklch(0.72_0.18_150)] focus:ring-[oklch(0.72_0.18_150)]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="eventType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[oklch(0.31_0.04_250)]">Тип мероприятия *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 rounded-xl border-gray-200 focus:border-[oklch(0.72_0.18_150)] focus:ring-[oklch(0.72_0.18_150)]">
                                <SelectValue placeholder="Выберите тип мероприятия" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {eventTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[oklch(0.31_0.04_250)]">Сообщение</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Расскажите подробнее о вашем проекте..."
                              className="min-h-[100px] rounded-xl border-gray-200 focus:border-[oklch(0.72_0.18_150)] focus:ring-[oklch(0.72_0.18_150)] resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 rounded-xl bg-[oklch(0.72_0.18_150)] hover:bg-[oklch(0.55_0.15_150)] text-white text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Отправка...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Отправить заявку
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
