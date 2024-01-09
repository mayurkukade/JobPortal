import Pref from "./Images/preferable-icon 1.png";
import { FooterData } from "./Data/FooterData";
import { Button } from "@material-tailwind/react";
import { DiGithubBadge } from "react-icons/di";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const buttonhover = {
  hover: {
    scale: 1.1,
  },
};
export default function Footer() {
  return (
    <div className="flex justify-center bg-darkBlueBackground">
      <div className="">
        <div className="flex flex-wrap gap-6">
          {/* Preferable Icon */}
          <div className="sm:ml-10  mt-14">
            <img src={Pref} className="w-10 ml-16 mb-2 " alt="" />
            <p className="ml-5 text-4xl text-white "> Preferable</p>
            <p className="ml-5 text-sm text-white">Crafting Careers</p>
          </div>
          {/* Other Services */}
          <div className="flex flex-wrap gap-5">
            {FooterData.map(({ title, items, links }) => (
              <ul key={title}>
                <motion.div
                  className="text-xl text-white font-Inter mt-8 pb-2 cursor-pointer"
                  variants={buttonhover}
                  whileHover="hover"
                >
                  {title}
                </motion.div>
                {items.map((item, index) => (
                  <motion.li
                    variants={buttonhover}
                    whileHover="hover"
                    className="cursor-pointer"
                    key={index}
                  >
                    <div className="text-sm font-Inter text-gray-400 pb-2">
                      {/* Check if a link is available for the current item */}
                      {links && links[index] ? (
                        <Link to={links[index]}>{item}</Link>
                      ) : (
                        // If no link is available, just display the item text
                        item
                      )}
                    </div>
                  </motion.li>
                ))}
              </ul>
            ))}
          </div>

          <div>
            <p className="text-2xl font-Inter ml-14 mt-8  pb-2 text-white">
              Suscribe to our newsletter
            </p>
            <p className="text-sm font-Inter ml-14  pb-2 text-gray-400">
              Curated content craft careers
            </p>

            <div className="flex ml-14 ">
              <input
                type="email"
                placeholder="Enter email"
                className="w-36 h-10 border-2 mt-2 border-black rounded-md p-2"
              />
              <Button className="bg-save ml-2 mt-2">Subscribe</Button>
            </div>
          </div>
        </div>

        <hr className=" border-1 border-black" />

        <div className="flex mt-5">
          <div>
            <p className="text-sm">@2023 Preferable . All right reserved</p>
          </div>
          <div className="flex md:ml-[800px] ">
            <DiGithubBadge className="w-[40px] h-[40px] " />
            <FaFacebook className="w-[32px] h-[32px] mt-1 ml-2 " />
            <FaInstagram className="w-[32px] h-[32px] mt-1 ml-2 " />
            <CiLinkedin className="w-[32px] h-[32px] mt-1 ml-2 " />
          </div>
        </div>
      </div>
    </div>
  );
}
