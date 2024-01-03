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
import { Link } from "react-router-dom";
import { GiRobotGolem } from "react-icons/gi";
import { IoEarth } from "react-icons/io5";
import { SiHiveBlockchain } from "react-icons/si";
import { RiSpeakLine } from "react-icons/ri";
const Sidebar = () => {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Courses
        </Typography>
      </div>
      <List>
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
            /> */}
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
          <IoEarth />
          </ListItemPrefix>
          Web Development
        </ListItem>
        <ListItem>
          <ListItemPrefix>
          <BsAndroid2 />
          </ListItemPrefix>
          Android Development
        </ListItem>
        <ListItem>
          <ListItemPrefix>
          <SiHiveBlockchain />
          </ListItemPrefix>
          Blockchain Development
        </ListItem>
        <ListItem>
          <ListItemPrefix>
          <RiSpeakLine />
          </ListItemPrefix>
          Soft Skills
        </ListItem>
      </List>
    </Card>
  );
};

export default Sidebar;
