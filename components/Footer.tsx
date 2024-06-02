import React from "react";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Mi redi lo{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-white-100 text-transparent bg-clip-text text-2xl font-semibold">
            WOK WAINTAIM YU
          </span>{" "}
          na mekim idia blo u kamap trupla samting
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Noken wait, toktok wantaim mi na bai mi helpim u nau yet
        </p>
        <a href="mailto:rodney.naro@gmail.com">
          <MagicButton
            title="Toktok Wantaim Mi"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          CopyRight © 2024-Rodney Naro
        </p>
        <div className="flex items-center md:gap-3 gap-6 py-5">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-100 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:from-indigo-400 hover:to-white-100"
            >
              <img src={profile.img} alt={profile.img} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
