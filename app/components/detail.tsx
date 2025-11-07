"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Education from "./education";
import Skill from "./skill";
import Project from "./project";
import Experience from "./experience";
import Contact from "./content";

const Details = () => {
  return (
    <div className="w-full p-3 flex flex-col gap-6">
      <Tabs defaultValue="education" className="p-3">
        {/* Tab trigger buttons */}
        <TabsList className="grid w-full grid-cols-5 md:w-[800px]">
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skill">Skill</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="project">Project</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        {/* Tab contents */}
        <TabsContent value="education"><Education /></TabsContent>
        <TabsContent value="skill"><Skill /></TabsContent>
        <TabsContent value="experience"><Experience /></TabsContent>
        <TabsContent value="project"><Project /></TabsContent>
        <TabsContent value="contact"><Contact /></TabsContent>
      </Tabs>
    </div>
  );
};

export default Details;
