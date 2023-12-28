
import Header from '../Compoments/Home/Header'
import HeaderLower from '../Compoments/Home/HeaderLower'

import Testimonals from '../Compoments/Home/Testimonals'
import PlacementCompany from '../Compoments/Home/PlacementCompany'
import HomeTabs from '../Compoments/Home/HomeTabs'
import Cards from '../Compoments/Home/Cards'
import Reviews from '../Compoments/Home/Reviews'
import HomeSteps from '../Compoments/Home/HomeSteps'



export default function HomePage() {
  return (
    <>
    
        <Header/>
        
        <HeaderLower/>
        <Reviews/>
        <HomeSteps/>
        <Cards/>
        <Testimonals/>
     
      
    </>
  )
}
