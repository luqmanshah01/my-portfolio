"use client";

import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import { FaArrowCircleDown, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const SideBar = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8 bg-white">
      <div className="flex flex-col items-center text-center max-w-md w-full">
        {/* Image */}
        <Image
          src="/assets/profile.jpg"
          alt="Profile pic"
          width={300}
          height={300}
          className="rounded-md]"
        />

        {/* Name */}
        <div className="mt-3">
          <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            The Shah Perspective
          </h1>

          <h2 className="scroll-m-20 pb-2 text-xl font-semibold tracking-tight first:mt-0 mt-1 text-gray-700">
            <Typewriter
              options={{
                strings: [
                  "Social Media Activist",
                  "YouTuber",
                  "TikTok Creator",
                  "Facebook Influencer",
                  "LinkedIn Professional",
                  "Instagram Creator",
                  "and more...",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </div>

        {/* Social Media Accounts */}
        <div className="mt-4 grid grid-cols-3 gap-4 justify-center">
          <Link href="#" target="_blank" className=" text-gray-600 hover:text-[#0077B5]">
            <FaLinkedin className="text-4xl" />
          </Link>
          <Link href="#" target="_blank" className="text-gray-600 hover:text-[#FF0000]">
            <FaYoutube className="text-4xl" />
          </Link>
          <Link href="#" target="_blank" className="text-gray-600 hover:text-[#E1306C]">
            <FaInstagram className="text-4xl" />
          </Link>
        </div>

        {/* Download CV Button */}
        <Link href="assets/CV.pdf" target="_blank" className="mt-6 w-full">
          <Button className="w-full flex justify-center items-center">
            <FaArrowCircleDown className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
