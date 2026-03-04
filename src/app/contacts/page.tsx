'use client';

import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { Phone, Mail, MapPin, Clock, Send, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
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
import { CheckCircle2, Loader2 } from 'lucide-react';

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

export default function ContactsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setIsSuccess(true);
    form.reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-section-medium text-[#F1F1F1] mb-4 block uppercase tracking-wider">
              Контакты
            </span>
            <h1 className="text-section-title text-white mb-6">
              Свяжитесь с нами
            </h1>
            <p className="text-section-body text-[#F1F1F1] mb-8">
              Готовы обсудить ваш проект? Оставьте заявку или свяжитесь с нами напрямую
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-section-title text-[#1E1E1E] mb-8">
                Контактная информация
              </h2>

              <div className="space-y-4 mb-12">
                <div className="flex items-start gap-4 bg-[#F1F1F1] p-4">
                  <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-base text-gray-500 mb-1">Телефон</div>
                    <a href="tel:+79140893989" className="text-lg font-semibold text-[#1E1E1E] hover:text-gray-600 transition-colors">
                      +7 (914) 089-39-89
                    </a>
                    <div className="text-sm text-gray-500 mt-1">Филипп Ермак</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F1F1F1] p-4">
                  <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-base text-gray-500 mb-1">Телефон</div>
                    <a href="tel:+79140875484" className="text-lg font-semibold text-[#1E1E1E] hover:text-gray-600 transition-colors">
                      +7 (914) 087-54-84
                    </a>
                    <div className="text-sm text-gray-500 mt-1">Гарнов Дмитрий</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F1F1F1] p-4">
                  <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-base text-gray-500 mb-1">Email</div>
                    <a href="mailto:up2uevent.russia@yandex.ru" className="text-lg font-semibold text-[#1E1E1E] hover:text-gray-600 transition-colors">
                      up2uevent.russia@yandex.ru
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F1F1F1] p-4">
                  <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-base text-gray-500 mb-1">Адрес</div>
                    <div className="text-lg font-semibold text-[#1E1E1E]">
                      Москва, Россия
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-[#F1F1F1] p-4">
                  <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-base text-gray-500 mb-1">Время работы</div>
                    <div className="text-lg font-semibold text-[#1E1E1E]">
                      Пн-Пт: 10:00–19:00
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-[#1E1E1E] mb-4">
                  Мы в социальных сетях
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://t.me/up2u_event"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black flex items-center justify-center hover:bg-gray-800 transition-colors text-white"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </a>
                  <a
                    href="https://vk.com/up2u_event"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black flex items-center justify-center hover:bg-gray-800 transition-colors text-white"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.57 4 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.847 2.456 2.268 4.625 2.852 4.625.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.149-3.574 2.149-3.574.119-.254.305-.491.745-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/up2u_event"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black flex items-center justify-center hover:bg-gray-800 transition-colors text-white"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white border border-gray-200 p-6 md:p-10">
                <h2 className="text-section-title text-[#1E1E1E] mb-6">
                  Оставить заявку
                </h2>
                
                {isSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-black flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1E1E1E] mb-2">
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
                            <FormLabel className="text-base font-medium text-[#1E1E1E]">Ваше имя *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Как к вам обращаться?"
                                className="h-14 border-gray-300 focus:border-black focus:ring-black text-lg"
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
                            <FormLabel className="text-base font-medium text-[#1E1E1E]">Телефон или Email *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="+7 (___) ___-__-__ или email@example.com"
                                className="h-14 border-gray-300 focus:border-black focus:ring-black text-lg"
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
                            <FormLabel className="text-base font-medium text-[#1E1E1E]">Тип мероприятия *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="h-14 border-gray-300 focus:border-black focus:ring-black text-lg">
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
                            <FormLabel className="text-base font-medium text-[#1E1E1E]">Сообщение</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Расскажите подробнее о вашем проекте..."
                                className="min-h-[120px] border-gray-300 focus:border-black focus:ring-black text-lg resize-none"
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
                        className="w-full h-14 bg-black hover:bg-gray-800 text-white text-lg font-medium transition-all duration-300"
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

      {/* Map Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-section-title text-[#1E1E1E]">
              Наш офис
            </h2>
          </div>
          <div className="border border-gray-200 h-[300px] bg-[#F1F1F1] flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin className="h-12 w-12 text-black mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">Москва, Россия</h3>
              <p className="text-gray-600">Точное время и место встречи согласуется индивидуально</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
