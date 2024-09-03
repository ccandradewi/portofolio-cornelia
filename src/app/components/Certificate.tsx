"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import CertifeCard from "./CertifCard";

// Define the type for project data
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  previewUrl: string;
}

const certifeData: Project[] = [
  {
    id: 1,
    title: "Purwadhika Full Stack Web Development",
    description:
      "I participated in the Purwadhika Bootcamp Full Stack Web Developer program in the February 2024 batch and graduated in August 2024. Throughout the bootcamp, I gained proficiency in JavaScript, HTML, CSS, TypeScript, React.js, Next.js, MySQL, and more. I worked on various projects, both backend and frontend, honing my skills in full stack development.",
    image: "/sertif.png",
    tag: ["All", "Web"],
    previewUrl: "https://glorynailart.shop/",
  },
  {
    id: 2,
    title: "Economic and Business Brand Ambassador",
    description:
      "This event is a competition to select a Brand Ambassador for the Faculty of Economics and Business (FEB). The competition consists of multiple stages, all of which require participants to communicate exclusively in English. One of the key stages involves addressing current issues, including national and international economic topics as well as social issues relevant to the student community.",
    image: "/EBA.png",
    tag: ["All", "Web"],
    previewUrl:
      "https://drive.google.com/file/d/1Tr4Rv3jKJJHsdno8YDCcLsB7lWsfEP81/view?usp=sharing",
  },
];

const CertificatesSection: React.FC = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true });

  const filteredCertife = certifeData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Certificate & Award
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredCertife.map((certife, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <CertifeCard
              key={certife.id}
              title={certife.title}
              description={certife.description}
              imgUrl={certife.image}
              previewUrl={certife.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default CertificatesSection;
