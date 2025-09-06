import { Button } from '@mui/material'
import React from 'react'

export default function Contact() {
  return (
    <section className='bg-gray-100 py-20'  id='contact'>
        <div className="container flex gap-10">
            <div className=' w-[40%]'>
                <h2 className='text-2xl font-semibold text-gray-700 mb-2'>Contact with us</h2>
                <p className='text-gray-500 text-base leading-7'>It is very easy to get in touch with us. Just use the contact form or pay us a visit for a coffee at the office. Dynamically innovate competitive technology after an expanded array of leadership.</p> <br />
                <span className='text-gray-600 text-base leading-7 font-semibold'>Head Office</span>
                <p className='text-gray-500 leading-7 text-base'>121 King St, Melbourne VIC 3000, Australia</p> <br />
                <span className='text-gray-600 text-base leading-7 font-semibold'>Phone : +61 2 8376 6284</span><br />
                <span className='text-gray-600 text-base leading-7 font-semibold'>Email : <a href='mailto:hello@yourdomain.com' className='font-[500] text-primary hover:text-secondary'> hello@yourdomain.com</a></span>
          
            </div>

            <form action="" className='w-[60%]'>
            <h2 className='text-2xl font-semibold text-gray-700 mb-2'>Reach us quickly</h2>
          <div className="grid grid-cols-2 gap-5 my-3">
            <input type="text" placeholder='Enter Name' className='h-12 w-full bg-white outline-none border border-[rgba(0,0,0,0.1)] px-3 focus:border-[rgba(0,0,0,0.3)] transition-all' />
          <input type="text" placeholder='Enter Email' className='h-12 w-full bg-white outline-none border border-[rgba(0,0,0,0.1)] px-3 focus:border-[rgba(0,0,0,0.3)] transition-all' />
          </div>
          <div className="grid grid-cols-2 gap-5 my-3">
            <input type="text" placeholder='Your Phone' className='h-12 w-full bg-white outline-none border border-[rgba(0,0,0,0.1)] px-3 focus:border-[rgba(0,0,0,0.3)] transition-all' />
          <input type="text" placeholder='Your Company' className='h-12 w-full bg-white outline-none border border-[rgba(0,0,0,0.1)] px-3 focus:border-[rgba(0,0,0,0.3)] transition-all' />
          </div>

            <div className="grid grid-cols-1 my-3 ">
                  <textarea placeholder='Message' className='bg-white p-3 w-full outline-none  border border-[rgba(0,0,0,0.1)]  focus:border-[rgba(0,0,0,0.3)] transition-all' name="Message" id="" cols="15" rows="6"></textarea>
            </div>


            <Button className='items-center gap-1 !bg-primary !text-white !rounded-md !capitalize !px-5 hover:!bg-secondary' size='large'>
                Send Message
            </Button>
            </form>
        </div>
    </section>
  )
}
