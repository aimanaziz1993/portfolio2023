'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useForm, SubmitHandler } from "react-hook-form";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

type Props = {}
type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};

function Contact({}: Props) {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => console.log(formData);

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex flex-col overflow-hidden text-center md:text-left
            md:flex-row max-w-7xl px-10 pt-28 justify-evenly mx-auto items-center z-0
            '>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>

            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>
                    Message me <span className='underline decoration-[#F7AB0A]/50'>here</span> 
                </h4>

                <div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='w-7 h-7 animate-pulse text-[#F7AB0A]' />
                        <p className='text-2xl'>+60166157765</p>
                    </div>
                </div>

                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='w-7 h-7 animate-pulse text-[#F7AB0A]' />
                        <p className='text-2xl'>muhdaimanaziz93@gmail.com</p>
                    </div>
                </div>

                <div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='w-7 h-7 animate-pulse text-[#F7AB0A]' />
                        <p className='text-2xl'>Johor Bahru, Johor, Malaysia</p>
                    </div>
                </div>

                <form className='flex flex-col space-y-2 w-fit mx-auto' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex space-x-2'>
                        <input className='contactInput' type="text" placeholder='Name' {...register("name")} />
                        <input className='contactInput' type="email" placeholder='Email' {...register("email")} />
                    </div>

                    <input className='contactInput' type="text" placeholder='Subject' {...register("subject")} />

                    <textarea className='contactInput' placeholder='Message' {...register("message")}></textarea>

                    <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold'>
                        Submit
                    </button>
                </form>
            </div>
        </motion.div>
  )
}

export default Contact