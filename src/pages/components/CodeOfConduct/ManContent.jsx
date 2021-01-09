import React from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Link } from "react-router-dom";

// Import page specific stuff
import logo from "../../../images/logo-full.png";

export default function MainContent() {
  const easing = [0.6, -0.05, 0.01, 0.99];
  const fade1 = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: easing,
      },
    },
  };

  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <motion.div variants={fade1} className="container">
          {/* Type here */}
      </motion.div>
    </motion.div>
  );
}
