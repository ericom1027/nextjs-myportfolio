import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-gray-300 py-6 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
        <div className="w-full border-t border-gray-700 my-4"></div>
        <p className="text-sm text-center">
          &copy; EMD Dev {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
