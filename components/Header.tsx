'use client'

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

function Header({}: Props) {

    const transition = { duration: 1.5, ease: 'linear', type: "spring", stiffness: 50 }

    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-6xl mx-auto z-20 xl:items-center'>

            <motion.div initial={{ x: -500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={transition} className='flex flex-row items-center'>
                <SocialIcon url="https://www.linkedin.com/in/muhammad-aiman-abdul-aziz-181b76110/" bgColor="transparent" fgColor="#aeaeae" style={{ height: 50, width: 50 }} />
                <SocialIcon url="https://github.com/aimanaziz1993" bgColor="transparent" fgColor="#aeaeae" style={{ height: 50, width: 50 }} />
            </motion.div>

            <motion.div initial={{ x: 500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={transition} className='cursor-pointer'>
                <SocialIcon network='email' bgColor="transparent" fgColor="#aeaeae" style={{ height: 50, width: 50 }} />
                
                <p className='uppercase hidden md:inline-flex text-sm text-[#aeaeae]'>Get in touch</p>
            </motion.div>

        </header>
    )
}

export default Header