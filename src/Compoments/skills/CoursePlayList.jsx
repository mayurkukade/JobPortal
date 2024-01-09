import React, { useEffect } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { BsAndroid2 } from "react-icons/bs";
import { FaFire } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { GiRobotGolem } from "react-icons/gi";
import { IoEarth } from "react-icons/io5";
import { SiHiveBlockchain } from "react-icons/si";
import { RiSpeakLine } from "react-icons/ri";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const CoursePlayList = () => {
  const DummyData = [
    {
      description:
        "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      sources: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      ],
      subtitle: [{"videolink":"video1","videoId":"001"}, {"videolink":"video2","videoId":"002"}],
      thumb: "images/BigBuckBunny.jpg",
      title: "Module 1",
      id: 1,
    },
    {
      description: "The first Blender Open Movie from 2006",
      sources: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      ],
      subtitle: [{"videolink":"video3","videoId":"003"}, {"videolink":"video4","videoId":"004"}],
      thumb: "images/ElephantsDream.jpg",
      title: "Module 2",
      id: 2,
    },
    {
      description:
        "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
      sources: [
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      ],
      subtitle: [{"videolink":"video5","videoId":"005"}, {"videolink":"video6","videoId":"006"}],
      thumb: "images/ForBiggerBlazes.jpg",
      title: "Module3",
      id: 3,
    },
  ];
  const [open, setOpen] = React.useState(1);
  const [selected, setSelected] = React.useState(1);
  const setSelectedItem = (value) => setSelected(value);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const navigate = useNavigate();

  const sidebarMapData = DummyData.map((items, index) => {
    console.log(items);
    return (
      <div key={index}>
        <Accordion open={open === items.id}>
        
          <AccordionHeader onClick={() => handleOpen(items.id)}>
            {items.title}
          </AccordionHeader>
          

          <AccordionBody className="cursor-pointer text-lg hover:text-red-700">
            <List>
             
              {items?.subtitle?.map((title, index) => (
                <div key={index}>
                <Link to={`/courseplaylist/1/list/${title?.videoId}`}>
                  <ListItem className={`${title?.videoId == '002' ? 'bg-green-400' :null }`} >{title?.videolink}</ListItem>
                  </Link>
                </div>
              ))}
              
            </List>
          </AccordionBody>
        </Accordion>
      </div>
    );
  });

  useEffect(() => {
    navigate(`/courseplaylist/1/list/001`);
  }, []);
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[16rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          <p className="text-black">Courses content</p>
        </Typography>
      </div>
      {sidebarMapData}
    </Card>
  );
};

export default CoursePlayList;
{
  /* <List>
      <Link to={"/skills"}>
        <ListItem>
          <ListItemPrefix>
          <FaFire />
          </ListItemPrefix>
          Popular Courses
        </ListItem>
      </Link>
      <Link to={"/skills/Ai"}>
        <ListItem>
          <ListItemPrefix>
          <FaDatabase />

          </ListItemPrefix>
          Data Science & Business Analytics
        </ListItem>
      </Link>

      <ListItem>
        <ListItemPrefix>
        <GiRobotGolem />
        </ListItemPrefix>
        AI & Machine Learning
        <ListItemSuffix>
          {/* <Chip
            value="14"
            size="sm"
            variant="ghost"
            color="blue-gray"
            className="rounded-full"
          /> */
}
//     </ListItemSuffix>
//   </ListItem>
//   <ListItem>
//     <ListItemPrefix>
//     <IoEarth />
//     </ListItemPrefix>
//     Web Development
//   </ListItem>
//   <ListItem>
//     <ListItemPrefix>
//     <BsAndroid2 />
//     </ListItemPrefix>
//     Android Development
//   </ListItem>
//   <ListItem>
//     <ListItemPrefix>
//     <SiHiveBlockchain />
//     </ListItemPrefix>
//     Blockchain Development
//   </ListItem>
//   <ListItem>
//     <ListItemPrefix>
//     <RiSpeakLine />
//     </ListItemPrefix>
//     Soft Skills
//   </ListItem>
// </List> */}
