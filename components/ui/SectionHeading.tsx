// ─── SECTION HEADING COMPONENT ───

"use client";

import { motion } from "framer-motion";
import { fadeInUp, useScrollReveal } from "@/lib/motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  id?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  className = "",
  id,
}: SectionHeadingProps) {
  const motionProps = useScrollReveal(fadeInUp);

  return (
    <motion.div
      className={`mb-10 text-center md:mb-14 ${className}`}
      {...motionProps}
    >
      <h2
        id={id}
        className="text-text-dark text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-subtle mx-auto mt-3 max-w-2xl text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

// ─── END SECTION HEADING ───
