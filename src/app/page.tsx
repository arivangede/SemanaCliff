"use client";

import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import FacilitiesSection from "@/components/sections/FacilitiesSection";
import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import LocationSection from "@/components/sections/LocationSection";
import ReviewSection from "@/components/sections/ReviewSection";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100 && document.readyState === "complete") {
          setTimeout(() => {
            clearInterval(interval);
            setLoading(false);
            return 100;
          }, 800);
        }
        return oldProgress + 10;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <Loading progress={progress} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-screen"
        >
          <Navbar />
          <HeroSection />
          <AboutSection />
          <FacilitiesSection />
          <ReviewSection />
          <LocationSection />
          <Footer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
