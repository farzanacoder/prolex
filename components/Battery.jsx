"use client";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import Image from 'next/image'
import React from 'react'

export default function Battery() {
      useEffect(() => {
        AOS.init({
          duration: 1000,  
        });
      }, []);


  return (
    <section className='bg-white py-20'>
        <div className='container'>
            <h2 className='hd text-center'>Up to <span>10 Days</span> of Battery Life</h2>
            <p className='text-gray-600 text-center text-xl my-3'>35-hour GPS continuous running mode</p>
            <Image src='/Watch3.png' alt='batery' className='ele_mover py-4' data-aos="fade-down" width={1000} height={500}/>

            <div className='grid grid-cols-1 lg:grid-cols-2 text-center gap-10'>
                <div className='col px-4 lg:px-20'>
                    <h3 className='text-[22px] font-semibold flex justify-center text-primary  gap-2 items-center '>Up to <span className='text-5xl lg:text-[90px]'>10</span> days</h3>
                    <h4 className='text-gray-800 text-2xl font-semibold text-center'>Battery life</h4>
                    <p className='text-gray-800 text-base font-normal text-center'>Seamlessly brand principle-centered sources rather than mission was critical human capital.</p>
                </div>
                <div className='col px-4 lg:px-20'>
                    <h3 className='text-[22px] font-semibold flex justify-center text-primary  gap-2 items-center '><span className='text-5xl lg:text-[90px] font-bold'>45</span> hours</h3>
                    <h4 className='text-gray-800 text-2xl font-semibold text-center'>GPS running mode</h4>
                    <p className='text-gray-800 text-base font-normal text-center'>Synergistically enhance team driven potentialities before extensive e-markets globally.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
