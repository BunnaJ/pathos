'use client'
import React from 'react'
import { motion } from "framer-motion"

export default function Box({text, info,}) {
  return (
    <div>
      <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay:0.5, duration:1.5}}
      className="">
        <p className='text-sm'> <span className='text-sm font-bold text-primary'>{info}:</span> {text}</p>
      </motion.div>
    </div>
  )
}
