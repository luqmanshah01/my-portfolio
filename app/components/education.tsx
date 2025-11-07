"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      field: "BS Computer Science",
      date: "April 2021",
      university: "University of Fast",
      description:
        "I have done graduation from university of Fast in Islamabad . Currintly I am creating  Social media content creater like YouTube, Intagram,Tiktok, etc ",
    },
    {
      field: "IT Courses  ",
      date: "April 2021",
      university: "Selani wellfare foundation Islamabad",
      description:
        "Selani wellfare foundion one of more better foundation espicially in IT field like Web Development & App Development, Shopify E-commerce, Digital Marking, Cyber Security, And I have done tow courses from this institution .",
    },
    
  ];

  return (
    <Card  data-aos="zoom-in" className="h-[85vh] w-[160vh] overflow-y-auto">
      <CardHeader>
        <CardTitle className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight uppercase">
          Education
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-10">
        {education.map((item, i) => (
          <div
            key={i}
            className="py-8 flex flex-wrap md:flex-nowrap border-b border-gray-100 last:border-none"
          >
            {/* Left Section (Degree & Date) */}
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-900 uppercase">
                {item.field}
              </span>
              <span className="mt-1 text-gray-500 text-sm">{item.date}</span>
            </div>

            {/* Right Section (University & Description) */}
            <div className="md:flex-grow">
              <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
                {item.university}
              </h2>
              <p className="leading-relaxed text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Education;
