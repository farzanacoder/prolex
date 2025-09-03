import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <header className='fixed top-0 left-0 w-full z-50 '>
        <div className='container flex items-center justify-between py-5'>
            <div className="logo">
                <Image src={'/logo.jpg'} alt='logo' width={161} height={39}/>
            </div>

            <nav className='flex items-center justify-end gap-6'>
                <span className='text-gray-300 hover:text-white transition-all cursor-pointer'>Home</span>
                <span className='text-gray-300 hover:text-white transition-all cursor-pointer'>Features</span>
                <span className='text-gray-300 hover:text-white transition-all cursor-pointer'>Specs</span>
                <span className='text-gray-300 hover:text-white transition-all cursor-pointer'>Product</span>
                <span className='text-gray-300 hover:text-white transition-all cursor-pointer'>Faq</span>
                <span className='text-gray-300 hover:text-white transition-all cursor-pointer'>Contact
</span>
            </nav>
        </div>
    </header>
  )
}
