'use client'
import React from 'react'
import { motion } from 'framer-motion'

import myPic from '../public/assets/img/aiman.jpg'

type Props = {}

function Showcase({}: Props) {
    const projects = [1, 2, 3, 4, 5, 6]
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className='h-screen relative flex flex-col overflow-hidden text-left
            md:flex-row max-w-full justify-evenly mx-auto items-center z-0
            '>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Showcase
            </h3>

            <div 
            className='relative w-full flex
            scrollbar-thin scrollbar-thumb-[#F7AB0A]/40 scrollbar-track-gray-400/20 
            overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
                
                { projects.map((p, i) => (
                    <div key={i} className='w-screen flex flex-col space-y-5 flex-shrink-0 
                    items-center justify-center p-20 md:p-44 h-screen snap-center'>
                        <motion.img 
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 1.2 }}
                        className='w-32 h-32 object-cover aspect-square' src={`${myPic.src}`} alt="" />

                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>Case study {i + 1} of {projects.length}</span>
                            {" "}: UPS Clone
                            </h4>

                            <p className='text-lg text-center md:text-left'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Beatae, voluptate nobis, tempora dolore, 
                                laborum neque esse assumenda at obcaecati fugit eum dignissimos rem sapiente saepe delectus. 
                                Ex dignissimos consectetur fuga?
                            </p>
                        </div>
                    </div>
                )) }
            </div>

            <motion.div 
            className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
        </motion.div>
    )
}

export default Showcase