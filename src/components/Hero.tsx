interface HeroProps {
  ctaText?: string;
  secondaryText?: string;
}

export function Hero({
  ctaText = "Plan Your Event",
  secondaryText = "Explore Services",
}: HeroProps) {
  return (
    <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary-900 leading-tight">
            Unforgettable Experiences,{" "}
            <span className="text-primary-600">Perfectly Organized</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-secondary-600 max-w-2xl mx-auto">
            We specialize in creating memorable team building activities,
            corporate gatherings, fun outings, and short trips that bring people
            together.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold text-lg hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-600/25"
            >
              {ctaText}
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-xl font-semibold text-lg hover:bg-primary-50 transition-all"
            >
              {secondaryText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
