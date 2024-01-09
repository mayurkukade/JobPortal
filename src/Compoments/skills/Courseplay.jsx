import React,{useRef,useState} from 'react'
import { useParams } from 'react-router'
import YouTube from "react-youtube";
import MuxPlayer from "@mux/mux-player-react";
import { Button } from "@mui/material";

const Courseplay = () => {
  const {id} = useParams()
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
    <div>
      <p>Courseplay {id}</p>
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
    </div>
  )
}

export default Courseplay
