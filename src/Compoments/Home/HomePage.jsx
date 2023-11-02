import React from 'react'
import Header from './Header'
import Navbars from '../Navbars'
import HeaderLower from './HeaderLower'
import Placement from './Placement'
import Footer from '../Footer'

export default function HomePage() {
  return (
    <div>
        <Navbars/>
        <Header/>
        <HeaderLower/>
        <Placement/>
        <Footer/>
    </div>
  )
}
