import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



export default function Footer() {
  return (
   <>
    <section className='py-10 bg-secondary'>
        <div className="container">
            <div className="grid grid-cols-3 gap-32">
                <div className='col1'>
                    <Image src='/logo.jpg' alt='image' width={160} height={100}/>

                    <p className='text-gray-100 my-4'>Holisticly empower premium architectures without value-added ideas. Seamlessly evolve cross-platform experiences.</p>
                    <div className='flex items-center gap-2'>
                        <Link href='#' className='flex items-center justify-center bg-primary text-white rounded-full w-8 h-8 hover:bg-gray-800 transition-all'>
                        <FaFacebookF size={20}/>
                        </Link>
                        <Link href='#' className='flex items-center justify-center bg-primary text-white rounded-full w-8 h-8 hover:bg-gray-800 transition-all'>
                        <FaXTwitter size={20}/>
                        </Link>
                        <Link href='#' className='flex items-center justify-center bg-primary text-white rounded-full w-8 h-8 hover:bg-gray-800 transition-all'>
                        <FaInstagram size={20}/>
                        </Link>
                        <Link href='#' className='flex items-center justify-center bg-primary text-white rounded-full w-8 h-8 hover:bg-gray-800 transition-all'>
                        <FaLinkedinIn size={20}/>
                        </Link>
                    </div>
                </div>

                <div className="col2">
                    <h2 className='text-white text-[22px]'>Others Links</h2>
                    <div className="flex flex-col gap-2.5 mt-4">
                        <span><Link href='#' className='text-gray-300 hover:text-primary text-base inline-block'>About Us</Link></span>
                        <span><Link href='#' className='text-gray-300 hover:text-primary text-base inline-block'>Contact Us</Link></span>
                        <span><Link href='#' className='text-gray-300 hover:text-primary text-base inline-block'>Privacy Policy</Link></span>
                        <span><Link href='#' className='text-gray-300 hover:text-primary text-base inline-block'>Terms and Conditions</Link></span>
                    </div>
                </div>

                <div className="col3">
                    <h2 className='text-white text-[22px] mb-4'>Location</h2>
                      <Image src='/map.png' alt='image' width={250} height={130}/>
                    </div>
            </div>
        </div>
    </section>


    <footer className='bg-white py-5 text-center'><span className='text-gray-600 text-base'>Copyrights ©</span> 2019. All rights reserved</footer>
   </>
    
  )
}
