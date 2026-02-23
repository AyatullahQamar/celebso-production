export default function MagazineLayout() {
  return (
    <section className="bg-[#f4f1ea] py-16 md:py-32 text-[#1a1a1a]">

      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* TITLE */}
        <div className="mb-10 md:mb-20">
          <h1 className="text-4xl md:text-7xl font-light tracking-wide">
            FASHION <span className="font-semibold">MAGAZINE</span>
          </h1>
          <p className="text-sm tracking-[0.4em] mt-4">ISSUE 05</p>
        </div>

        {/* GRID - Mobile: stacked, Desktop: 12-col complex grid */}
        <div className="flex flex-col gap-4 md:hidden">

          {/* BIG COVER IMAGE */}
          <div className="overflow-hidden aspect-[4/5]">
            <img src="/models/model3.jpg" alt="Fashion cover" className="w-full h-full object-cover" />
          </div>

          {/* TEXT BLOCK */}
          <div className="bg-white p-6">
            <h3 className="text-xl font-semibold">EXTREMELY RISKY DISCOVERY</h3>
            <p className="text-sm text-black/60 mt-2">
              A narrative of identity and performance merging into visual storytelling.
            </p>
          </div>

          {/* SMALL IMAGE */}
          <div className="overflow-hidden aspect-[3/4]">
            <img src="/models/model4.jpg" alt="Fashion portrait" className="w-full h-full object-cover" />
          </div>

          {/* LONG TEXT */}
          <div className="bg-white p-6">
            <h2 className="text-3xl font-bold">SPIRIT</h2>
            <p className="text-sm text-black/60 mt-2">
              Sound, movement and expression forming a cinematic presence.
            </p>
          </div>

          {/* VERTICAL IMAGE */}
          <div className="overflow-hidden aspect-[2/3]">
            <img src="/models/model1.jpg" alt="Fashion vertical" className="w-full h-full object-cover" />
          </div>

          {/* ARTICLE */}
          <div className="bg-white p-6">
            <h3 className="text-lg font-semibold">PHOTOGENIC PERMANENT CLASS</h3>
            <p className="text-sm text-black/60 mt-2">
              Emotion captured frame by frame.
            </p>
          </div>

          {/* WIDE IMAGE */}
          <div className="overflow-hidden aspect-video">
            <img src="/models/model2.jpg" alt="Fashion wide" className="w-full h-full object-cover" />
          </div>

          {/* QUOTE */}
          <div className="bg-white p-6">
            <p className="text-xl font-light italic">
              Emotional happiness comes from real expression.
            </p>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-12 gap-6 auto-rows-[120px]">

          {/* BIG COVER IMAGE */}
          <div className="col-span-6 row-span-4 overflow-hidden">
            <img src="/models/model3.jpg" alt="Fashion cover" className="w-full h-full object-cover" />
          </div>

          {/* TEXT BLOCK */}
          <div className="col-span-3 row-span-2 bg-white p-6 flex flex-col justify-between">
            <h3 className="text-xl font-semibold">EXTREMELY RISKY DISCOVERY</h3>
            <p className="text-sm text-black/60">
              A narrative of identity and performance merging into visual storytelling.
            </p>
          </div>

          {/* SMALL IMAGE */}
          <div className="col-span-3 row-span-3 overflow-hidden">
            <img src="/models/model4.jpg" alt="Fashion portrait" className="w-full h-full object-cover" />
          </div>

          {/* LONG TEXT */}
          <div className="col-span-4 row-span-2 bg-white p-6">
            <h2 className="text-3xl font-bold">SPIRIT</h2>
            <p className="text-sm text-black/60 mt-2">
              Sound, movement and expression forming a cinematic presence.
            </p>
          </div>

          {/* VERTICAL IMAGE */}
          <div className="col-span-2 row-span-4 overflow-hidden">
            <img src="/models/model1.jpg" alt="Fashion vertical" className="w-full h-full object-cover" />
          </div>

          {/* ARTICLE */}
          <div className="col-span-3 row-span-3 bg-white p-6">
            <h3 className="text-lg font-semibold">PHOTOGENIC PERMANENT CLASS</h3>
            <p className="text-sm text-black/60 mt-2">
              Emotion captured frame by frame.
            </p>
          </div>

          {/* WIDE IMAGE */}
          <div className="col-span-6 row-span-3 overflow-hidden">
            <img src="/models/model2.jpg" alt="Fashion wide" className="w-full h-full object-cover" />
          </div>

          {/* QUOTE */}
          <div className="col-span-3 row-span-2 bg-white p-6 flex items-center">
            <p className="text-xl font-light italic">
              Emotional happiness comes from real expression.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
