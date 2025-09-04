import { Button } from '@mui/material'
import Image from 'next/image';
import React from 'react'
import { AiOutlineAndroid } from "react-icons/ai";
import { PiAppleLogo } from "react-icons/pi";


export default function DoWnload() {
  return (
    <section className='py-20 donload'>
        <div className='container grid grid-cols-2 items-center'>
            <div className='col'>
                <h2 className='hd !text-white'><span>Download</span> our app</h2>
                <p className='text-gray-200 pt-10 font-normal leading-7 text-lg'>Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Globally actualize viral products via ubiquitous data. Uniquely brand efficient infomediaries vis-a-vis revolutionary results. Completely.</p>

                <div className='flex items-center gap-6 mt-7'>
                    <Button className='!bg-white hover:!text-white hover:!bg-transparent !border !border-[#fff] !capitalize !text-gray-800 !py-2 !px-5 !font-bold  !rounded-full !text-base '>
                        <AiOutlineAndroid size={30} className='transition-all'/>Google Play</Button>
                    <Button className='!bg-white hover:!text-white hover:!bg-transparent !border !border-[#fff] !capitalize !text-gray-800 !py-2 !px-5 !font-bold  !rounded-full !text-base '>
                        <PiAppleLogo size={30} className='transition-all'/>Google Play</Button>
                </div>
            </div>

            <div className='col pl-20 ele_mover'>
                <Image src='/img1.png' height={400} width={500}/>
            </div>
        </div>

    </section>
  )
}
