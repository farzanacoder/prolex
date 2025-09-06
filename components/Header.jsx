import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='fixed top-0 left-0 w-full z-[99] bg-secondary' id='home'>
        <div className='container flex items-center justify-between py-5'>
            <div className="logo">
                <Image src={'/logo.jpg'} alt='logo' width={161} height={39}/>
            </div>

            <nav className='flex items-center justify-end gap-6'>
                <Link href='#home' className='text-gray-300 hover:text-white transition-all cursor-pointer'>Home</Link>
                <Link href='#features' className='text-gray-300 hover:text-white transition-all cursor-pointer'>Features</Link>
                <Link href='#specs' className='text-gray-300 hover:text-white transition-all cursor-pointer'>Specs</Link>
                <Link href='#product' className='text-gray-300 hover:text-white transition-all cursor-pointer'>Product</Link>
                <Link href='#faq' className='text-gray-300 hover:text-white transition-all cursor-pointer'>Faq</Link>
                <Link href='#contact' className='text-gray-300 hover:text-white transition-all cursor-pointer'>Contact</Link>
            </nav>
        </div>
    </header>
  )
}
