"use client";
import { useState, useEffect, useRef } from "react";
import { motion, animate } from "motion/react";
import { cn } from "../../lib/utils";

export const MaskContainer = ({
  children,
  revealText,
  size = 50,
  revealSize = 500,
  className,
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [maskSize, setMaskSize] = useState(`${size}px`);
  const containerRef = useRef<HTMLDivElement>(null);

  // Animate mask size on hover
  useEffect(() => {
    const controls = animate(
      parseInt(maskSize),
      isHovered ? revealSize : size,
      {
        duration: 0.3,
        onUpdate: (latest) => {
          setMaskSize(`${latest}px`);
        },
      }
    );
    return () => controls.stop();
  }, [isHovered, revealSize, size]);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const el = containerRef.current;
    el?.addEventListener("mousemove", handleMouseMove);
    return () => el?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const offsetX = mousePosition.x - parseInt(maskSize) / 2;
  const offsetY = mousePosition.y - parseInt(maskSize) / 2;

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("relative w-full h-full overflow-hidden", className)} // CHANGED: no longer fixed
      style={{ backgroundColor: "black" }}
    >
      {/* Background content (white text) */}
      <div className="absolute inset-0 flex items-center justify-center text-white">
        {revealText}
      </div>

      {/* Top layer with mask following mouse */}
      <div
        className="absolute inset-0 bg-white text-black [mask-image:url('/mask.svg')] [mask-repeat:no-repeat]"
        style={{
          maskPosition: `${offsetX}px ${offsetY}px`,
          WebkitMaskPosition: `${offsetX}px ${offsetY}px`,
          maskSize: maskSize,
          WebkitMaskSize: maskSize,
        }}
      >
        <div className="flex h-full w-full items-center justify-center text-4xl font-bold">
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
