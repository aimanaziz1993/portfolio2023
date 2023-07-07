'use client'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {

    const initial = {
        x: -200,
        opacity: 0
    }

    const animate = {
        x: 0
    }

    const transition = {
        duration: 0.5
    }

  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 text-2xl uppercase text-gray-500 pb-2 tracking-[5px] sm:tracking-[15px]'>
            About
        </h3>

        <motion.img
            initial={initial}
            whileInView={{ x: 0 }}
            // animate={animate}
            transition={transition}
            viewport={{ once: true }}
            src='https://picsum.photos/32/32'
        >

        </motion.img>
    </div>
  )
}

export default About