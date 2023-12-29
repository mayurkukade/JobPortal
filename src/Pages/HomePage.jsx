import Header from "../Compoments/Home/Header";
import HeaderLower from "../Compoments/Home/HeaderLower";

import Testimonals from "../Compoments/Home/Testimonals";

import Cards from "../Compoments/Home/Cards";
import Reviews from "../Compoments/Home/Reviews";
import HomeSteps from "../Compoments/Home/HomeSteps";
import Companies from '../Compoments/Home/Comapnies.jsx'
import StillHaveDout from "../Compoments/Home/StillHaveDout.jsx";
import { Faq } from "../Compoments/Home/Faq.jsx";
export default function HomePage() {
  return (
    <>
      <Header />

      <HeaderLower />
      
      <HomeSteps />
      <Reviews />
    <Companies/>

      <Cards />
      <StillHaveDout/>
      <Faq/>
      {/* <Testimonals /> */}
    </>
  );
}
