"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const education = [
    {
      field: "BS GEOPHYSICS",
      date: "April 2021",
      university: "BAHRIA UNIVERSITY KARACHI CAMPUS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat inventore tenetur animi ad, voluptates expedita quo facere amet vel eligendi aliquid minima saepe sapiente modioptio deserunt, nemo iusto.",
    },
    {
      field: "BS GEOPHYSICS",
      date: "April 2021",
      university: "BAHRIA UNIVERSITY KARACHI CAMPUS",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quaerat inventore tenetur animi ad, voluptates expedita quo facere amet vel eligendi aliquid minima saepe sapiente modioptio deserunt, nemo iusto.",
    },
    
  ];

  return (
    <Card  data-aos="zoom-in" className="h-[85vh] w-[160vh] overflow-y-auto">
      <CardHeader>
        <CardTitle className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight uppercase">
          Contact
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-10">
         <div className='w-full p-5'>
   <h2 className="scroll-m-20 border-b border-blue-100  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
     
    </h2>
    <div>

  <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe
        width="100%"
        height="100%"
        className="absolute inset-0"
        frameBorder={0}
        title="map"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22726.22415848969!2d71.66161664645624!3d34.90824400862054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db9326195c1ff5%3A0xef8963ea16bb0c16!2sPacha%20Atta%20floor%20mill!5e1!3m2!1sen!2s!4v1762465009691!5m2!1sen!2s"
        style={{ filter: "contrast(1.2) opacity(0.4)" }}
      />
      <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div className="lg:w-1/2 px-6">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            ADDRESS
          </h2>
          <p className="mt-1">
           KP district Lower Dir tehsel Samar Bagh P/O Samar Bagh
          </p>
        </div>
        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            EMAIL
          </h2>
          <a className="text-blue-500 leading-relaxed">luqmanpk434@gmail.com</a>
          <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            PHONE
          </h2>
          <p className="leading-relaxed">+923001010416</p>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
     
      <div className="relative mb-4">
        <label htmlFor="name" className=" text-sm font-semibold tracking-tight">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className=" text-sm font-semibold tracking-tight">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className=" text-sm font-semibold tracking-tight">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <Button>Send</Button>
      
    </div>
  </div>


     
    </div>
    </div>
        
      </CardContent>
    </Card>
  );
};

export default Contact;
