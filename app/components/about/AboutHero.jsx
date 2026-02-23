"use client";

export default function AboutHero() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16 md:pb-24">

      {/* Label */}
      <p className="uppercase tracking-widest text-xs md:text-sm text-gray-500 mb-4 md:mb-6">
        About Celebso
      </p>

      {/* Headline */}
      <h1 className="text-3xl sm:text-4xl md:text-7xl text-[#fcb900] font-extrabold leading-tight max-w-5xl">
        We turn talent
        <br />
        into{" "}
        <span className="text-[#312e2e]">
          global influence
        </span>.
      </h1>

      {/* Description */}
      <p className="mt-6 md:mt-10 text-base md:text-xl text-gray-600 max-w-3xl leading-relaxed">
        Celebso is built for artists who don't just want fame — but recognition,
        respect, and a legacy that travels beyond borders.
      </p>

    </section>
  );
}
