import Navbar from "../Navbars";
import { Outlet } from "react-router-dom";
import Footer1 from "../Footer1";
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
        <div className="min-h-screen flex flex-col">
      {/* Navbar at the top */}
      <header >
        {/* Navbar content */}
        <Navbar/>
      </header>

      {/* Main content */}
      <main className="flex-grow dark:bg-black ">
        {/* Your page content goes here */}
       <Outlet/>
      </main>

      {/* Footer in the last outlet in the middle */}
      <Footer1>
        <Footer1/>
      </Footer1>
      </div>
    </div>
  );
};

export default AppLayout;
