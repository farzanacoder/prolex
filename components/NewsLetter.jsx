"use client";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import { Button } from '@mui/material'
import React from 'react'

export default function NewsLetter() {
    useEffect(() => {
    AOS.init({
      duration: 1000,  
      offset: 50     
    });
  }, []);


  return (
    <section className='bg-white py-6 lg:py-20' data-aos="fade-down">
        <div className="container">
        <h2 className='hd text-center'>Get Free Offer <span className='text-primary'> Subscribe</span> now</h2>
       <p className='text-center w-full lg:w-[75%] m-auto text-lg leading-8 mt-3 text-gray-600'>
        Rapidiously morph transparent internal or organic sources whereas resource sucking e-business. Conveniently innovate compelling internal.
       </p><br /><br />

       <form action="" className='bg-gray-100 relative w-full lg:w-[550px] h-[55px] lg:h-[65px] m-auto rounded-full overflow-hidden border border-[rgba(0,0,0,0.1)]'>
        <input type="text" className='w-full h-full bg-gray-100 outline-none px-4' placeholder='info@yourdomain.com'/>
        <Button className='!bg-primary !text-base lg:!text-xl !font-semibold !capitalize !w-[90px] lg:!w-[165px] !h-full !text-white !px-5 !py-3 !absolute top-0 right-0 hover:!bg-secondary !rounded-r-full'>Subscribe</Button>
       </form>
        </div>
    </section>
  )
}
