import React from "react";
import { motion } from "motion/react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  id?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
  id,
}) => {
  const getInitialOffset = () => {
    switch (direction) {
      case "up":
        return { y: 28, x: 0 };
      case "down":
        return { y: -28, x: 0 };
      case "left":
        return { x: 28, y: 0 };
      case "right":
        return { x: -28, y: 0 };
      case "none":
        return { x: 0, y: 0 };
      default:
        return { y: 28, x: 0 };
    }
  };

  const offset = getInitialOffset();

  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: false, amount: 0.12 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};
