import React from 'react'
import { BsHeartPulse } from "react-icons/bs";
import { MdOutlineBloodtype } from "react-icons/md";
import { PiBellRingingBold } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { PiFingerprintLight } from "react-icons/pi";
import { CiCamera } from "react-icons/ci";


import BestItem from './BestItem';
import Image from 'next/image';


export default function BestFeture() {
  return (
    <section className='py-10 bg-gray-100' id='features'>
        <div className='container'>
            <h1 className='text-center hd'>Easy process with <span>Best</span> features</h1>
            <p className='text-center text-xl my-2 w-[75%] text-gray-700'>Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented.</p>


            <div className='grid grid-cols-3 pt-20'>
                <div className='flex flex-col gap-8 pr-14'>
                    <BestItem icon={<BsHeartPulse size={28} className="text-primary" />} text='Heart Rate Monitor' subtext='Modular and interchangable componente between layouts and even demos.'/>
                    <BestItem icon={<MdOutlineBloodtype size={28} className="text-primary" />} text='Blood Pressure Management' subtext='Modular and interchangable componente between layouts and even demos.'/>
                    <BestItem icon={<PiBellRingingBold size={28} className="text-primary" />} text='Alarm Alert' subtext='Modular and interchangable componente between layouts and even demos.'/>
                </div>

                 <div className='flex flex-col text-center ele_mover'>
                    <Image src='/Watch2.png' alt='img' width={400} height={300}/>
                 </div>

                 <div className='flex flex-col gap-8 pl-14'>
                    <BestItem icon={<CiLocationOn size={28} className="text-primary" />} text='Location finder' subtext='Modular and interchangable componente between layouts and even demos.'/>
                    <BestItem icon={<PiFingerprintLight size={28} className="text-primary" />} text='Fingerprint lock' subtext='Modular and interchangable componente between layouts and even demos.'/>
                    <BestItem icon={<CiCamera size={28} className="text-primary" />} text='Camera and Bluetooth Data Sync' subtext='Modular and interchangable componente between layouts and even demos.'/>
                </div>
            </div>
        </div>
    </section>
  )
}
