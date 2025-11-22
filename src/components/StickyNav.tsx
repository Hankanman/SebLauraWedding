"use client";

import { Home, Calendar, MapPin, Utensils, Image as ImageIcon, MessageSquare, Gift, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "when", icon: Calendar, label: "When" },
  { id: "where", icon: MapPin, label: "Where" },
  { id: "theme", icon: Utensils, label: "Theme" },
  { id: "gallery", icon: ImageIcon, label: "Gallery" },
  { id: "message", icon: MessageSquare, label: "Message" },
  { id: "gifts", icon: Gift, label: "Gifts" },
  { id: "RSVP", icon: Mail, label: "RSVP" },
];

export function StickyNav() {
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
      {
        rootMargin: "-50% 0px -50% 0px", // Trigger when section is in middle of viewport
      }
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
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-4 px-4 pointer-events-none">
      <nav className="flex items-center gap-1 rounded-full bg-white/80 p-2 shadow-lg backdrop-blur-md border border-gray-200 pointer-events-auto overflow-x-auto max-w-full">
        {navItems.map(({ id, icon: Icon, label }) => (
          <Link
            key={id}
            href={`#${id}`}
            onClick={(e) => scrollToSection(e, id)}
            className={cn(
              "relative flex flex-col items-center justify-center rounded-full p-3 transition-all hover:bg-gray-100 min-w-12",
              activeSection === id ? "bg-brand text-white hover:bg-brand/90" : "text-gray-500"
            )}
            title={label}
          >
            <Icon size={20} />
            <span className="sr-only">{label}</span>
            {activeSection === id && (
               <span className="absolute -top-1 right-1 h-2 w-2 rounded-full bg-white animate-pulse" />
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
}

