import React from 'react'
import Header from './Header'
import Navbars from '../Navbars'
import HeaderLower from './HeaderLower'
import Placement from './Placement'
import Footer from '../Footer'
import Footer1 from '../Footer1'
import HomeCard from './HomeCard'
import Cards from '../Forms/Cards'

export default function HomePage() {
  return (
    <div>
        <Navbars/>
        <Header/>
        <HomeCard/>
        <HeaderLower/>
        <Cards/>
        <Placement/>
        {/* <Footer/> */}
        <Footer1/>
    </div>
  )
}
