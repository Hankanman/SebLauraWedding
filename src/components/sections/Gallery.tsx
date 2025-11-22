"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/7.jpg",
  "/images/gallery/8.jpg",
  "/images/gallery/9.jpg",
];

export function Gallery() {
  const t = useTranslations('Gallery');
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section id="gallery" className="relative py-20 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Blurred version of one of the photos */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed animate-subtle-zoom"
        style={{
          backgroundImage: "url('/images/gallery/background.jpg')",
          filter: "blur(8px) brightness(0.7)",
          transform: "scale(1.1)" // Prevent blur edges
        }}
      >
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="glass-card mb-12 max-w-2xl mx-auto p-8 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-700 font-sans">
            {t('subtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {images.map((src, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1">
                    <div className="relative overflow-hidden rounded-lg shadow-xl aspect-[4/3] border-4 border-white/50">
                      <Image
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-white/80 hover:bg-white text-gray-800 border-none" />
            <CarouselNext className="hidden md:flex bg-white/80 hover:bg-white text-gray-800 border-none" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
