'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";


export default function Header() {
  let [click , setClick] = useState(false)


  return (
    <header className='fixed py-4 lg:py-0 top-0 left-0 w-full z-[99] bg-secondary' id='home'>
        <div className='container flex items-center justify-between py-5'>
            <Link href='#home' className="logo cursor-pointer">
                <Image src={'/logo.jpg'} alt='logo' width={161} height={39}/>
            </Link>

            <nav className={`flex z-[21] items-start lg:items-center justify-start lg:justify-end gap-6 fixed top-0 lg:static w-[75%] lg:w-auto lg:opacity-100 h-[100%] lg:h-auto nav flex-col lg:flex-row bg-secondary transition-all ${click === true ? 'right-0' : '-right-[100%]'}  ${click === true ? 'opacity-100' : 'opacity-0'}`}>
                <Link  onClick={()=> setClick(false)} href='#home' className='text-gray-300 hover:text-white transition-all cursor-pointer'>Home</Link>
                <Link  onClick={()=> setClick(false)} href='#features' className='text-gray-300 hover:text-white transition-all cursor-pointer'>Features</Link>
                <Link  onClick={()=> setClick(false)} href='#specs' className='text-gray-300 hover:text-white transition-all cursor-pointer'>Specs</Link>
                <Link  onClick={()=> setClick(false)} href='#product' className='text-gray-300 hover:text-white transition-all cursor-pointer'>Product</Link>
                <Link  onClick={()=> setClick(false)} href='#faq' className='text-gray-300 hover:text-white transition-all cursor-pointer'>Faq</Link>
                <Link  onClick={()=> setClick(false)} href='#contact' className='text-gray-300 hover:text-white transition-all cursor-pointer'>Contact</Link>
            </nav>

            <span className='flex items-center justify-center w-8 h-8 lg:hidden cursor-pointer' onClick={()=> setClick(true)}>
              <TiThMenu size={25} className='text-white'/>
            </span>


            {
              click === true &&
             <div className='overlay w-full h-[100%] fixed top-0 left-0 z-[20] bg-[rgba(0,0,0,0.7)]' onClick={()=> setClick(false)}></div>
            }

        </div>
    </header>
  )
}
