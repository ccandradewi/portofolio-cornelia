"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";

// Define the type for project data
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "GloryNailArt",
    description:
      "Company profile application for a nail art studio in Semarang called GloryNailart. The website served as a platform to showcase information about their services, a gallery of nail art designs, and contact details. I used WordPress as the main development platform due to its ease of content management and SEO capabilities.",
    image: "/glorynailart.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Mizuki Sushi",
    description:
      "company profile application for a sushi restaurant named Mizuki Sushi. The website included various information such as the menu, details about the chefs, and other relevant content. The development was done using React.js for the frontend, with Tailwind CSS and Daisy UI for styling, along with CSS, JavaScript, and HTML to structure and enhance the website's functionality.",
    image: "/Mizuki.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "The Band",
    description:
      "The site features detailed information about the band. It also includes biographies of each band member, providing visitors with insights into their backgrounds and roles within the band. The website was developed using HTML, CSS, and JavaScript, emphasizing a clean and engaging design to enhance the user experience and present the band's information effectively.",
    image: "/Theband.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Tickzy",
    description:
      "Ticky is an event management platform that allows organizers to easily create and promote events while offering attendees a seamless experience to browse and register. The development stack included TypeScript, Express, Prisma, MySQL, Next.js, React, Redux, Bootstrap, DaisyUI, Tailwind CSS, and Chart.js for data visualization.",
    image: "/Tickzy.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Atcasa",
    description:
      "Atcasa is an e-commerce web application that helps users easily find and book rental properties based on their preferred dates. The platform offers a seamless experience for discovering the best accommodations, with dynamic pricing that adjusts based on holidays, weekends, and specific dates set by property owners. The development stack includes TypeScript, Express, Prisma, MySQL, Next.js, React, Redux, Bootstrap, and Chart.js.",
    image: "/Atcasa.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection: React.FC = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
