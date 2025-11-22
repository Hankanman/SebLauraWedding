import Image from "next/image";
import { useTranslations } from 'next-intl';

export function Message() {
  const t = useTranslations('Message');

  return (
    <section id="message" className="relative py-20 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed animate-subtle-zoom"
        style={{
          backgroundImage: "url('/images/message/background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-1 md:order-1 glass-card p-4">
            <Image
              src="/images/message/couple.jpg"
              alt="Us"
              width={600}
              height={400}
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="order-2 md:order-2 glass-card p-8 md:p-12">
            <h2 className="mb-6 font-serif text-3xl font-bold text-gray-900">
              {t('title')}
            </h2>
            <p className="text-lg text-gray-700 font-sans leading-relaxed">
              {t('body')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
