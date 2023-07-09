'use client'
import React from 'react'
import { motion } from 'framer-motion'
import myPic from '../public/assets/img/aiman02.jpg'

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
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        
        <h3 className='absolute top-24 text-2xl uppercase text-gray-500 pb-2 tracking-[20px]'>
            About
        </h3>

        <motion.img
            initial={initial}
            whileInView={{ x: 0, opacity: 1 }}
            // animate={animate}
            transition={transition}
            viewport={{ once: true }}
            src={`${myPic.src}`}
            className="-mb-10 mt-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
        >

        </motion.img>

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>About{" "}
            <span className='underline decoration-[#F7AB0A]/50'>myself</span>{" "}
            is describe here</h4>

            <p className='text-sm'>
                Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit. 
                Sed rerum debitis excepturi ducimus quas! 
                Consectetur dignissimos, in hic deserunt eum vitae dolorum possimus corrupti nostrum placeat, 
                dolores nobis culpa est.
            </p>
        </div>
    </motion.div>
  )
}

export default About