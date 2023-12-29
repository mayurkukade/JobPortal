import React, { useEffect, useState } from "react";
import styled from "styled-components";
import times from "lodash/times";
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import { withSize } from "react-sizeme";
import { nanoid } from "nanoid";
import { Typography } from "@material-tailwind/react";
import FullWidth from "./FullWidth";

import apple from '../Images/companiesLogo/apple.svg';
import amazon from '../Images/companiesLogo/amazon.svg';
import angular from '../Images/companiesLogo/amazon.svg';
import gatsby from '../Images/companiesLogo/gatsby-icon.png';
import lamb from '../Images/companiesLogo/lamborghini.svg';
import microsoft from '../Images/companiesLogo/microsoft.svg';
import nextjs from '../Images/companiesLogo/next.svg';
import python from '../Images/companiesLogo/python.svg';
import rollsroyce from '../Images/companiesLogo/rolls-royce.svg'
import tesla from '../Images/companiesLogo/tesla-motors.svg';
import twillio from '../Images/companiesLogo/twilio.svg'
import huwai from '../Images/companiesLogo/icons8-huawei-logo.svg'
import tata from '../Images/companiesLogo/tata-logo.svg'
import nestle from '../Images/companiesLogo/nestle-4.svg'
import cipla from '../Images/companiesLogo/cipla-logo.svg'
import firstCry from '../Images/companiesLogo/firstcry-1.svg'
import larsen from '../Images/companiesLogo/larsen-toubro-logo-2.svg'
import ola from '../Images/companiesLogo/ola-cabs.svg'
import slack from '../Images/companiesLogo/slack.svg'
import tech from '../Images/companiesLogo/tech-mahindra-new-logo.svg'

import zara from '../Images/companiesLogo/zara.svg'


const Height = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => (props.height ? props.height + "px" : "auto")};
`;

const Company = styled.div`
  position: relative;
  width: ${(props) => props.scale * 75}px;
  height: ${(props) => props.scale * 75}px;
`;

const Circle = styled.div`
  position: absolute;
  transform: scale(0.5);
  object-position: center center;
  will-change: transform, opacity;
  width: ${(props) => props.scale * 150}px;
  height: ${(props) => props.scale * 150}px;
  top: -50%;
  left: -50%;
  border-radius: 50%;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1), 0 3px 10px rgba(0, 0, 0, 0.07);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  display: block;
  /* https://stackoverflow.com/questions/24843676/how-can-i-fit-a-square-html-image-inside-a-circle-border */
  /* just making it < 70.7% */
  width: 60%;
  height: 60%;
`;

const icons = [
apple,

amazon,
angular,
gatsby,
nextjs,
lamb,
microsoft,
firstCry,
rollsroyce,
tesla,
twillio,
huwai,
tata,
nestle,
larsen,
cipla,
ola,
slack,
tech,
zara


];

const Companies = ({ size, onStartPerformance, onEndPerformance }) => {
  const [key, setKey] = useState(nanoid());

  useEffect(() => {
    setKey(nanoid());
  }, [size]);

  let scale = 0.9;

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
    <>
<Typography
          variant="h1"
          className="text-center pt-[3rem] text-primary mb-10 "
        >
          Our Learners Work at
        </Typography>
    
    <FullWidth>
      <Height height={400} >
        <Marquee
          key={key}
          velocity={20}
          scatterRandomly
          minScale={0.8}
          resetAfterTries={200}
          onInit={onStartPerformance}
          onFinish={onEndPerformance}
        >
          {times(20, Number).map((id) => (
            <Motion
              key={`marquee-example-company-${id}`}
              initDeg={randomIntFromInterval(0, 360)}
              direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
              velocity={12}
              radius={scale * 40}
              
            >
              <Company scale={scale}>
                <Circle scale={scale}>
                  <Logo src={icons[id]} alt="" />
                </Circle>
              </Company>
            </Motion>
          ))}
        </Marquee>
      </Height>
    </FullWidth>
    </>
  );
};

export default Companies;