'use client';

import Link from 'next/link';
import { Instagram, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const navigation = {
  main: [
    { name: 'О компании', href: '/#about' },
    { name: 'Услуги', href: '/services' },
    { name: 'Проекты', href: '/cases' },
    { name: 'Контакты', href: '/contacts' },
  ],
  services: [
    { name: 'Корпоративные мероприятия', href: '/services#corporate' },
    { name: 'Спортивные события', href: '/services#sport' },
    { name: 'Культурные проекты', href: '/services#culture' },
    { name: 'Городские праздники', href: '/services#city' },
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[oklch(0.15_0.04_250)] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-4xl font-bold tracking-tight">
                UP<span className="text-[oklch(0.72_0.18_150)]">2</span>U
              </span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Креативное ивент-агентство полного цикла. Создаём события, которые запоминаются.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/up2u_event"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[oklch(0.72_0.18_150)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://t.me/up2u_event"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[oklch(0.72_0.18_150)] transition-colors"
                aria-label="Telegram"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a
                href="https://vk.com/up2u_event"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[oklch(0.72_0.18_150)] transition-colors"
                aria-label="VK"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.57 4 8.096c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.847 2.456 2.268 4.625 2.852 4.625.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.149-3.574 2.149-3.574.119-.254.305-.491.745-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Навигация</h3>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-[oklch(0.72_0.18_150)] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Услуги</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-[oklch(0.72_0.18_150)] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+79140893989"
                  className="flex items-center gap-3 text-gray-400 hover:text-[oklch(0.72_0.18_150)] transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  +7 (914) 089-39-89
                </a>
              </li>
              <li>
                <a
                  href="tel:+79140875484"
                  className="flex items-center gap-3 text-gray-400 hover:text-[oklch(0.72_0.18_150)] transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  +7 (914) 087-54-84
                </a>
              </li>
              <li>
                <a
                  href="mailto:up2uevent.russia@yandex.ru"
                  className="flex items-center gap-3 text-gray-400 hover:text-[oklch(0.72_0.18_150)] transition-colors"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  up2uevent.russia@yandex.ru
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>Москва, Россия</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} UP2U. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
                Политика конфиденциальности
              </a>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full bg-[oklch(0.72_0.18_150)] flex items-center justify-center hover:bg-[oklch(0.55_0.15_150)] transition-colors"
                aria-label="Наверх"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
