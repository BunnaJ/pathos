"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Button({ text }) {
  return (
    <div className="flex items-center justify-center gap-10 mt-3">
      {text.map((text) => (
        <motion.div
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(144, 238, 144)",
            boxShadow: "0px 0px 8px rgb(144, 238, 144)",
          }}
          className=" "
        >
          <Link
            className="bg-active2 p-2 px-6 rounded border-2 hover:bg-slate-300"
            href={text.link}
            key={text.link}
          >
            {text.name}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
