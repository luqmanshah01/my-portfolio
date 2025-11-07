"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

const Experience = () => {
  const education = [
    {
      position: "BS Computer Science",
      copmName: "Company Name here",
      dateStart: "April 2021",
      dateEnd: "April 2021",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat inventore tenetur animi ad, voluptates expedita quo facere amet vel eligendi aliquid minima saepe sapiente modioptio deserunt, nemo iusto.",
        work:["Develop your official website", "Make E-commerce website for client", "Have contributed on the task"]
    },
     {
      position: "Selani Willfare foundation",
      copmName: "Company Name here",
      dateStart: "April 2021",
      dateEnd: "April 2021",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat inventore tenetur animi ad, voluptates expedita quo facere amet vel eligendi aliquid minima saepe sapiente modioptio deserunt, nemo iusto.",
        work:["Develop your official website", ]
    },
     {
      position: "PNY institution ",
      copmName: "Company Name here",
      dateStart: "April 2021",
      dateEnd: "April 2021",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat inventore tenetur animi ad, voluptates expedita quo facere amet vel eligendi aliquid minima saepe sapiente modioptio deserunt, nemo iusto.",
        work:["Develop your official website", "Make E-commerce website for client", ]
    },
    
   
  ];

  return (
    <Card  data-aos="zoom-in" className="h-[85vh] w-[160vh]  overflow-y-auto">
      {/* Experience */}
      <CardHeader>
        <CardTitle className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight uppercase">
          Experience
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-10">
        {education.map((item, i) => (
          <div
            key={i}
            className="py-8 flex flex-wrap md:flex-nowrap border-b border-gray-100 last:border-none"
          >
            {/* Left Section (Degree & ddateEnd) */}
            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="font-semibold title-font text-gray-900 uppercase">
                {item.position}
              </span>
              <span className="mt-1 text-gray-500 text-sm">{`${item.dateStart} - ${item.dateEnd}`} </span>
             
            </div>


            {/* Right Section (copmName & Description) */}
            <div className="md:flex-grow">
              <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
                {item.copmName}
              </h2>
              <p className="leading-relaxed text-gray-700"></p>

              <ul className="list-disc mr-2">

                {item.work.map((workItem, i)=>(

                
                <li key={i}>{workItem}</li>

                ))}
                
              </ul>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Experience;
