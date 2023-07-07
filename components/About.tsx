import React from 'react'

type Props = {}

function About({}: Props) {

  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto'>
        <div>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[5px] sm:tracking-[15px]'>
                About
            </h2>
        </div>
    </div>
  )
}

export default About