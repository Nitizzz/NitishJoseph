"use client";
import { MaskContainer } from "../ui/svg-mask-effect";

export function SVGMaskEffectDemo() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <MaskContainer
        revealText={
          <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-slate-800 dark:text-white">
            Hello, I'm Nitish Joseph 😉
          </p>
        }
      >
        Aspiring Developer with
        <span className="text-[#FFD700]"> Zeal to adaptability</span>
      </MaskContainer>
    </div>
  );
}
