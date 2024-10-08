"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import HeroImage from "../../../public/Hero 1.svg";
import { MdEmail } from "react-icons/md";
import Contact from "./Contact";
const HeroSection: React.FC = () => {
  const pdfRef = useRef<HTMLDivElement | null>(null);

  return (
    <section id="hero" className="lg:py-16" ref={pdfRef}>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-white bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Cornelia Mustika", 5000, "Web Developer", 5000]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Passionate about coding and building amazing digital experiences
          </p>
          <div>
            <Contact />
          </div>
          <div>
            <a
              href="/cv.pdf"
              download="cv.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center lg:mt-0"
        >
          <div className="w-[400px] h-[400px] lg:w-[650px] lg:h-[650px] relative">
            <Image
              src={HeroImage}
              alt="hero image"
              className="absolute lg:w-3/4 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
