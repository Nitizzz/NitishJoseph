import React from "react";
import { FloatingDock } from "../../components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconPaperclip,
  IconChartLine,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/nitish-joseph-a78480255",
    },
    {
      title: "Leetcode",
      icon: (
        <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://leetcode.com/u/Nitijose/",
    },
    {
      title: "Resume",
      icon: (
        <IconPaperclip className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://drive.google.com/file/d/1fmey_6A8Vb1Z51GMx7tVApkzy-Jcp6sg/view?usp=drive_link",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Nitizzz",
    },
    {
      title: "Academic Progression",
      icon: (
        <IconChartLine className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/academic-progression",
    },
  ];
  return (
    <FloatingDock
      items={links}
      desktopClassName="fixed bottom-10 left-1/2 -translate-x-1/2"
      mobileClassName="fixed bottom-10 right-10"
    />
  );
}