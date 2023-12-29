import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features."
        />
        <ProjectCard
          src="/connect-4.jpg"
          title="React.js-Connect-4 Game"
          description="Connect Four is a two-player strategy game where the objective is to be the first to form a line of four of your own discs horizontally, vertically, or diagonally on a grid."
        />
        <ProjectCard
          src="/Payroll.jpg"
          title="Payroll System"
          description="a software application businesses used to manage and automate the process of paying employees."
        />
      </div>
    </div>
  );
};

export default Projects;
