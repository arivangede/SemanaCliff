"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";

export default function HeroSection() {
  const imageRef = useRef<HTMLImageElement>(null);

  // Efek Parallax
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        // Menggerakkan gambar ke atas lebih lambat dari scroll (parallax)
        imageRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="relative flex items-center justify-center w-full h-screen p-8 overflow-hidden md:px-32">
      <Image
        ref={imageRef}
        src={"/img/hero-section.jpg"}
        alt="hero"
        height={1660}
        width={3000}
        className="absolute h-[120%] w-full top-0 left-0 object-cover -z-10"
        style={{ willChange: "transform" }}
      />
      <div className="absolute inset-0 bg-black/20 -z-5"></div>
      <div className="flex flex-col w-full gap-2 text-white">
        <motion.div whileInView={{ opacity: 1 }}>
          <AnimatePresence>
            <motion.h5
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-lg font-cormorant-light"
            >
              Welcome to Semana Cliff
            </motion.h5>
          </AnimatePresence>
          <AnimatePresence>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-3xl md:max-w-[40%] font-cormorant-semibold"
            >
              “Where Nature Embraces You, and Hospitality Feels Like Home”
            </motion.h2>
          </AnimatePresence>
          <AnimatePresence>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="text-lg md:max-w-[50%]"
            >
              Experience the warmth of genuine hospitality amidst breathtaking
              greenery and the soothing sound of flowing rivers. Let
              nature&apos;s serenity and our heartfelt service create
              unforgettable moments for you.
            </motion.p>
          </AnimatePresence>
          <AnimatePresence>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="text-2xl font-cormorant-semibold"
            >
              Stay • Relax • Reconnect
            </motion.span>
          </AnimatePresence>
        </motion.div>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          >
            <Button size={'lg'} variant={'outline'}>
              Contact Us
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
