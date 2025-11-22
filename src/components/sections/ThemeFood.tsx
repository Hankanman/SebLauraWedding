export function ThemeFood() {
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
          <h2 className="mb-8 font-serif text-4xl font-bold text-gray-900">Theme & Food</h2>
          <div className="text-xl leading-relaxed text-gray-900 font-sans">
            <p className="mb-6 font-bold italic">
              Be Your Own Weird (Because we are weird and so are you)
            </p>
            <p className="mb-6">
              We want you to be comfortable, so wear what you want, be who you are,
              you can come all dressed up, or a little more casual, or maybe a
              little fantastical!
            </p>
            <p>
              We are having a party, so be prepared to dance, drink, and eat. There
              will be a BBQ, with vegan and vegetarian options, so there is
              something for everyone. Just let us know any preferences when you{" "}
              <a href="#RSVP" className="font-bold text-brand hover:underline">
                RSVP below
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
