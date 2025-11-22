import { useTranslations } from 'next-intl';

export function When() {
  const t = useTranslations('When');

  return (
    <section id="when" className="relative py-20 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed animate-subtle-zoom"
        style={{
          backgroundImage: "url('/images/when/background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="glass-card mx-auto max-w-2xl p-12">
          <h2 className="mb-8 font-serif text-4xl font-bold text-gray-900">{t('title')}</h2>
          <p className="text-xl leading-relaxed text-gray-900 font-sans">
            {t.rich('description', {
              date: t('date'),
              timeArrival: t('timeArrival'),
              timeCeremony: t('timeCeremony'),
              bold: (chunks) => <span className="font-bold">{chunks}</span>
            })}
            <br />
            <br />
            {t.rich('accommodation', {
              bold: (chunks) => <span className="font-bold">{chunks}</span>
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
