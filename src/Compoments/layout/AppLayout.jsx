import Navbar  from "../Navbars"
import { Outlet } from "react-router-dom"
import Footer from "../Footer"
// import { useState } from "react";
// import { useEffect } from "react";
const AppLayout = () => {
  // const [theme,setTheme] = useState('dark')
  // const handleThemeSwitch = () =>{
  //   setTheme(theme === 'dark' ? 'light' :'dark')
  // }
  //   useEffect(()=>{
  //     if(theme === 'dark'){
  //       document.documentElement.classList.add('dark')
  //     }else{
  //       document.documentElement.classList.remove('dark')
  //     }
  //   },[theme])
  return (
    <div>
    <Navbar />
    <div className="dark:bg-black"   >
    <Outlet/>
    </div>
   
    <Footer/>
      
    </div>
  )
}

export default AppLayout
