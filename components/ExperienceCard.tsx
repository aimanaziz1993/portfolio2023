'use client'
import React from 'react'
import { motion } from 'framer-motion'

import myPic from '../public/assets/img/aiman.jpg'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article 
        className='flex flex-col rounded-lg space-y-7 flex-shrink-0 items-center 
        w-[300px] md:w-[600px] xl:w-[900px] overflow-hidden
        snap-center cursor-pointer transition-opacity duration-200
        bg-[#292929] hover:opacity-100 opacity-40 p-10 md:p-5' >
        <motion.img 
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        // viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover aspect-square mt-10 md:mt-6' 
        src={`${myPic.src}`} alt="" />

        <motion.div 
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            exit={{ y: -50, opacity: 0 }}
            // viewport={{ once: true }}
            className='px-0 md:px-10'>

            <h4 className='text-xl md:text-4xl font-light'>Senior Software Developer</h4>
            <p className='text-base md:text-2xl font-bold mt-1'>Sysniq Sdn Bhd</p>

            <div className='flex space-x-2 my-2'>
                <img className='w-10 h-10 rounded-full object-cover aspect-square' src={`${myPic.src}`} alt="" />
                <img className='w-10 h-10 rounded-full object-cover aspect-square' src={`${myPic.src}`} alt="" />
                <img className='w-10 h-10 rounded-full object-cover aspect-square' src={`${myPic.src}`} alt="" />
            </div>

            <p className='uppercase py-1 text-sm text-gray-300'>Started work - to</p>

            <ul className='list-disc space-y-4 ml-5 text-sm'>
                <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam quos ullam odio quas placeat vitae, asperiores reiciendis autem nobis aspernatur sint mollitia modi et ad dignissimos, inventore consectetur deserunt. Quia.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ut nulla quae voluptatibus molestias natus sed odit ab iste repudiandae, eveniet nemo, quo, fuga ad recusandae? Laborum eveniet accusamus officia?</li>
                <li>3</li>
                <li>4</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis, officia quam cumque deleniti officiis eum, dicta dolorem ipsum quibusdam ex perspiciatis dolores ipsam accusantium quod voluptate delectus rem enim?</li>
            </ul>
        </motion.div>

    </article>
  )
}

export default ExperienceCard