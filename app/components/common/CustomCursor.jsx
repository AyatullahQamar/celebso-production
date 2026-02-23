"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch devices and hide cursor
    const hasTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(hasTouch);
    if (hasTouch) return;

    const moveCursor = (e) => {
      setPosition({
        x: e.clientX - 12,
        y: e.clientY - 12,
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  if (isTouch) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-[#f84131]/30 pointer-events-none z-[999] mix-blend-difference hidden md:block"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 500, damping: 40 }}
    />
  );
}
