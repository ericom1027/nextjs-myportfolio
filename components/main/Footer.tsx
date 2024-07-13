import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
  RxTwitterLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4 z-10">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-wrap justify-around items-start">
          <div className="min-w-[200px] flex flex-col items-center mb-4">
            <div className="font-bold text-lg">Community</div>
            <p className="flex items-center my-2 cursor-pointer">
              <FaYoutube />
              <span className="text-base ml-2">Youtube</span>
            </p>
            <p className="flex items-center my-2 cursor-pointer">
              <RxGithubLogo />
              <a href="https://github.com/ericom1027" className="text-base ml-2">
                Github
              </a>
            </p>
            <p className="flex items-center my-2 cursor-pointer">
              <RxDiscordLogo />
              <span className="text-base ml-2">Discord</span>
            </p>
          </div>
          <div className="min-w-[200px] flex flex-col items-center mb-4">
            <div className="font-bold text-lg">Social Media</div>
            <p className="flex items-center my-2 cursor-pointer">
              <RxInstagramLogo />
              <a href="https://www.instagram.com/hackweiser_27/" className="text-base ml-2">
                Instagram
              </a>
            </p>
            <p className="flex items-center my-2 cursor-pointer">
              <RxTwitterLogo />
              <span className="text-base ml-2">Twitter</span>
            </p>
            <p className="flex items-center my-2 cursor-pointer">
              <RxLinkedinLogo />
              <a href="https://www.linkedin.com/in/ericson-dalay-2bb1291a1/" className="text-base ml-2">
                Linkedin
              </a>
            </p>
          </div>
          <div className="min-w-[200px] flex flex-col items-center mb-4">
            <div className="font-bold text-lg">About</div>
            <p className="flex items-center my-2 cursor-pointer">
              <span className="text-base ml-2">Become Sponsor</span>
            </p>
            <p className="flex items-center my-2 cursor-pointer">
              <a href="#about-me" className="text-base ml-2">
                Learning about me
              </a>
            </p>
            <p className="flex items-center my-2 cursor-pointer">
              <span className="text-base ml-2">ericsondalay@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="mb-5 text-base text-center">
          &copy; EMD IT Solutions 2023 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
