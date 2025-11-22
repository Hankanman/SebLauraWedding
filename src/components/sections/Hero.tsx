import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('Hero');

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat animate-subtle-zoom"
        style={{
          backgroundImage: "url('/images/hero/background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-end justify-start px-4 pb-20 md:px-20">
        <div className="max-w-xl rounded-lg bg-white/60 p-8 shadow-lg backdrop-blur-md md:p-12">
          <h1 className="mb-6 font-serif text-4xl font-bold text-gray-900 md:text-6xl">
            {t('title')}
          </h1>
          <p className="mb-8 text-lg text-gray-700 font-sans">
            {t('description')}
          </p>
          <Button asChild size="lg" className="bg-brand hover:bg-brand/90 text-white text-lg px-8 py-6 rounded-none">
            <Link href="#RSVP">{t('rsvpButton')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
