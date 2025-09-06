"use client";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import Image from 'next/image';
import React from 'react'
import { AiOutlineNotification } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdAlarm } from "react-icons/io";


export default function HomeBanner() {
      useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true,     
    });
  }, []);


  return (
    <section className='banner w-full h-screen flex items-center justify-center'>
        <div className='container grid grid-cols-2 relative z-50'>
            <div className='pr-10 flex flex-col gap-3 pt-28' data-aos="fade-right">
                <h1 className='text-white font-semibold text-[40px]'>Multiple <span className='text-primary'>Sports</span> modes available</h1>
                <p className='text-[20px] text-gray-200 leading-8'>Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>

                <div className='flex items-center mt-4 gap-10'>
                    <div className='flex flex-col gap-2'>
                        <span className='rounded-full bg-white mb-2 h-14 w-14 flex items-center justify-center m-auto group hover:bg-primary'>
                              <AiOutlineNotification size={25} className='text-red-500 group-hover:text-white'/>
                        </span>

                        <span className='text-gray-200 text-[14px]'>App notifications</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='rounded-full bg-white mb-2 h-14 w-14 flex items-center justify-center m-auto group hover:bg-primary'>
                              <IoMdAlarm size={25} className='text-red-500 group-hover:text-white'/>
                        </span>

                        <span className='text-gray-200 text-[14px]'>Alarms Clock</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='rounded-full bg-white mb-2 h-14 w-14 flex items-center justify-center m-auto group hover:bg-primary'>
                              <FaMapMarkerAlt size={25} className='text-red-500 group-hover:text-white'/>
                        </span>

                        <span className='text-gray-200 text-[14px]'>Location tracker</span>
                    </div>
                </div>


            </div>

            <div data-aos="fade-left">
                <Image src='/Watch1.png' alt='image' height={572} width={500} className='ele_mover'/>
            </div>
        </div>
    </section>
  )
}
