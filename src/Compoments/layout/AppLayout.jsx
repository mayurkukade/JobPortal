import Navbar  from "../Navbars"
import { Outlet } from "react-router-dom"
import Footer from "../Footer"

const AppLayout = () => {
  return (
    <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
      
    </div>
  )
}

export default AppLayout
