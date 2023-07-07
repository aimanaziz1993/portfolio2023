import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle'
import Image from 'next/image'

import myPic from '../public/assets/img/aiman.jpg'
import Link from 'next/link'

type Props = {}

function Hero({}: Props) {

    const [text] = useTypewriter({
        words: ['Hello from Aiman Aziz', 'You reached my secret hideout!', `I'm a software developer`, 'Love to find solution on the most sophisticated problems.'],
        loop: true,
        deleteSpeed: 20
    })

    return (
        <div className='h-screen flex flex-col items-center justify-center text-center overflow-hidden'>
            <BackgroundCircle />

            <div className='relative rounded-full h-32 w-32 mx-auto object-cover translate-y-[-10px]'>
                <Image className='relative rounded-full object-cover aspect-square'
                    // src={`https://picsum.photos/32/32`} 
                    src={myPic}
                    alt='profile' 
                    layout="responsive" 
                    width={500} 
                    height={500} />
            </div>

            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[5px] sm:tracking-[15px]'>Software Engineer</h2>
                <h1 className='text-2xl lg:text-3xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#aeaeae' />
                </h1>

                <div className='pt-5'>
                    <Link href="about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="business">
                        <button className='heroButton'>Business</button>
                    </Link>
                    <Link href="skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="showcase">
                        <button className='heroButton'>Showcase</button>
                    </Link>
                    <Link href="getintouch">
                        <button className='heroButton'>Get in touch</button>
                    </Link>
                </div>
            </div>

            
        </div>
    )
}

export default Hero