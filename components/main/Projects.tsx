import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-5"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-10">
        <ProjectCard
          src="/BMS.JPG"
          title="Barangay Management System"
          description="(BMS) is designed to efficiently manage and automate various administrative functions of a barangay (a local government unit in the Philippines) built using Sequelize, Twilio for SMS Notification, MySQL, React.js, Node.js, Express.js, Material UI, React Bootstrap."
        />
        <ProjectCard
          src="/pos.jpg"
          title="Point of Sales"
          description="Point of Sale(POS) system using the MERN Stack typically refers to a web-based application flexible in mobile devices built using MongoDB, Express.js, React.js and Node.js with back-office."
        />
        <ProjectCard
          src="/EcomWeb.JPG"
          title="E-Commerce Full-Stack Application"
          description="A comprehensive online shopping platform built using the MERN stack (MongoDB, Express, React, Node.js). Features include user authentication, product management, shopping cart functionality, and secure payment integration. Optimized for performance and scalability, this application provides a seamless shopping experience across devices."
        />
        <ProjectCard
          src="/Payroll.jpg"
          title="Payroll System"
          description="A software application businesses use to manage and automate the process of paying employees. Built using Bunifu UI, C#, MS SQL Server 2014"
        />
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="Used by some of the world's largest companies, Next.js enables you to create full-stack web applications by extending the latest React features. Built using Next.js, React.js, TypeScript, Tailwind, and MongoDB."
        />

        <ProjectCard 
           src="/ChatBot.JPG"
           title="Design ChatBot"
           description="ChatBot is an interactive tool designed to assist users in creating and refining their design concepts within Figma. It provides real-time feedback on design elements, suggests improvements based on best practices, and offers creative ideas tailored to user preferences."
        />

         <ProjectCard 
           src="/Ticketing.JPG"
           title="Ticketing System"
           description="Ticketing System, developed in VB.NET, MS SQL Server 2014, Stored Procedures, Metro Framework, provides an efficient platform for managing customer support requests and issue tracking. The system allows users to create, view, and manage tickets seamlessly, enhancing communication between support staff. Features include ticket categorization, status tracking, user assignment, and automated notifications for updates."
        />
      </div>
    </div>
  );
};

export default Projects;
