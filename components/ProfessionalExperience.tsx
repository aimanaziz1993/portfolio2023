'use client'
import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'

type Props = {}

function ProfessionalExperience({}: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex flex-col relative overflow-hidden md:flex-row max-w-full px-10 justify-end mx-auto items-center'>
      
      <h3 className='w-full absolute text-center top-16 text-2xl uppercase text-gray-500 pb-2 tracking-[20px]'>
          Experiences
      </h3>

      <div 
      className='w-full flex space-x-5 p-10 md:p-0
      scrollbar-thin scrollbar-thumb-[#F7AB0A]/40 scrollbar-track-gray-400/20 
      overflow-x-scroll snap-x snap-mandatory'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  )
}

export default ProfessionalExperience