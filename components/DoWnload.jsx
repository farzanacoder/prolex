"use client";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { Button } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import { AiOutlineAndroid } from "react-icons/ai";
import { PiAppleLogo } from "react-icons/pi";


export default function DoWnload() {
      useEffect(() => {
    AOS.init({
      duration: 1000,  
    });
  }, []);


  return (
    <section className='py-20 donload'>
        <div className='container h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center'>
            <div className='col'  data-aos="fade-right">
                <h2 className='hd !text-white'><span>Download</span> our app</h2>
                <p className='text-gray-200 pt-10 font-normal leading-7 text-lg'>Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Globally actualize viral products via ubiquitous data. Uniquely brand efficient infomediaries vis-a-vis revolutionary results. Completely.</p>

                <div className='flex items-center gap-6 mt-7'>
                    <Button className='!bg-white hover:!text-white hover:!bg-transparent !border !border-[#fff] !capitalize !text-gray-800 !py-2 !px-5 !font-bold  !rounded-full !text-base '>
                        <AiOutlineAndroid size={30} className='transition-all'/>Google Play</Button>
                    <Button className='!bg-white hover:!text-white hover:!bg-transparent !border !border-[#fff] !capitalize !text-gray-800 !py-2 !px-5 !font-bold  !rounded-full !text-base '>
                        <PiAppleLogo size={30} className='transition-all'/>Google Play</Button>
                </div>
            </div>

            <div className='!pt-10 lg:pt-0 lg:pl-20 lg:w-full md:w-full w-60 ele_mover'  data-aos="fade-left">
                <Image src='/img1.png' height={400} width={500} alt='image'/>
            </div>
        </div>

    </section>
  )
}
