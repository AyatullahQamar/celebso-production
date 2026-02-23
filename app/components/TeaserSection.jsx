"use client";
import { useState, useRef,  useEffect } from "react";
import VideoModal from "../components/common/VideoModal";


export default function TeaserSection() {
  const [openVideo, setOpenVideo] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleSound = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };
useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    },
    {
      threshold: 0.6, // 60% video visible hona chahiye play ke liye
    }
  );

  observer.observe(video);

  return () => observer.disconnect();
}, []);



  return (
    <>
      <section className="relative w-full min-h-screen bg-[#f7f7f5] flex flex-col items-center justify-center overflow-hidden py-20">

        <div className="max-w-4xl text-center px-6 mb-40">
          <h2 className="text-[6vw] md:text-[2.6vw] leading-tight font-normal text-[#312e2e]">
            Celebso Enterprises empowers artists to step into the spotlight —
            supporting talent, shaping presence, and connecting creativity with millions.
          </h2>
        </div>
        <div className="absolute w-[580px] h-[580px] rounded-full border border-black/10 pointer-events-none"></div>


        <span className="absolute left-1/2 -translate-x-[215px] md:-translate-x-[370px] -translate-y-[100px] flex items-center uppercase text-black/20 text-7xl font-light">
          Upcoming
          <svg
            viewBox="0 0 512 512"
            className="text-[#fcb900] opacity-60 "
            height="70"
            width="70"
            fill="currentColor"
          >
            <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm83.8 211.9l-137.2 83c-2.9 1.8-6.7-.4-6.7-3.9V173c0-3.5 3.7-5.7 6.7-3.9l137.2 83c2.9 1.7 2.9 6.1 0 7.8z" />
          </svg>
        </span>

        <span className="absolute left-1/2 translate-x-[25px] md:translate-x-[140px] -translate-y-[100px] uppercase text-black/20 text-7xl font-light">
          Event
        </span>

        {/* FULL WIDTH EVENT VIDEO */}
        <div className="relative w-full mt-55">

          <video
            ref={videoRef}
            src="/video/video.mp4"
          
            muted
            loop
            playsInline
            className="w-full h-[80vh] object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          {/* SOUND BUTTON */}
        <button
  onClick={toggleSound}
  className="absolute bottom-8 right-8 z-20 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:scale-110 transition duration-300"
>
  {isMuted ? (
    // MUTED ICON
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.5 12l4.5 4.5-1.5 1.5L15 13.5l-4.5 4.5H9v-6H4V8h5V2h1.5l4.5 4.5 4.5-4.5 1.5 1.5L16.5 12z"/>
    </svg>
  ) : (
    // SOUND ICON
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 9v6h4l5 5V4L9 9H5z"/>
      <path d="M14.5 8.5a4 4 0 010 7"/>
    </svg>
  )}
</button>


        </div>



      </section>

      <VideoModal open={openVideo} onClose={() => setOpenVideo(false)} />
    </>
  );
}
