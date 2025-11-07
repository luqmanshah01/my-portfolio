"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FaCheckSquare } from "react-icons/fa";

const Skill = () => {
  const skills = [
    { name: "HTML", width: 100 },
    { name: "TypeScript", width: 80 },
    { name: "WordPress", width: 85 },
    { name: "CSS", width: 95 },
    { name: "JavaScript", width: 88 },
    { name: "React", width: 90 },
    { name: "Python", width: 90 },
  ];

  return (
    <Card data-aos="zoom-in" className="h-[85vh]  w-[160vh] overflow-y-auto">
      <CardHeader>
        <CardTitle className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight uppercase">
          Skill
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-10">
        {/* skills */}
        <div className="flex flex-wrap -m-4">
          {skills.map((skill, i) => (
            <div key={i} className="p-4 md:w-1/3 w-full">
              {/* Header */}
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                  <FaCheckSquare className="text-white text-lg" />
                </div>
                <h2 className="text-lg font-semibold tracking-tight">
                  {skill.name}
                </h2>
              </div>

              {/* Progress Bar */}
              <div className="relative w-full h-1 bg-gray-300 rounded-lg">
                <div
                  className="h-1 bg-blue-500 rounded-lg transition-all duration-500"
                  style={{ width: `${skill.width}%` }}
                ></div>

                {/* ✅ Percentage dynamically positioned */}
                <span
                  className="absolute -top-5 text-xs font-semibold text-blue-500"
                  style={{
                    left: `calc(${skill.width}% - 24px)`, // shifts with bar width
                    transition: "left 0.5s ease",
                  }}
                >
                  {skill.width}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Skill;
