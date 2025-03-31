"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import DownloadResume from "@/components/main/download";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div
        id="full-stack"
        className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start"
      >
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-white opacity-75 mr-[10px] h-5 w-5" />

          <h1 id="welcometxt">Full Stack Web Developer</h1>
        </motion.div>
        <motion.div
          id="txt-providing"
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
          </span>
          project experience
        </motion.div>
        <motion.p
          id="motion-p"
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] text-justify leading-relaxed"
        >
          I&apos;m Ericson, a Full-Stack Web Developer with expertise in both
          front-end and back-end technologies. I specialize in crafting engaging
          and responsive user interfaces using HTML, CSS, and JavaScript, along
          with frameworks like React.js, Vue.js, and Next.js. On the back end, I
          develop efficient and scalable server-side applications using Node.js
          (Express.js) and C#. With a keen eye for user experience, performance
          optimization, and modern development practices, I build dynamic and
          high-performing web solutions that enhance usability and
          functionality.
        </motion.p>

        <DownloadResume />
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          id="img-profile"
          src="/profile.png"
          alt="profile image"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
