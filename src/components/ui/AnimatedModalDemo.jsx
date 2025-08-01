"use client";
import React from "react";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom"; // Import Link

export function AnimatedModalDemo() {
  return (
    <Link
      to="/projects"
      className={cn(
        "px-4 py-2 rounded-md relative overflow-hidden",
        "btn-rainbow-border flex justify-center group/modal-btn"
      )}
    >
      <span
        className="font-bold group-hover/modal-btn:translate-x-40 text-center transition duration-500 text-black"
      >
        Projects
      </span>
      <div
        className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-black z-20"
      >
        💼
      </div>
    </Link>
  );
}