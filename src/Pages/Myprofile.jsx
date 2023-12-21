import { Avatar } from "@material-tailwind/react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const Myprofile = () => {
  const cookiesJwt = Cookies.get("cookie");
  console.log(cookiesJwt);
  const decodejwt = jwtDecode(cookiesJwt);
  console.log(decodejwt);
  return (
    <div className="grid grid-cols-4   gap-1">
      <div className="bg-[#F8F8FF]">
        <div className="flex flex-col items-center">
          <Avatar
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
          />
          <h3>{decodejwt.fullName}</h3>
          <h5>{decodejwt.sub}</h5>
          <h5>88888888</h5>
          <div className="flex gap-2">
            <p>1 year 5 months</p>
            <p>Pune</p>
          </div>
          <div className="w-[15rem] h-0.5 bg-[#F0F8FF] mt-5 mb-5 "></div>

          <div className="mb-5">
            <div className="flex gap-2">
              <p>twitter</p>
              <p>Connect with Twitter</p>
            </div>
            <div className="flex gap-2">
              <p>twitter</p>
              <p>Connect with Twitter</p>
            </div>
            <div className="flex gap-2">
              <p>twitter</p>
              <p>Connect with Twitter</p>
            </div>
            <div className="flex gap-2">
              <p>twitter</p>
              <p>Connect with Twitter</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FAFAFA] col-span-2 p-5">
        <h3>Profile</h3>

        <div className=" flex gap-5 mb-1 mt-5">
          <p>profile logo</p>
          <p>Profesional Details</p>
        </div>
        <div>
          <h3>Reactjs Developer</h3>
          <p>Optical Arc Pvt. Ltd.</p>
          <p>May 1996 to Present</p>
        </div>
        <div className=" flex gap-5 mb-1 mt-5">
          <p>Education logo</p>
          <p>Education Details</p>
        </div>
        <div>
          <h3>B Tech / BE (Full Time) </h3>
          <p>Rashtrasant Tukadoji Maharaj Nagpur University</p>
          <p>2016 - 2021</p>
        </div>
        <div className=" flex gap-5 mb-1 mt-5">
          <p>Certification logo</p>
          <p>Certification Details</p>
        </div>
        <div>
          <p>XYZ Certification</p>
        </div>
        <div className=" flex gap-5 mb-1 mt-5">
          <p>More Logo</p>
          <p>More Details</p>
        </div>
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-2">
            <div>
              <p>Date of Birth:</p>
              <p>Gender:</p>
              <p>Current Location:</p>
              <p>Preferred Location:</p>
              <p>Notice Period:</p>
            </div>
            <div>
              <p>7th May 1996</p>
              <p>Male</p>
              <p>Pune</p>
              <p>Anywhere</p>
              <p>1 month</p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2">
              <div>
                <p>Functional Area :</p>
                <p>Annual Salary :</p>
                <p>Expected Salary :</p>
              </div>
              <div>
                <p>Full-Stack Development</p>
                <p>3 INR (lakhs/year)</p>
                <p>5 INR (lakhs/year) | Negotiable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F0F8FF]">
        <div className="flex">
          <p>message logo</p>
          <p>Send a Recommendation</p>
        </div>
        <p>
          Enhance your profile with recommendations of your work and skills.
          Candidates with recommendations have higher likelihood of being
          shortlisted.
        </p>
        <div className="flex-col">
        <p>Request a recommendation from -</p>

        </div>
        <input />
        <button>Send</button>

        <div>

        </div>
      </div>
    </div>
  );
};

export default Myprofile;
