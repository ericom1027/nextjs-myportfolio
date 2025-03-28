import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState("education");

  const opentab = (tabname: string) => {
    setActiveTab(tabname);
  };

  return (
    <motion.div variants={slideInFromLeft(0.5)}>
      <motion.div className="tab-titles">
        <motion.p
          className={`tab-links ${
            activeTab === "education" ? "active-link" : ""
          }`}
          onClick={() => opentab("education")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Education
        </motion.p>
        <motion.p
          className={`tab-links ${
            activeTab === "trainings" ? "active-link" : ""
          }`}
          onClick={() => opentab("trainings")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Trainings & Certificates
        </motion.p>
        <motion.p
          className={`tab-links ${
            activeTab === "experience" ? "active-link" : ""
          }`}
          onClick={() => opentab("experience")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Work Experience
        </motion.p>
      </motion.div>

      <div
        className="tab-contents"
        style={{ display: activeTab === "education" ? "block" : "none" }}
      >
        {activeTab === "education" && (
          <ul className="text-justify">
            <li>Adamson University</li>
            <li>Bachelor of Science in Computer Science</li>
            <li>Zuitt Coding Bootcamp</li>
            <li>Udemy Online Bootcamp</li>
          </ul>
        )}
      </div>

      <div
        className="tab-contents"
        style={{ display: activeTab === "trainings" ? "block" : "none" }}
      >
        {activeTab === "trainings" && (
          <ul className="text-justify">
            <li>
              May 27 to 31, 2024&nbsp;AWS Serverless Deployment using API
              Gateway, Lambda, DynamoDB
            </li>
            <li>
              May 20 to 23, 2024&nbsp;AWS foundational concepts, EC2, S3, and
              full-stack app deployment to AWS.
            </li>
            <li>March 08, 2024&nbsp;Unit Testing TDD using Mocha Chai</li>
            <li>
              November 12, 2023&nbsp;
              <a href="https://www.udemy.com/certificate/UC-23878122-1ccc-48da-8fd4-f5b9db5c651c/">
                Build ASP.NET CoreWeb API .NET 7 API
              </a>
            </li>
            <li>
              November 23, 2023&nbsp;
              <a href="https://www.udemy.com/certificate/UC-65f14a74-36f1-4479-9279-a6372f5c02c4/">
                JavaScript Fundamentals
              </a>
            </li>
            <li>
              November 05, 2023&nbsp;
              <a href="https://www.udemy.com/certificate/UC-2c6a0a61-d232-4282-a1af-3405684fee0d/">
                Javascript Complete Course
              </a>
            </li>
            <li>
              October 14-15, 2023&nbsp;JavaScript Game Development Workshop
            </li>
            <li>September 1, 2023&nbsp;AWS Amazon Web Services</li>
            <li>October 11-14, 2019&nbsp;PHP and MYSQL</li>
            <li>August 15, 2019&nbsp;Sophos Endpoint Technical Training</li>
          </ul>
        )}
      </div>

      <div
        className="tab-contents"
        style={{ display: activeTab === "experience" ? "block" : "none" }}
      >
        {activeTab === "experience" && (
          <ul className="text-justify">
            <li>2024 - Current&nbsp;Freelance Software Developer.</li>
            <li>2021 - 2024 Full Stack Web Developer at Bluebix Solutions.</li>
            <li>
              2017 - 2020 &nbsp;Computer Programmer / System Administrator at
              National Parks Development Committee.
            </li>
            <li>
              2016 - 2017 &nbsp;IT Technical Support at Commtech Asia
              Philippines.
            </li>
            <li>
              2014 - 2016 &nbsp; IT / Programmer at Neo Spectrum Technical
              Services.
            </li>
            <li>2012 - 2013 &nbsp; Data Encoder at DAG Xpress Courier.</li>
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default TabsComponent;
