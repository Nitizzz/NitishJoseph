"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { TextGenerateEffect } from "../ui/text-generate-effect";

export function TextGenerateEffectDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const words = `"The reasonable man adapts himself to the world; the unreasonable one persists in trying to adapt the world to himself.
Therefore all progress depends on the unreasonable man."
— George Bernard Shaw`;

  return (
    <section
      ref={ref}
      className="min-h-screen bg-black flex items-center justify-center px-4"
    >
      {isInView && (
        <TextGenerateEffect
          words={words}
          className="text-white text-center text-2xl md:text-4xl max-w-2xl"
        />
      )}
    </section>
  );
}
