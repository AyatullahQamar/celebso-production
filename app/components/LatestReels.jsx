"use client";

import { useRef, useState , useEffect } from "react";

export default function LatestReels() {
  return (
    <>
      <section className="relative py-16 md:py-32 bg-neutral-950 text-white overflow-hidden">
 
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.06),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-6">

         
          <div className="flex flex-col lg:flex-row justify-between mb-10 md:mb-20 gap-6 md:gap-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
              Latest <span className="text-white/60">Reels</span>
            </h2>

            <p className="max-w-xl text-lg md:text-2xl text-white/70">
              Curated short-form visuals built for attention, emotion & performance.
            </p>
          </div>
 
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 md:px-14">
            <ReelCard video="/reels/reel1.mp4" handle="@dummyhandle" />
             <ReelCard video="/reels/reel2.mp4" handle="@dummyhandle" />
            <ReelCard video="/reels/reel3.mp4" handle="@dummyhandle" />
             <ReelCard video="/reels/singer.mp4" handle="@dummyhandle" />
          </div>
        </div>
      </section>
    </>
  );
}
 

function ReelCard({ video, handle }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        // screen me aayi → play
        video.play().catch(() => {});
        setIsPlaying(true);
      } else {
        // screen se gayi → pause
        video.pause();
        setIsPlaying(false);
      }
    },
    {
      threshold: 0.65, // 65% visible hone par hi play
    }
  );

  observer.observe(video);

  return () => observer.disconnect();
}, []);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="group relative rounded-lg overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
 
      <video
        ref={videoRef}
        src={video}
        
        muted
        loop
        playsInline
        className="w-full h-[280px] sm:h-[350px] md:h-[450px] object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
      />
 
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
 
      <div className="absolute bottom-12 md:bottom-6 left-1/2 -translate-x-1/2 px-3 md:px-4 py-1 md:py-1.5 text-[10px] md:text-xs bg-white/10 backdrop-blur-md border border-white/20 whitespace-nowrap">
        {handle}
      </div>
 
      <button
        onClick={togglePlay}
        className="absolute bottom-3 md:bottom-6 left-3 md:left-6 w-7 h-7 md:w-9 md:h-9 rounded-full bg-[#fcb900] text-[#312e2e]
                   backdrop-blur-md border border-white/20 flex items-center justify-center
                   opacity-90 group-hover:opacity-100 transition"
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>
 
      <button
        onClick={toggleMute}
        className="absolute bottom-3 md:bottom-6 right-3 md:right-6 w-7 h-7 md:w-9 md:h-9 rounded-full bg-[#fcb900] text-[#312e2e]
                   backdrop-blur-md border border-white/20 flex items-center justify-center
                   opacity-90 group-hover:opacity-100 transition"
      >
        {isMuted ? <VolumeOffIcon /> : <VolumeOnIcon />}
      </button>
    </div>
  );
}
 

function PlayIcon() {
  return (
   <svg 
      width="16" height="16" viewBox="0 0 24 24" 
      fill="none" stroke="currentColor" strokeWidth="2" 
      style={{ display: 'block', margin: 'auto' }}  
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="14" y="3" width="5" height="18" rx="1" />
      <rect x="5" y="3" width="5" height="18" rx="1" />
    </svg>
  );
}

function VolumeOnIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
      <path d="M16 9a5 5 0 0 1 0 6" />
      <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
    </svg>
  );
}

function VolumeOffIcon() {
  return (
   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" 
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
     
      <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
      <path d="M16 9a5 5 0 0 1 0 6" />
      <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
       
      <line x1="22" y1="2" x2="2" y2="22" />
    </svg>
  );
}
