import Image from "next/image";
import { useTranslations } from 'next-intl';

export function Where() {
  const t = useTranslations('Where');

  return (
    <section id="where" className="relative py-20 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed animate-subtle-zoom"
        style={{
          backgroundImage: "url('/images/where/background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="glass-card mx-auto max-w-5xl p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            {/* Map */}
            <div className="h-[400px] w-full overflow-hidden rounded-lg shadow-lg bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156957.22849913075!2d-0.30196687164535546!3d52.07141573328074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48763170ca07f835%3A0xf6bf4973147c39c5!2sThe%20Farmhouse%20at%20Redcoats!5e0!3m2!1sen!2suk!4v1712343457458!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Details */}
            <div className="flex flex-col items-start md:pl-10 text-gray-900">
              <Image
                src="/images/common/logo.png"
                alt="Logo"
                width={192}
                height={192}
                className="mb-8 w-48 object-contain drop-shadow-md invert"
              />
              <h2 className="mb-6 font-serif text-3xl font-bold">{t('title')}</h2>
              <div className="text-lg font-sans">
                <a
                  href="https://maps.app.goo.gl/7bZqm4XsDHHUiZQ96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition-colors block"
                >
                  <p className="font-bold mb-2">{t('venueName')},</p>
                  <p>{t('addressLine1')},</p>
                  <p>{t('addressLine2')},</p>
                  <p>{t('addressLine3')},</p>
                  <p>{t('postcode')}</p>
                </a>
                <p className="mt-4">{t('phone')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
