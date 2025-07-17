import ContactSection from '@/components/MenuPageComponents/ContactSection/ContactSection'
import HeroSection from '@/components/MenuPageComponents/HeroSection/HeroSection'
import MenuSection from '@/components/MenuPageComponents/MenuSection/MenuSection'
import TabSection from '@/components/MenuPageComponents/TabSection/TabSection'
import React from 'react'

const page = () => {
  return (
    <>
    <section><HeroSection/></section>
    <section><TabSection/></section>
    <section><MenuSection/></section>
    <section><ContactSection/></section>
    <section></section>
    <section></section>
    
    </>
  )
}

export default page
