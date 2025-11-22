export function When() {
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
          <h2 className="mb-8 font-serif text-4xl font-bold text-gray-900">When</h2>
          <p className="text-xl leading-relaxed text-gray-900 font-sans">
            We are getting married on{" "}
            <span className="font-bold">Monday, 7th of October 2024</span>. You can
            arrive from <span className="font-bold">2pm</span> and the ceremony
            will start at <span className="font-bold">3pm</span>
            <br />
            <br />
            There is accommodation onsite (details below) so if you expect to stay
            we suggest securing your availability for the{" "}
            <span className="font-bold">7th and 8th</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
