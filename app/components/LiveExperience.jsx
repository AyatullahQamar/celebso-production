"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LiveExperience() {
  return (
    <section className="w-full px-4 bg-[#f7f7f5] -mt-8">

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-[1200px] mx-auto rounded-[28px] overflow-hidden bg-gradient-to-br from-[#1b1b1b] via-[#121212] to-black border border-white/10"
      >
 
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#fcb900]/20 blur-[120px]"></div>
        </div> 
        <div className="relative z-10 px-6 md:px-20 py-12 md:py-20 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
 
          <div className="max-w-2xl text-center md:text-left">

            <p className="text-sm uppercase tracking-[0.3em] text-white/50">
              Live Experience
            </p>

            <h2 className="mt-4 text-xl sm:text-2xl md:text-4xl font-semibold text-white leading-tight">
              Book Your Ticket <br />
              <span className="text-[#fcb900]">
                For The Next Big Show
              </span>
            </h2>

            <p className="mt-6 text-white/60 text-sm leading-relaxed">
              Secure your seat for an unforgettable live performance. 
              Limited availability. Premium experience. Instant booking.
            </p>

          </div>
 
          <div>
            <Link
              href="#"
              target="_blank"
              className="inline-flex items-center gap-3 md:gap-4 px-6 md:px-10 py-2.5 rounded-full bg-[#fcb900] text-black font-semibold text-base md:text-lg tracking-wide transition hover:scale-105 duration-300 hover:shadow-[0_5px_40px_rgba(252,185,0,0.5)]"
            >
              Book Now

              <svg
                viewBox="0 0 24 24"
                height="22"
                width="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>

            </Link>
            
          </div>

        </div>

      </motion.div>

    </section>
  );
}
