import {
    Backend_skill,
    tools_skill,
    Skill_data,
  } from "@/constants";

import React from 'react'
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
    return (
      <section
        id="skills"
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-[700px]"
        style={{ transform: "scale(0.8", top: "-250px" }}
      >
        <SkillText />
        <div id="img-skills" className="flex flex-row justify-around flex-wrap gap-5 items-center">
          {Skill_data.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
  
        <div id="img-skills" className="flex flex-row justify-around flex-wrap gap-5 items-center">
          {Backend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>

        <div id="img-skills" className="flex flex-row justify-around flex-wrap  gap-5 items-center">
          {tools_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        
      <div className=" w-full h-full absolute" style={{ marginTop: '50vh' }}>
      <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
      <video
            className="w-full h-full "
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
    );
  };
  
  export default Skills;