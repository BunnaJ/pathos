"use client";
import React from "react";
import BenefitBox from "../reusable/BenefitBox";
import { lusitana } from "@/app/ui/fonts";
import travel from "../images/customImages/people1.jpg";
import travel1 from "../images/customImages/flightbox.jpeg";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ThirdSection() {
  const [showText, setText] = useState(false);

  const handleTextDisplay = () => {
    setText(!showText);
  };

  const textList = [
    { name: "Share Experience", link: "/experience" },
    { name: "Verified Agent", link: "/about" },
  ];
  return (
    <div className="">
      <div className="pt-20 ">
        <div className="flex items-center justify-center pb-5">
          <h1
            className={`${lusitana.className} text-3xl font-bold text-secondary`}
          >
            A brief overview of the benefits
          </h1>
        </div>
        <div className="flex">
          <div className="">
            <BenefitBox id="lack" />
            <BenefitBox id="scam" />
            <BenefitBox id="complex" />
            <BenefitBox id="community" />
          </div>
          <div className=" relative max-h-60 mt-10">
            <Image src={travel} alt="Flight box" width={600} height={20} />
            <div class="absolute inset-0 bg-gradient-to-t from-transparent to-white"></div>
            <div class="absolute bg-gradient-to-b from-transparent to-slate-200"></div>
            <div className="absolute top-80 ">
            <div class="absolute inset-0 bg-gradient-to-t from-transparent to-white"></div>
            <div class="absolute bg-gradient-to-b from-transparent to-slate-200"></div>
            <Image src={travel} alt="Flight box" width={600} height={30} />
            <div class="absolute inset-0 bg-gradient-to-t from-transparent to-white"></div>
            <div class="absolute bg-gradient-to-b from-transparent to-slate-200"></div>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-transparent to-white"></div>
            <div class="absolute bg-gradient-to-b from-transparent to-slate-200"></div>
            
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
      <motion.div
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(144, 238, 144)",
          boxShadow: "0px 0px 8px rgb(144, 238, 144)",
        }}
      className=" flex justify-center items-center mt-7 w-91 h-9 bg-active2 p-2 px-6 rounded border-2 hover:bg-slate-300">
        <Link href="/about">Learn More</Link>
      </motion.div>
      </div>
    </div>
  );
}
