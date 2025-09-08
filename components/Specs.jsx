"use client";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import Image from 'next/image'
import React from 'react'
import { CiCamera } from "react-icons/ci";
import { WiThunderstorm } from "react-icons/wi";
import { GiBattery100 } from "react-icons/gi";
import { MdOutlineWifi } from "react-icons/md";
import { GoSun } from "react-icons/go";
import { GoDeviceCameraVideo } from "react-icons/go";

import SpecItem from './SpecItem';


export default function Specs() {
      useEffect(() => {
    AOS.init({
      duration: 1000,  
    });
  }, []);


  return (
    <section className='bg-gray-100 py-20' id='specs'>
        <div className='container flex items-center gap-10'>
            <div className='w-[35%] hidden lg:block ele_mover' data-aos="fade-down">
                <Image src='/Watch2.png' width={400} height={500} alt='spec'/>
            </div>


            <div className='w-full lg:w-[65%]'>
                <h2 className='hd'><span>Technical </span>Specs</h2>
                <p className=' text-xl my-2 text-gray-600'>Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented.</p>


            <div className='grid grid-cols-2 gap-5 mt-10'>
                <SpecItem icon={<CiCamera className="text-primary" size={35} />} text='Camera Available' subtext='Uniquely seize team building expertise and future-proof process improvements.'/>
                <SpecItem icon={<WiThunderstorm className="text-primary" size={35} />} text='Eco Friendly' subtext='Intrinsicly network long-term high-impact intellectual capital before user friendly.'/>
                <SpecItem icon={<GoSun className="text-primary" size={35} />} text='Readable in Sunlight' subtext='Monotonectally coordinate proactive quality vectors rather than high-payoff processes.'/>
                <SpecItem icon={<GiBattery100 className="text-primary" size={35} />} text='30 Days Battery Time' subtext='Energistically fabricate extensible web-readiness rather than vertical ideas visualize.'/>
                <SpecItem icon={<GoDeviceCameraVideo className="text-primary" size={35} />} text='Advance Video' subtext='Interactively negotiate synergistic innovation before global materials sustainable'/>
                <SpecItem icon={<MdOutlineWifi className="text-primary" size={35} />} text='Wifi Enable' subtext='Continually engineer extensible deliverables rather than efficient potentialities.'/>
            </div>
        </div>
        </div>
    </section>
  )
}
