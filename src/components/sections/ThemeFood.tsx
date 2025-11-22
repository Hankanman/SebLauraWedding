import { useTranslations } from 'next-intl';

export function ThemeFood() {
  const t = useTranslations('ThemeFood');

  return (
    <section id="theme" className="relative py-20 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed animate-subtle-zoom"
        style={{
          backgroundImage: "url('/images/theme/background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="glass-card mx-auto max-w-3xl p-12">
          <h2 className="mb-8 font-serif text-4xl font-bold text-gray-900">{t('title')}</h2>
          <div className="text-xl leading-relaxed text-gray-900 font-sans">
            <p className="mb-6 font-bold italic">
              {t('theme')}
            </p>
            <p className="mb-6">
              {t('clothing')}
            </p>
            <p>
              {t.rich('food', {
                link: (chunks) => (
                  <a href="#RSVP" className="font-bold text-brand hover:underline">
                    {chunks}
                  </a>
                )
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
