import React from "react";
import logoleft from "../Compoments/Images/logoleft.png";
import logotop from "../Compoments/Images/logotop.png";
import logoright from "../Compoments/Images/logoright.png";
import PreferableIcon from "../Compoments/Images/PreferableIcon.png";
const AboutUs = () => {
  return (
    <div className="flex flex-col bg-[#FBEAEB] p-5 h-auto md:h-auto">
      <div className="flex justify-center items-center">
        <img src={logotop} alt="img1" className="h-28" />
      </div>
      <div className="flex">
        <div>
          <img src={logoleft} alt="img1" className="ml-1" />
        </div>
        <div className="flex items-center flex-col">
          <img src={PreferableIcon} alt="BM" className="h-20" />
          <p className="mt-8 text-black text-6xl font-serif text-center">
            About Preferable
          </p>

          <p className="mt-12 text-black text-3xl font-serif text-center">
            Unlocking Potential: Chasing Dreams
          </p>
          <p className="mt-12 text-black text-xl font-serif text-center">
            Welcome to Preferable Engineers, the ultimate social networking
            platform designed for students to transform their dreams into
            reality. Here, you'll not only realize your aspirations but also
            secure top-tier jobs through a robust foundation and world-class
            education.
          </p>

          <p className="mt-16 text-black text-4xl font-serif text-center">
            Embark on Your Educational Odyssey
          </p>
          <p className="mt-12 text-black text-xl font-serif text-center">
            There is no need for prestigious institutions like Harvard and MIT.
            Our LIVE digital learning platform is crafted to shape you into
            future CEOs. With a meticulously planned curriculum, groundbreaking
            teaching methods, and exceptional faculty, we empower you to soar to
            new heights.
          </p>

          <p className="mt-16 text-black text-4xl font-serif text-center">
            Crafting Your Dream Careers
          </p>
          <p className="mt-12 text-black text-xl font-serif text-center">
            Discover job opportunities and internships, hear insights from
            global leaders, and forge powerful connections with fellow students.
            Receive job alerts, let companies find you, and participate in mock
            interviews to boost your confidence on the path to
            your dream career.
          </p>

          {/* <p className="mt-16 text-black text-4xl font-serif text-center">
            Your unlimited fun
          </p>
          <p className="mt-12 text-black text-xl font-serif text-center">
            Join thousands of students in hundreds of communities across the
            country. See something you love? Clap for it. <br /> Whistle at it.
            Need friends? Start a conversation. Or just lurk, if you’re feeling
            shy. No big deal.
          </p>
          <p className="mt-12 text-black text-xl font-serif text-center">
            Preferable is your canvas. Something interesting in your campus? Go
            LIVE. Post text, photos, GIFs, videos, live videos, <br /> audio,
            anything. Make your own GIFs. Cover them in stickers and text, if
            you like.
          </p>

          <p className="mt-12 text-black text-xl font-serif text-center font-semibold">
            It’s a whole big world in here. <br /> Come on in.
          </p> */}
        </div>
        <div className="ml-auto">
          <img src={logoright} alt="img1" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
