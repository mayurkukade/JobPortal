import React from "react";
import { BsBriefcase } from "react-icons/bs";
import { IoIosPeople, IoMdClipboard } from "react-icons/io";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TfiBag } from "react-icons/tfi";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const createdashboard = (id, title, subtitle) => ({
  id,
  title,
  subtitle,
});

const generatedata = () => {
  return [
    createdashboard(1, "Career Page", "Your personilised career page"),
    createdashboard(2, "Published Job", "Seeyour Published Job"),
    createdashboard(3, "Talent Pool", "Find The best candidate"),
    createdashboard(4, "Expertia Chat", "Instantly chat with candiatate"),
    createdashboard(5, "Interviews", "Expert Interviews services"),
    createdashboard(6, "Assesments", "Instantly acesss your canditate"),
  ];
};

const data = generatedata();

export const Dashboarddata = [
  {
    dash: (
      <div>
        {data.map((dashboard) => (
          <div key={dashboard.id}>
            <div className="sm:col-span-4 bg-blue-100 p-5 rounded-md">
              <div className="flex">
                <h2 className="ml-6">
                  <IoMdClipboard className="w-[40px] h-[40px] " />
                </h2>
                <div className="ml-5">
                  <p className="text-xl">{dashboard.title}</p>
                  <p className="text-xs">{dashboard.subtitle}</p>
                </div>
                <div>
                  <h2 className="ml-12">
                    <FaArrowRightFromBracket className="w-[40px] h-[40px] " />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];
