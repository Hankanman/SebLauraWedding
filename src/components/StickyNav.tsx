"use client";

import { Home, Calendar, MapPin, Utensils, Image as ImageIcon, MessageSquare, Gift, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl';

const navItems = [
  { id: "hero", icon: Home, labelKey: "home" },
  { id: "when", icon: Calendar, labelKey: "when" },
  { id: "where", icon: MapPin, labelKey: "where" },
  { id: "theme", icon: Utensils, labelKey: "theme" },
  { id: "gallery", icon: ImageIcon, labelKey: "gallery" },
  { id: "message", icon: MessageSquare, labelKey: "message" },
  { id: "gifts", icon: Gift, labelKey: "gifts" },
  { id: "RSVP", icon: Mail, labelKey: "rsvp" },
];

export function StickyNav() {
  const t = useTranslations('Navigation');
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center md:pb-4 md:px-4 pointer-events-none">
      <nav className="flex w-full md:w-auto items-center justify-between md:justify-center gap-1 md:rounded-full bg-white/90 md:bg-white/80 p-2 md:p-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:shadow-lg backdrop-blur-md border-t md:border border-gray-200 pointer-events-auto">
        {navItems.map(({ id, icon: Icon, labelKey }) => (
          <Link
            key={id}
            href={`#${id}`}
            onClick={(e) => scrollToSection(e, id)}
            className={cn(
              "relative flex flex-1 md:flex-none flex-col items-center justify-center rounded-lg md:rounded-full p-2 md:p-3 transition-all hover:bg-gray-100 min-w-0 md:min-w-[3rem]",
              activeSection === id ? "bg-brand text-white hover:bg-brand/90" : "text-gray-500"
            )}
            title={t(labelKey)}
          >
            <Icon size={20} />
            <span className="sr-only">{t(labelKey)}</span>
            {activeSection === id && (
               <span className="absolute -top-1 right-1 h-2 w-2 rounded-full bg-white animate-pulse" />
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
}