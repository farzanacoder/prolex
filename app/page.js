import Battery from '@/components/Battery'
import BestFeture from '@/components/BestFeture'
import DoWnload from '@/components/DoWnload'
import Header from '@/components/Header'
import HomeBanner from '@/components/HomeBanner'
import KeyFeaturs from '@/components/KeyFeaturs'
import Products from '@/components/Products'
import Specs from '@/components/Specs'
import Testimonial from '@/components/Testimonial'
import FaQ from '@/components/FaQ'
import React from 'react'
import Contact from '@/components/Contact'
import NewsLetter from '@/components/NewsLetter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
    <Header/>
    <HomeBanner/>
    <KeyFeaturs/>
    <BestFeture/>
    <Battery/>
    <Specs/>
    <DoWnload/>
    <Products/>
    <Testimonial/>
    <FaQ/>
    <Contact/>
    <NewsLetter/>
    <Footer/>
    </>
  )
}
