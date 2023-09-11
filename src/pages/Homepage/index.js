import selfie from "../../assets/kupzimg.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import gmail from "../../assets/gmail.png";

export default function Homepage() {
  return (
    <div className="flex w-full flex-col gap-10 bg-slate-700">
      {/* HERO SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center place-items-center gap-8 p-5">
        {/* NAME AND SOCIALS */}
        <div className="text-white ">
          <div>
            <p className="text-6xl font-medium">BEN JOHN</p>
            <p className="text-6xl font-medium translate-x-10">VILLABESA</p>
          </div>
          {/* socials */}
          <div className="flex gap-6 mt-20 md:mt-40">
            <img src={facebook} className="socialite-img" alt="facebook logo" />
            <img
              src={instagram}
              className="socialite-img"
              alt="facebook logo"
            />
            <img src={linkedin} className="socialite-img" alt="facebook logo" />
            <img src={gmail} className="socialite-img" alt="facebook logo" />
          </div>
        </div>

        {/* SELF IMAGE */}
        <div>
          <img src={selfie} alt="my photo" className="w-96 bg-red-400" />
        </div>

        {/* INTRODUCTIONS */}
        <div className="flex flex-col gap-5 sm:col-span-2 md:col-span-1">
          <p className="text-slate-900 font-medium">- Introduction</p>
          <p className="text-slate-50 font-bold text-4xl">
            Freelance Full-Stack Web Developer, based in Philippines.
          </p>
          <p className="text-slate-300 font-medium ">
            Experienced full-stack web developer passionate about creating
            user-friendly digital experiences. Proficient in front-end and
            back-end development, I enjoy crafting elegant solutions for complex
            challenges.
          </p>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="w-full h-screen bg-slate-900 text-white">
        <p className="font-medium">- Projects</p>
      </div>
    </div>
  );
}
