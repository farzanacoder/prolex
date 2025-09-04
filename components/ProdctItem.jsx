import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { IoCartOutline } from "react-icons/io5";


export default function ProdctItem({img , title , oldprice , price}) {
  return (
    <div className='border prdctitem border-[rgba(0,0,0,0.1)] p-4 fle flex-col gap-3 text-center justify-center'>
        <Image src={img} width={400} height={458} alt='iamge'/>
        <h3 className='text-xl font-semibold'>{title}</h3>
        <div className='flex items-center justify-center gap-3'>
            <span className='text-lg text-gray-500 line-through'>{oldprice}</span>
            <span className='text-lg text-gray-700 font-bold'>{price}</span>
        </div>

        <div className='flex justify-center mt-3'>
            <Button className='items-center gap-1 !bg-primary !text-white !rounded-full !capitalize !px-5 !hover:bg-secondary'>
                <IoCartOutline size={20}/> Buy Now
            </Button>
        </div>
    </div>
  )
}
