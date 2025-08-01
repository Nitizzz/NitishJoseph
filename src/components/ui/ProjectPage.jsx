"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../../hooks/use-outside-click";

const cards = [
  {
    title: "AI Recipe Generator",
    description: "A web application that generates recipes based on user-provided ingredients using AI.",
    src: "/assets/images/Screenshot 2025-07-27 095250.png",
    ctaText: "Visit",
    ctaLink: "https://github.com/Nitizzz/ByteChef",
    technologies: ["React", "Node.js", "Gemini API", "Gradio"],
    content: () => {
      return (
        <p>
          This project leverages the power of generative AI to create unique and delicious recipes from a list of ingredients a user has on hand.
          It's built with a modern tech stack to provide a seamless and responsive user experience.
        </p>
      );
    },
  },
  {
    title: "School Management Website",
    description: "A full-stack website for CJM School to manage students, teachers, and courses.",
    src: "/assets/images/Screenshot 2025-02-27 144748.png",
    ctaText: "Visit",
    ctaLink: "https://cjm-school-management-system-frontend.vercel.app/",
    technologies: ["React", "ReCharts", "MongoDB", "Node Js"],
    content: () => {
      return (
        <p>
          A comprehensive and scalable school management system designed for CJM School.
          This full-stack application streamlines administrative tasks, providing separate portals for students, teachers, and administrators to manage everything from grades to course enrollment.
        </p>
      );
    },
  },
  {
    title: "Depression Detection via EEG",
    description: "A deep learning model to detect and classify depression based on EEG signals.",
    src: "/assets/images/depression.webp",
    ctaText: "Confidential", 
    technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "Neural Networks"],
    content: () => {
      return (
        <p>
         As part of my internship at NIT Trichy, I developed a deep learning model that analyzes EEG (electroencephalogram) signals to detect and classify signs of depression.
         This project delves into the intersection of machine learning and neuroscience.
        </p>
      );
    },
  },
   {
    title: "Environmental Analysis System",
    description: "A real-time, interactive system for environmental analysis built on AWS.",
    src: "/assets/images/WhatsApp Image 2025-03-15 at 22.31.42_242f1081.jpg",
    ctaText: "Visit",
    ctaLink: "#",
    technologies: ["Python", "AWS", "React", "Arduino"],
    content: () => {
      return (
        <p>
          This project involved creating a cloud-native application on AWS for real-time environmental data analysis.
          It features interactive dashboards and robust data processing pipelines to provide actionable insights from various environmental sensors.
        </p>
      );
    },
  },
];


export function ProjectsPage() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
     <div className="bg-black text-white min-h-screen p-4 sm:p-6 md:p-8">
       <h2 className="text-3xl md:text-5xl font-bold text-center mt-15 mb-16">My Projects 🚀</h2>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[700px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200 text-2xl"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-8">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
                 <div className="flex flex-wrap mt-4 gap-2">
                    {card.technologies.map((tech, techIdx) => (
                        <span key={techIdx} className="text-xs text-white bg-slate-700 px-2 py-1 rounded-full">{tech}</span>
                    ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
