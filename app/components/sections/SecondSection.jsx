import React from "react";
import Box from "../reusable/Box";
import { TbInfoTriangleFilled } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaPeopleGroup } from "react-icons/fa6";

export default function SecondSection() {
  return (
   <>
    <div className="flex gap-7 overflow-hidden pt-8">
    <div className="mt-16 relative">
      <div className=" bg-active3 w-96 rounded p-3">
        <TbInfoTriangleFilled className="text-primary mb-3" size={28} />
        <Box
          info="Informed Guidance"
          text=" PathosEmbassy provides users with real-life embassy experiences, guiding them through visa processes with helpful insights and preparation tips from others who have been there."
        />
      </div>
      <div className="absolute top-0 w-96 px-93">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
      </span>
      </div>
    </div>

    <div className="mt-16 relative">
      <div className="  bg-active3 w-96 rounded p-3">
        <VscWorkspaceTrusted className="text-primary mb-3" size={28} />
        <Box
          info="Trusted Network"
          text="The platform connects users with verified visa processing agents, offering peace of mind through legitimate and premium service options, for secure and reliable assistance."
        />
      </div>
      <div className="absolute top-0 w-96 px-93">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
      </span>
      </div>
    </div>

    <div className="mt-16 relative">
      <div className="  bg-active3 w-96 rounded p-3">
        <FaPeopleGroup  className="text-primary mb-3" size={28} />
        <div className="">
       
        </div>
        <Box
          info="Community-Driven Insights"
          text="  By sharing personal experiences, PathosEmbassy fosters a supportive community that helps users overcome challenges, making international travel and visa applications easy."
        />
      </div>
      <div className="absolute top-0 w-96 px-93">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
      </span>
      </div>
    </div>
    </div>
   </>
  );
}
