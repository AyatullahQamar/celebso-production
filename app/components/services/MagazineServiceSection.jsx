const MagazineServiceSection = () => {
  return (
    <div className="bg-[#e9e5e1] min-h-screen overflow-hidden grayscale">

      {/* Mobile Layout */}
      <div className="flex flex-col gap-8 px-4 py-16 md:hidden">

        {/* TITLE */}
        <h1 className="text-6xl leading-[0.85] tracking-tighter font-serif uppercase">
          BEHIND<br />THE<br />SCENES
        </h1>

        {/* Images stacked */}
        <div className="w-full aspect-[3/4]">
          <img 
            src="/models/model04.jpg"
            alt="Blazer Model"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full aspect-[3/4]">
          <img 
            src="/models/model05.jpg"
            alt="Portrait"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-3/4 aspect-[3/4]">
          <img 
            src="/models/model02.jpg"
            alt="Sitting Model"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full aspect-[4/5]">
          <img 
            src="/models/model03.jpg"
            alt="Feature Model"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Credits */}
        <div className="text-[11px] tracking-[0.25em] leading-loose uppercase font-sans">
          <p>PHOTOGRAPHER DIMA</p>
          <p>STYLIST FEDERICO</p>
          <p>MAKEUP SANDRA</p>
          <p>HAIR STEVEN</p>
          <p>MODELS SARA & LANA</p>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:flex items-center min-h-screen px-16 overflow-x-auto" style={{ gap: "5rem" }}>

        {/* SECTION 1 — OVERLAPPING TITLE */}
        <section className="relative w-[500px] flex-shrink-0">
          
          <h1 className="text-[120px] leading-[0.8] tracking-tighter font-serif uppercase relative z-10">
            BEHIND<br />THE<br />SCENES
          </h1>

          {/* Overlapping Image */}
          <div className="absolute top-20 -right-32 w-72 h-[450px] z-0">
            <img 
              src="/models/model04.jpg"
              alt="Blazer Model"
              className="w-full h-full object-cover"
            />
          </div>

        </section>


        {/* SECTION 2 — PORTRAIT STACK */}
        <section className="flex flex-col justify-center flex-shrink-0" style={{ gap: "2.5rem" }}>

          <div className="w-80 h-[500px]">
            <img 
              src="/models/model05.jpg"
              alt="Portrait"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-64 h-[400px] self-end">
            <img 
              src="/models/model02.jpg"
              alt="Sitting Model"
              className="w-full h-full object-cover"
            />
          </div>

        </section>


        {/* SECTION 3 — LARGE FEATURE + CREDITS */}
        <section className="flex items-end flex-shrink-0" style={{ gap: "2.5rem" }}>

          <div className="w-[500px] h-[650px]">
            <img 
              src="/models/model03.jpg"
              alt="Feature Model"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Credits */}
          <div className="text-[11px] tracking-[0.25em] leading-loose uppercase font-sans mb-6">
            <p>PHOTOGRAPHER DIMA</p>
            <p>STYLIST FEDERICO</p>
            <p>MAKEUP SANDRA</p>
            <p>HAIR STEVEN</p>
            <p>MODELS SARA & LANA</p>
          </div>

        </section>

      </div>
    </div>
  );
};

export default MagazineServiceSection;
