import Battery from '@/components/Battery'
import BestFeture from '@/components/BestFeture'
import DoWnload from '@/components/DoWnload'
import Header from '@/components/Header'
import HomeBanner from '@/components/HomeBanner'
import KeyFeaturs from '@/components/KeyFeaturs'
import Products from '@/components/Products'
import Specs from '@/components/Specs'
import React from 'react'

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
    </>
  )
}
