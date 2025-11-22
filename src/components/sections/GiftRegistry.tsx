import { useTranslations } from 'next-intl';

export function GiftRegistry() {
  const t = useTranslations('Gifts');

  return (
    <section id="gifts" className="relative py-20 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed animate-subtle-zoom"
        style={{
          backgroundImage: "url('/images/gifts/background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="glass-card mx-auto max-w-2xl p-12">
          <h2 className="mb-8 font-serif text-4xl font-bold text-gray-900">{t('title')}</h2>
          <div className="text-lg text-gray-700 font-sans leading-relaxed space-y-6">
            <p>
              {t('poem1').split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <p>
              {t('poem2').split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <p>
              {t('poem3').split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <p className="font-bold text-gray-900 mt-8">
              {t('dogsNote')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
