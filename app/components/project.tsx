"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      name: "E-commerce Website",
      details:
        "This is my E-commerce website I created in about 5–6 days. It was a bit difficult, but I completed it.",
      image: "/assets/pic.jpg",
      link: "#",
    },
    {
      name: "Web Development",
      details:
        "I am a Web Developer and I have created some websites through React.js and Next.js with two years of hands-on experience.",
      image: "/assets/web.png",
      link: "#",
    },
    {
      name: "Cyber Security Expert",
      details:
        "I am a Cyber Security Developer and have worked with multinational companies like Microsoft and Google, with two years of hands-on experience.",
      image: "/assets/cyber.png",
      link: "#",
    },
    {
      name: "App Developer",
      details:
        "I am an App Developer and have built apps like InDrive, Youngo, and FoodPanda. I have worked with companies like DFTA@GH and THUY with one year of experience.",
      image: "/assets/app.png",
      link: "#",
    },
  ];

  return (
    <Card
      data-aos="zoom-in"
      className="h-[85vh] w-full max-w-[1100px] overflow-y-auto mx-auto"
    >
      <CardHeader className="flex justify-center items-center border-b pb-3">
        <CardTitle className="text-3xl font-semibold tracking-tight uppercase text-center">
          Projects
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap -m-4">
          {projects.map((item, i) => (
            <div key={i} className="lg:w-1/3 sm:w-1/2 w-full p-4">
              <div className="relative group overflow-hidden rounded-lg shadow-md bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-56 block transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-white/90 opacity-0 group-hover:opacity-100 transition duration-300 p-5 flex flex-col justify-center">
                  <h2 className="text-lg font-semibold text-center">
                    {item.name}
                  </h2>
                  <p className="text-sm mt-2 line-clamp-3 text-center">
                    {item.details}
                  </p>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="mt-3 text-sm font-medium text-blue-600 hover:underline text-center"
                  >
                    View Page
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;
