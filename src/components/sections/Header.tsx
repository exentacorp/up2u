'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    if (isScrolled || !isHomePage) return 'text-black';
    return 'text-white';
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || !isHomePage
            ? 'bg-white/95 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="UP2U"
                width={80}
                height={32}
                className={`h-8 w-auto transition-all ${
                  isScrolled || !isHomePage ? 'invert' : ''
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-section-body transition-colors hover:opacity-60 ${getTextColor()}`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right side */}
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
                  className="bg-white text-black hover:bg-gray-200 px-6 font-medium"
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
            className="fixed inset-0 bg-black/50 z-50"
          />
          <div className={`fixed top-0 right-0 bottom-0 w-80 max-w-[90vw] z-50 bg-black border-l border-white/10`}>
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <Image
                  src="/logo.png"
                  alt="UP2U"
                  width={80}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-white hover:text-gray-300"
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
                  className="block py-3 text-lg font-medium text-white hover:text-gray-300 border-b border-white/10"
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-6 pt-6 border-t border-white/10">
                <a
                  href="tel:+79140893989"
                  className="flex items-center gap-3 mb-4 text-white"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">+7 (914) 089-39-89</span>
                </a>
                <Link href="/contacts" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button
                    className="w-full bg-white text-black hover:bg-gray-200"
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
