export function GiftRegistry() {
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
          <h2 className="mb-8 font-serif text-4xl font-bold text-gray-900">What</h2>
          <div className="text-lg text-gray-700 font-sans leading-relaxed space-y-6">
            <p>
              To avoid your gifts being regifted or stashed
              <br />
              We could really make use of some money or cash
            </p>
            <p>
              Towards our honeymoon, a car, a house, who knows
              <br />
              Your generosity in our memory will eternally glow
            </p>
            <p>
              But please don&apos;t think of this is as a fee
              <br />
              Your presence, not presents bring us glee
            </p>
            <p className="font-bold text-gray-900 mt-8">
              As much as we would love to invite everyone&apos;s children, this is an
              adult only event. Please note this event is for our own dogs only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
