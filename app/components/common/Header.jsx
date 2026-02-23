"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-3 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-[1100px] px-0">
      <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-b from-[#2c2c2c] to-[#1f1f1f] text-white shadow-2xl">

       
        <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
 
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-4 text-sm tracking-wide cursor-pointer z-50"
          >
        
            <div className="relative flex items-center justify-center w-6 h-6">

              <motion.span
                animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                }}
                className="absolute w-5 h-[1.5px] bg-white origin-center"
              />

              <motion.span
                animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                }}
                className="absolute w-5 h-[1.5px] bg-white origin-center"
              />

            </div>
 
            <motion.span
              key={open ? "close" : "menu"}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="leading-none flex items-center"
            >
              {open ? "Close" : "Menu"}
            </motion.span>
          </button>



      
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <img src="assest/celebso.webp" alt="Celebso" className="w-20 md:w-28" />
          </Link>

     
          <Link
            href="/enquiry"
            className="p-2 rounded-full bg-[#444] hover:bg-[#555]"
          >
            <svg
              viewBox="0 0 24 24"
              className="text-[#fcb900]"
              height="20"
              width="20"
              fill="currentColor"
            >
              <path d="M2 8.99374C2 5.68349 4.67654 3 8.00066 3H15.9993C19.3134 3 22 5.69478 22 8.99374V21H8.00066C4.68659 21 2 18.3052 2 15.0063V8.99374ZM20 19V8.99374C20 6.79539 18.2049 5 15.9993 5H8.00066C5.78458 5 4 6.78458 4 8.99374V15.0063C4 17.2046 5.79512 19 8.00066 19H20ZM14 11H16V13H14V11ZM8 11H10V13H8V11Z" />
            </svg>
          </Link>
        </div>

     <AnimatePresence mode="wait">
  {open && (
    <motion.div
      key="nav-wrapper"
      
      initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
      animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
      exit={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.76, 0, 0.24, 1] 
      }}
      className="overflow-hidden bg-black/90 w-full"
    >
      <nav className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 py-6 md:py-10 border-t border-[#fcb900]">
        {[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Services", href: "/services" },
          { name: "Enquiry", href: "/enquiry" },
          { name: "Login", href: "/login" },
        ].map((item, i, array) => (
          <motion.a
            key={item.name}
            href={item.href}
             
            initial={{ opacity: 0, y: 60 }}
           
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.7,
                delay: 0.2 + (i * 0.1),  
                ease: [0.215, 0.61, 0.355, 1] 
              }
            }}
            
            exit={{ 
              opacity: 0, 
              y: 60,
              transition: {
                duration: 0.5,
                 
               
                delay: (array.length - 1 - i) * 0.08, 
                ease: [0.76, 0, 0.24, 1]
              }
            }}
            className="text-2xl md:text-[1.2vw] capitalize font-medium tracking-wide text-white/90 hover:text-[#fcb900] transition-colors"
          >
            {item.name}
          </motion.a>
        ))}
      </nav>
    </motion.div>
  )}
</AnimatePresence>



      </div>
    </header>
  );
}
