'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'О компании', href: '/#about' },
  { name: 'Услуги', href: '/services' },
  { name: 'Проекты', href: '/cases' },
  { name: 'Контакты', href: '/contacts' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getTextColor = () => {
    if (isScrolled) return 'text-[oklch(0.31_0.04_250)]';
    if (isHomePage) return 'text-white';
    return 'text-[oklch(0.31_0.04_250)]';
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span
                className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors ${getTextColor()}`}
              >
                UP<span className="text-[oklch(0.72_0.18_150)]">2</span>U
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors hover:text-[oklch(0.72_0.18_150)] ${getTextColor()}`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+79140893989"
                className={`flex items-center gap-2 transition-colors ${getTextColor()}`}
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium">+7 (914) 089-39-89</span>
              </a>
              <Link href="/contacts">
                <Button
                  className="bg-[oklch(0.72_0.18_150)] hover:bg-[oklch(0.55_0.15_150)] text-white rounded-full px-6"
                >
                  Оставить заявку
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`md:hidden p-2 ${getTextColor()}`}
              aria-label="Открыть меню"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
          />
          <div className="fixed top-0 right-0 bottom-0 w-80 max-w-[90vw] bg-white z-50 shadow-2xl animate-slide-in-right">
            <div className="flex items-center justify-between p-4 border-b">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <span className="text-2xl font-bold">
                  UP<span className="text-[oklch(0.72_0.18_150)]">2</span>U
                </span>
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-700"
                aria-label="Закрыть меню"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="p-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-lg font-medium text-[oklch(0.31_0.04_250)] hover:text-[oklch(0.72_0.18_150)] transition-colors border-b border-gray-100 last:border-0"
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-6 pt-6 border-t">
                <a
                  href="tel:+79140893989"
                  className="flex items-center gap-3 text-[oklch(0.31_0.04_250)] mb-4"
                >
                  <Phone className="h-5 w-5 text-[oklch(0.72_0.18_150)]" />
                  <span className="font-medium">+7 (914) 089-39-89</span>
                </a>
                <Link href="/contacts" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    className="w-full bg-[oklch(0.72_0.18_150)] hover:bg-[oklch(0.55_0.15_150)] text-white rounded-full"
                  >
                    Оставить заявку
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
