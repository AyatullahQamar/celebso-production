"use client";

import { motion } from "framer-motion";

export default function EnquiryForm() {

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-neutral-950 px-4 md:px-6 py-24 md:py-40 overflow-hidden">
      
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.06),transparent_60%)]" />

      <div className="relative mx-auto max-w-5xl">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10 md:mb-16 max-w-2xl"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/50">
            Booking Request
          </span>

          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] text-white">
            Artist
            <br />
            <span className="text-white/60">Slot Booking</span>
          </h1>

          <p className="mt-6 text-sm sm:text-base text-neutral-400 leading-relaxed">
            Tell us about your event. We curate premium artist experiences
            tailored to your occasion.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 md:gap-y-10 border-t border-white/10 pt-8 md:pt-12"
        >

          {[
            { label: "Full Name", placeholder: "Your full name", type: "text" },
            { label: "Email Address", placeholder: "you@email.com", type: "email" },
            { label: "Mobile / WhatsApp", placeholder: "+91 XXXXX XXXXX", type: "text" },
            { label: "City", placeholder: "Event city", type: "text" },
            { label: "Event Date", type: "date" },
            { label: "Preferred Time Slot", placeholder: "Evening / Night", type: "text" },
            { label: "Estimated Budget", placeholder: "₹ 50,000 – ₹ 1,00,000", type: "text" },
          ].map((field, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="flex flex-col gap-2 px-0 md:px-6"
            >
              <label className="text-xs uppercase tracking-widest text-white/40">
                {field.label}
              </label>

              <input
                type={field.type}
                placeholder={field.placeholder}
                className="
                  bg-transparent
                  border-b border-white/20
                  py-2
                  text-white
                  placeholder:text-white/30
                  focus:outline-none
                  focus:border-white
                  transition
                "
              />
            </motion.div>
          ))}

          {/* Button */}
          <motion.div
            variants={fadeUp}
            className="w-fit md:col-span-2 mt-6 md:mt-10 bg-[#fcb9005d] px-6 md:px-10"
          >
            <button
              type="submit"
              className="relative inline-flex items-center gap-4 py-2 text-white text-sm tracking-wide select-none"
            >
              <span className="relative z-10">Submit Enquiry</span>
              <span className="h-px w-14 bg-white transition-all duration-300" />
            </button>
          </motion.div>

        </motion.form>
      </div>
    </section>
  );
}
