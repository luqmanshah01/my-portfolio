
"use client";

import { useEffect } from "react";
//For animate on scroll laibriry
import AOS from "aos";
import "aos/dist/aos.css";
import SideBar from "./sidebar";
import Details from "./detail";
import MobileCard from "./mobileComponents/mobileCard";
import MobileEducation from "./mobileComponents/education";
import MobileExperience from "./mobileComponents/experience";
import MobileSkill from "./mobileComponents/skill";
import MobileProject from "./mobileComponents/project";
import Contact from "./content";
import MobileContact from "./mobileComponents/contact";
import MobSide from "./mobileComponents/sideBar copy";


const MainPage = () => {

  //useEffect for AOS

  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);


  return (
    <div>
      <div className="overflow-x-hidden bg-white h-screen md:hidden">
        
        {/* Card  */}
        <MobileCard />
        {/* Education */}
        <MobileEducation />
         {/* experience */}
         <MobileExperience />
      {/* Skill */}
      <MobileSkill />
      {/* project */}
      <MobileProject />
      <MobileContact />
    
        </div>
      {/* DiskTop Div */}
      <div className=" hidden md:flex md:overflow-hidden h-screen">
        {/* sideBar */}
        <div className="w-1/5">

          <SideBar />
        </div>

        <div className="w-full">
          <Details />
        </div>

      </div>
    </div>
  )
}

export default MainPage