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
          description="POS system using Quasar, Express.js, MongoDB, and Pinia — A web-based system responsive on mobile, with real-time sales and inventory tracking, and a back-office dashboard for management."
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
          src="/VQCS.jpg"
          title="Voters Quick Count System"
          description="Voters Quick Count System is a web application designed for fast and accurate vote counting in elections. It leverages real-time data updates using Socket.io, ensuring instant result aggregation and monitoring. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js), this system provides a scalable and modern solution for election monitoring, making the vote-counting process more efficient and transparent."
        />

        <ProjectCard
          src="/ChatBot.JPG"
          title="Design ChatBot"
          description="ChatBot is an interactive tool designed to assist users in creating and refining their design concepts within Figma. It provides real-time feedback on design elements, suggests improvements based on best practices, and offers creative ideas tailored to user preferences."
        />

        <ProjectCard
          src="/greatwaves.JPG"
          title="Greatwaves Website"
          description="The Greatwaves Website, built with HTML, CSS, JavaScript, and Bootstrap, offers a robust solution for handling customer support inquiries and tracking issues."
        />

        <ProjectCard
          src="/RMS.JPG"
          title="Rental Management System"
          description="Rental Management System – A full-stack web application built with Quasar Framework, Pinia, Express.js, and MongoDB. It simplifies the management of tenants, rentals, due dates, and payments. Includes authentication and a dashboard for real-time monitoring."
        />
      </div>
    </div>
  );
};

export default Projects;
