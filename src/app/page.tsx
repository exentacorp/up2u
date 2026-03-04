'use client';

import { Hero } from '@/components/sections/Hero';
import { Header } from '@/components/sections/Header';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Cases } from '@/components/sections/Cases';
import { ContactForm } from '@/components/sections/ContactForm';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <About />
      <Services />
      <Cases />
      <ContactForm />
      <Footer />
    </main>
  );
}
