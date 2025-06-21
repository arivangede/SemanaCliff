"use client";

import { useState } from "react";
import Hamburger from "./custom-icons/Hamburger";
import { AnimatePresence, motion } from "motion/react";

export default function MenuButton() {
  const [checked, setChecked] = useState(Boolean);

  const toogle = () => {
    setChecked(!checked);
  };

  return (
    <>
      <button onChange={toogle}>
        <Hamburger checked={checked} />
      </button>
      <AnimatePresence>{checked && <MenuDrawer />}</AnimatePresence>
    </>
  );
}

const MenuDrawer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute left-0 flex flex-col w-full gap-4 p-4 px-10 top-full bg-emerald-900/50 sm:flex-row sm:justify-between sm:px-16"
    >
      <a href="#" className="transition duration-300 hover:text-orange-400">
        Facilities
      </a>
      <a
        href="#about"
        className="transition duration-300 hover:text-orange-400"
      >
        About Us
      </a>
      <a
        href="#reviews"
        className="transition duration-300 hover:text-orange-400"
      >
        Guest Reviews
      </a>
      <a
        href="#location"
        className="transition duration-300 hover:text-orange-400"
      >
        Our Location
      </a>
    </motion.div>
  );
};
