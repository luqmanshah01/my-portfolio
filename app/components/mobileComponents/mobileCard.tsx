import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";
import {
  FaArrowCircleDown,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const MobileCard = () => {
  return (
    <div data-aos="zoom-in" className="h-fit w-fit flex flex-col items-center justify-center">
      <div className="card bg-blue-100 glass p-4 m-4 w-80 flex flex-col justify-center items-center">
        <Image
          src="/assets/profile.jpg"
          alt="Profile pic"
          width={400}
          height={400}
          className="rounded-md mx-auto"
        />

        <div className="card-body text-center">
          <h1 className="scroll-m-20 border-b pb-2 card-title text-3xl font-semibold tracking-tight first:mt-0">
            The Shah Perspective
          </h1>

          <h1 className="scroll-m-20 pb-2 text-2xl font-semibold tracking-tight first:mt-0 mt-1 text-gray-700">
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
          </h1>

          {/* Social Icons */}
          <div className="mt-4 grid grid-cols-3 gap-3 justify-center text-center">
            {/* LinkedIn */}
            <div>
              <Link
                href="#"
                target="_blank"
                className="text-gray-600 hover:text-[#0077B5]"
              >
                <FaLinkedin className="text-4xl" />
              </Link>
            </div>

            {/* YouTube */}
            <div>
              <Link
                href="#"
                target="_blank"
                className="text-gray-600 hover:text-[#FF0000]"
              >
                <FaYoutube className="text-4xl" />
              </Link>
            </div>

            {/* Instagram */}
            <div>
              <Link
                href="#"
                target="_blank"
                className="text-gray-600 hover:text-[#E1306C]"
              >
                <FaInstagram className="text-4xl" />
              </Link>
            </div>
          </div>

          {/* Download CV Button */}
          <Link href="/assets/CV.pdf" target="_blank" className="mt-4">
            <Button>
              <FaArrowCircleDown className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
