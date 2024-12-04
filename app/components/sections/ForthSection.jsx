'use client'
import React from "react";
import { lusitana } from "@/app/ui/fonts";
import { IoIosPeople } from "react-icons/io";
import Image from "next/image";
import bunna from "../images/IMG_1549.jpg";
import photo1 from "../images/balazs-orban.png";
import photo2 from "../images/michael-novotny.png";
import photo3 from "../images/lee-robinson.png";
import { motion } from "framer-motion";
import Link from "next/link";





export default function forth() {
  return (
    <>
      <div className="">
        <div className=" pb-10">
        <div className="flex items-center justify-center  pt-20 pb-3">
          <h1
            className={`${lusitana.className} text-3xl font-bold text-secondary`}
          >
            Join community
          </h1>
          <IoIosPeople size="2em" className="text-primary" />
        </div>
        <div className="flex justify-center font-thin">Connect with others, share your experiences, and become part of  a  supportive community. </div>
        </div>
        
        <div className="flex gap-10 items-center justify-center">
        <div className=" bg-active2 border border-1 shadow-lg p-4 w-3/12 h-3/5">
          <div className="flex items-center gap-3 pb-4">
            <Image 
             className=" rounded-full w-9 h-9"
            src={bunna} 
            width={30}
            />
            <h2 className="font-bold">Ezebillion</h2>
          </div>
          <div className="">
            <p>
              Applying for a visa used to feel overwhelming, but joining the
              PathosEmbassy community has truly changed the game. When I started
              my application for a work visa, I didn’t know where to start or
              who to trust for guidance. Thankfully, PathosEmbassy not only
              provided reliable, step-by-step information, but I was also able
              to connect with people who’d been through the same process.
            </p>
          </div>
        </div>

        <div className="bg-active2 border border-1 shadow-lg p-4 w-3/12 h-3/5">
          <div className="flex items-center gap-3 pb-4">
            <Image 
             className=" rounded-full w-9 h-9"
            src={photo1} 
            width={30}
            />
            <h2 className="font-bold">Johnpaul</h2>
          </div>
          <div className="">
            <p>
              Applying for a visa used to feel overwhelming, but joining the
              PathosEmbassy community has truly changed the game. When I started
              my application for a work visa, I didn’t know where to start or
              who to trust for guidance. Thankfully, PathosEmbassy not only
              provided reliable, step-by-step information, but I was also able
              to connect with people who’d been through the same process.
            </p>
          </div>
        </div>
        <div className="bg-active2 border border-1 shadow-lg p-4 w-3/12 h-3/5">
          <div className="flex items-center gap-3 pb-4">
            <Image 
             className=" rounded-full w-9 h-9"
            src={photo2} 
            width={30}
            />
            <h2 className="font-bold">chibunna</h2>
          </div>
          <div className="">
            <p>
              Applying for a visa used to feel overwhelming, but joining the
              PathosEmbassy community has truly changed the game. When I started
              my application for a work visa, I didn’t know where to start or
              who to trust for guidance. Thankfully, PathosEmbassy not only
              provided reliable, step-by-step information, but I was also able
              to connect with people who’d been through the same process.
            </p>
          </div>
        </div>


        <div className=" bg-active2 border border-1 shadow-lg p-4 w-3/12 h-3/5">
          <div className="flex items-center gap-3 pb-4">
            <Image 
             className=" rounded-full w-9 h-9"
            src={photo3} 
            width={30}
            />
            <h2 className="font-bold">Kelvin</h2>
          </div>
          <div className="">
            <p>
              Applying for a visa used to feel overwhelming, but joining the
              PathosEmbassy community has truly changed the game. When I started
              my application for a work visa, I didn’t know where to start or
              who to trust for guidance. Thankfully, PathosEmbassy not only
              provided reliable, step-by-step information, but I was also able
              to connect with people who’d been through the same process.
            </p>
          </div>
        </div>
        </div>



      </div>

      <div className="flex items-center justify-center mt-5">
      <motion.div 
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(144, 238, 144)",
          boxShadow: "0px 0px 8px rgb(144, 238, 144)",
        }}
      className=" flex justify-center items-center w-91 h-9 mt-7 bg-active2 p-2 px-6 rounded border-2 hover:bg-slate-300">
        <Link href="/experience">Share experience</Link>
      </motion.div>
      </div>
      
    </>
  );
}
