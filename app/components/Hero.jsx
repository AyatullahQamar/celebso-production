"use client";

export default function Hero() {
  return (
    <section className="hero relative w-full h-screen bg-[#f7f7f5] overflow-hidden">

       
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-10"
        src="assest/layer.webp"
        alt="Background texture"
      />
 
      <div className="absolute top-6 left-4 md:left-6 text-[10px] md:text-xs tracking-widest text-grey">
        ● REC 00:00:12
      </div>
 
      <div className="absolute top-6 right-4 md:right-6 text-[10px] md:text-xs tracking-widest text-grey">
        ISO 800 • 24FPS
      </div>

  
      <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-50 pointer-events-none">
        <img
          src="assest/videocamera.png"
          alt="Video Camera"
          className="w-full h-[40vh] md:h-[60vh] object-contain"
        />
      </div>

    
      <div className="relative z-10 h-full px-4 md:px-6 flex flex-col justify-center items-center text-center">

        <h1 className="text-3xl sm:text-4xl md:text-[5vw] text-[#312e2e] font-bold text-center">
          CELEBSO PRODUCTION
        </h1>

    
        <p className="mt-2 flex flex-wrap items-center justify-center gap-2 md:gap-4 text-xs sm:text-sm md:text-[1vw] text-[#4a4747] font-bold leading-none uppercase bg-[#fcb900] px-4 md:px-6 py-3 md:py-4">

          <span>Launching Talent</span>

          <span className="text-[#d8d8d8]">
            <svg
              viewBox="0 0 24 24"
              width="8"
              height="8"
              fill="currentColor"
              className="md:w-3 md:h-3"
            >
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
            </svg>
          </span>

          <span>Creating Celebrities</span>

          <span className="text-[#d8d8d8]">
            <svg
              viewBox="0 0 24 24"
              width="8"
              height="8"
              fill="currentColor"
              className="md:w-3 md:h-3"
            >
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
            </svg>
          </span>

          <span>Taking India Global</span>

        </p>

      </div>
    </section>
  );
}
