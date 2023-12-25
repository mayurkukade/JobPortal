import React from 'react'
import logoleft from "../Compoments/Images/logoleft.png";
import logotop from "../Compoments/Images/logotop.png";
import logoright from "../Compoments/Images/logoright.png";
import PreferableIcon from "../Compoments/Images/PreferableIcon.png";
const AboutUs = () => {
  return (
    <div className="flex flex-col bg-[#FBEAEB] h-auto md:h-auto">
    <div className="flex justify-center items-center">
        <img src={logotop} alt="img1" className="h-28" />
    </div>
    <div className="flex">
        <div>
            <img src={logoleft} alt="img1" className="ml-1" />
        </div>
        <div className="flex items-center flex-col">
            <img src={PreferableIcon} alt="BM" className="h-20" />
            <p className="mt-8 text-black text-6xl font-serif text-center">About Preferable</p>

            <p className="mt-12 text-black text-3xl font-serif text-center">World-class Learning | Dream Careers | Unlimited Fun</p>
            <p className="mt-12 text-black text-xl font-serif text-center">Preferable Engineers (#AageKiPhikrNahi) is a social
                network <br /> platform for students where they can realize their dreams and <br /> aspirations,
                attain highest paying jobs through solid foundations <br /> and world-class education.</p>

            <p className="mt-16 text-black text-4xl font-serif text-center">Your world-class learning</p>
            <p className="mt-12 text-black text-xl font-serif text-center">You don’t need to go to Harvard and MIT for a great
                education. LIVE digital learning platform is made to groom you to <br /> become future CEOs.
                A structured program, with a pre-defined curriculum, out-of-the-world teaching pedagogy
                and <br /> great faculty exist here making it possible for you to fly higher.</p>

            <p className="mt-16 text-black text-4xl font-serif text-center">Your dream careers</p>
            <p className="mt-12 text-black text-xl font-serif text-center">Find jobs and internships. Listen to great leaders
                across the world. Build a strong network of students. Get job alerts. <br /> Let the companies find you.
                Attend mock-interviews. If you are not confident yet, listen to others going through mock <br /> interviews.</p>

            <p className="mt-16 text-black text-4xl font-serif text-center">Your unlimited fun</p>
            <p className="mt-12 text-black text-xl font-serif text-center">Join thousands of students in hundreds of communities
                across the country. See something you love? Clap for it. <br /> Whistle at it. Need friends?
                Start a conversation. Or just lurk, if you’re feeling shy. No big deal.</p>
            <p className="mt-12 text-black text-xl font-serif text-center">Preferable is your canvas. Something interesting in
                your campus? Go LIVE. Post text, photos, GIFs, videos, live videos, <br /> audio, anything. Make your
                own GIFs. Cover them in stickers and text, if you like.</p>

            <p className="mt-12 text-black text-xl font-serif text-center font-semibold">It’s a whole big world in here. <br /> Come on in.</p>
        </div>
        <div className="ml-auto">
            <img src={logoright} alt="img1" />
        </div>
    </div>
</div>

  )
}

export default AboutUs

