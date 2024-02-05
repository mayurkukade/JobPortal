import iconM from "../Images/mentor/online-counseling.png";
import iconGM from "../Images/mentor/press-conference.png";
import iconPod from "../Images/mentor/videoconference.png";

function FirstPart() {
  return (
    <div>
      <div className="bg-navyblue w-full text-center">
        <div>
          <p className="text-textnavyblue text-3xl pt-12 ">
            Thrive Beyond Satisfaction Gain Insights <br /> from Authentic
            Mentors' Experiences
          </p>
          <p className="text-white text-lg pt-2 mb-16">
            Learn from the{" "}
            <span className="text-orange-300">real experiences </span>
            of <span className="text-orange-300">real mentors</span>
          </p>
          <div className="flex gap-12 justify-center pb-11">
            <div>
              <img src={iconM} alt="Mentor Icon" className="h-[120px] " />
              <p className="text-white">
                1:1 Mentor <br /> Sessions
              </p>
            </div>
            <div>
              <img src={iconGM} alt="Podcast Icon" className="h-[120px]" />
              <p className="text-white">Podcasts</p>
            </div>
            <div>
              <img
                src={iconPod}
                alt="Group Mentoring Icon"
                className="h-[120px]"
              />
              <p className="text-white">
                Group <br /> Mentoring
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-3xl font-bold mt-16">Find Your Mentor</p>
        <p className="text-lg text-gray-600 mt-6">
        Harness Experience, Forge Growth.
Unbiased Guidance. Expansive Networks. Limitless Potential..
        </p>
      </div>
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Search by Mentor's Name, Industry, Designation, Expertise, Company, or College"
          className="p-4 border border-gray-500 rounded-full w-[1200px] h-16 mt-10"
        />
      </div>
    </div>
  );
}

export default FirstPart;
