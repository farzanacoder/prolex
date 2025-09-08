"use client";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import React from 'react'
import { AiOutlineAntDesign } from "react-icons/ai";
import KeyItem from './KeyItem';
import { GrAlert } from "react-icons/gr";
import { IoChatboxOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { Button } from '@mui/material';


export default function KeyFeaturs() {
      useEffect(() => {
        AOS.init({
          duration: 1000,  
          offset: 50     
        });
      }, []);


  return (
    <section className='bg-light w-full py-40 pb-20 lg:py-20'>
        <div className='container lg:flex-row md:flex-row flex-col flex items-center justify-between'>
            <div className='lg:pr-[150px]  w-full lg:w-[70%]' data-aos="fade-up">
                 <p className='bg-primary text-white text-[14px] py-1 px-2 inline-block rounded-full '>Key features</p>
            <p className='text-gray-600 text-[20px] mt-4 '>We will helps you to build beautiful websites that stand out and automatically adapt to your style.</p>

            <div className='grid grid-cols-2 gap-6 mt-8'>
                <KeyItem title='Clean Design' subtitle='All components are built to be used in any combination.' icon={<AiOutlineAntDesign size={40} className="text-primary" />}/>
                <KeyItem title='Notification Alert' subtitle='Quick is optimized to work for most devices.' icon={<GrAlert size={40} className="text-primary" />}/>
                <KeyItem title='Secure Data' subtitle='ARemain consistent while developing new features.' icon={<CiLock size={40} className="text-primary" />}/>
                <KeyItem title='User Live Chat' subtitle='Change a few variables and the whole theme adapts.' icon={<IoChatboxOutline size={40} className="text-primary" />}/>
            </div>
            </div>

            <div className='w-full mt-6 lg:mt-0 lg:w-[30%]' data-aos="fade-left">
                <div className='bg-primary px-10 py-64 h-96 w-full rounded-md shadow-lg gap-7 flex flex-col justify-center'>
                    <p className='text-gray-100 text-xl text-center'>Do not be afraid to click. Maybe we offer discount on your first project</p>
                    <h2 className='text-white font-bold text-[100px] text-center'>20%</h2>

                    <input type="email" name="" id="" placeholder='info@yourdomain.com' className='outline-none bg-white rounded-md px-3 py-3'/>
                    <Button className='w-full !text-white !bg-secondary !py-3 !font-bold'>Get Started Now</Button>
                </div>
            </div>
        </div>
    </section>
  )
}
