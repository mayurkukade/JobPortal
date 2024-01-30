import React, { useEffect, useState } from "react";
import styled from "styled-components";
import times from "lodash/times";
import Marquee from "react-marquee-slider";
import { withSize } from "react-sizeme";
import { nanoid } from "nanoid";

import FullWidth from "../Home/FullWidth";

const Photo = styled.img`
  width: ${(props) => props.scale * 368}px;
  height: ${(props) => props.scale * 200}px;
  border-radius: 4px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.12);
  object-fit: cover;
  object-position: top;

  margin-left: ${(props) => (props.offset === "true" ? props.scale * 7 : props.scale * 87)}px;
  margin-right: ${(props) => (props.offset === "true" ? props.scale * 80 : 0)}px;
`;

const photos = [
  "/assets/images/people-1.jpg",
  "/assets/images/people-2.jpg",
  "/assets/images/people-3.jpg",
  "/assets/images/people-4.jpg",
  "/assets/images/people-5.jpg",
  "/assets/images/people-6.jpg",
  "/assets/images/people-7.jpg",
  "/assets/images/people-8.jpg",
  "/assets/images/people-9.jpg",
  "/assets/images/people-10.jpg",
  "/assets/images/people-11.jpg",
  "/assets/images/people-12.jpg",
  "/assets/images/people-13.jpg",
  "/assets/images/people-14.jpg",
];

const StudyAbroadMarquee = ({ size }) => {
    const [key, setKey] = useState(nanoid());
  
    useEffect(() => {
      setKey(nanoid());
    }, [size, ]);
  
    let scale = 0.5;
  
    if (size && size.width > 800) {
      scale = 0.65;
    }
  
    if (size && size.width > 1100) {
      scale = 0.8;
    }
  
    if (size && size.width > 1400) {
      scale = 1;
    }
  
    return (
      <FullWidth style={{padding:'25px'}}>
       
  
        
  
        <div style={{ height: scale * 200 }}>
          <Marquee key={key} velocity={25}>
            {times(7, Number).map((id) => (
              <Photo
                src={photos[id + 7]}
                alt=""
                key={`marquee-example-people-${id + 7}`}
                offset="true"
                scale={scale}
              />
            ))}
          </Marquee>
        </div>
      </FullWidth>
    );
  };
  
  export default StudyAbroadMarquee;
