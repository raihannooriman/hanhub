"use client";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>ABOUT ME</SectionHeading>
      <p className="mb-3">
        After earning a degree in{" "}
        <span className="font-medium">Mathematics</span>, I embraced my passion
        for programming by attending a coding bootcamp, where I honed my skills
        in <span className="font-medium">full-stack web development</span>. The
        problem-solving aspect of programming particularly captivates me;
        there’s nothing quite like the thrill of unraveling a complex challenge.
        My toolkit includes{" "}
        <span className="font-medium">
          Node.js, React, TypeScript, Go, Python, and NoSQL databases
        </span>{" "}
        for my development projects, and I'm always eager to learn new
        technologies. Currently, I'm looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
    </motion.section>
  );
}
