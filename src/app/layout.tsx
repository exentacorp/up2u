import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "UP2U — Креативное ивент-агентство | Организация мероприятий в Москве",
  description: "UP2U — ивент-агентство полного цикла. Организация корпоративных мероприятий, городских праздников, спортивных фестивалей и культурных проектов в Москве и по всей России. 500+ реализованных проектов за 6 лет.",
  keywords: ["ивент-агентство", "организация мероприятий", "корпоративные мероприятия", "городские праздники", "спортивные фестивали", "Москва", "UP2U", "события", "тимбилдинг", "конференции"],
  authors: [{ name: "UP2U" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "UP2U — Креативное ивент-агентство",
    description: "Организация корпоративных мероприятий, городских праздников и спортивных фестивалей в Москве",
    url: "https://up2u.moscow",
    siteName: "UP2U",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "UP2U — Креативное ивент-агентство",
    description: "Организация корпоративных мероприятий и городских праздников в Москве",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
