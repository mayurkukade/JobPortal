import React,{useState,useRef} from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import YouTube from "react-youtube";
import MuxPlayer from "@mux/mux-player-react";
import { Button } from "@mui/material";
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const CoursesModules = () => {
  const [open, setOpen] = React.useState(0);
  const videoUrls = [
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" ,
  ];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoPlayerRef = useRef(null);
  const playNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };
  const playerStyle = {
    height: '500px',
   
  };
  const playPreviousVideo = () => {
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex - 1 + videoUrls.length) % videoUrls.length
    );
  };
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  // Replace 'VIDEO_ID' with the actual YouTube video ID
  const videoId = "VIDEO_ID";

  // Options for the YouTube player
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleVideoEnd = () => {
    // Video has ended, play the next video
    playNextVideo();
  };
  return (
    <div className="mx-auto container   font-poppins">
      <p className="text-lg  font-medium mb-5">
        There are 4 modules in this course
      </p>

      <div className="border-2 border-sky-500 p-5 ">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            What is AI?Application and Examples of AI
          </AccordionHeader>
          <AccordionBody>
            <YouTube videoId={"5NgNicANyqM"} opts={opts} onReady={onReady} />
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            AI Concepts,Terminology, and Application Areas
          </AccordionHeader>
          <AccordionBody>
             <MuxPlayer
             ref={videoPlayerRef}
          src={videoUrls[currentVideoIndex]}
          controls
          autoplay={currentVideoIndex == ' 0' ? false : true}
          loop={false}
          muted={false}
          onEnded={handleVideoEnd}
          style={playerStyle}
        />
        <Button onClick={playPreviousVideo}>Previous</Button>
        <Button onClick={playNextVideo}>Next</Button>
            
            
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            AI:Issues,Concern and Ethical Considerations
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            The Future with AI , and AI in Action
          </AccordionHeader>
          <AccordionBody>
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
};

export default CoursesModules;
