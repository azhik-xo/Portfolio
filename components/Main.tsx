import TechStack from "./compnents/TechStack";
import Projects from "./compnents/Projects";
import Services from "./compnents/Services";
import Profile from "./compnents/Profile";
import Clients from "./compnents/Clients";
import Experties from "./compnents/Experties";
import Testimonials from "./compnents/Testimonials";
import WorkProcess from "./compnents/WorkProcess";
import Contact from "./compnents/Contact";
import SocialMedia from "./compnents/SocialMedia";

const Test = () => {
  return (
    // <<<<<<<<  ------------------------------------------------------------------------------------------  Main div >>>>>
    <div className="grid grid-cols-[60%_40%] m-5 gap-2 w-screen | max-sm:grid-cols-1 max-sm:grid-rows-[2fr_1fr] max-sm:m-2 | max-md:grid-cols-1 max-md:grid-rows-[50%_50%] |">
      {/* <<<<<<<< ------------------------------------------------------------------------------------------ Sub div-1>>>>> */}
      <div className="grid grid-cols-2 gap-2 | max-sm:grid-cols-1 max-sm:h-full max-sm:grid-rows-[1fr_1fr] | max-md:grid-cols-[48%_1fr] | max-lg:grid-cols-[48%_2fr] ">
        {/* <<<<<<<< ------------------------------------------------------------------------- Stack - Project - Service>>>>> */}
        <div className="grid grid-cols-1 grid-row-[1fr_1fr_1fr] gap-2  | sm:order-1 | | max-lg:order-2">
          <TechStack />
          <Projects />
          <Services />
        </div>
        {/* <<<<<<<< ---------------------------------------------------------------------------------  Profile - Client >>>>> */}
        <div className="grid grid-cols-1 grid-rows-[15%_1fr_35%] gap-2 | max-sm:grid-rows-[16%_46.5%_35%] max-sm: sm:order-2 | max-md:grid-rows-[15%_1fr_35%] | max-lg:order-1 ">
          <Experties />
          <Profile />
          <Clients />
        </div>
      </div>
      {/* <<<<<<<< ------------------------------------------------------------------------------------------ Sub div-1>>>>> */}
      <div className="grid gap-2 grid-cols-1 grid-rows-[1fr_45%] | max-sm:grid-cols-1 max-sm:grid-rows-[1fr_1fr_10%] | max-md:grid-cols-1 max-md:grid-rows-[1fr_1fr] | max-lg:grid-cols-[48%_2fr] ">
        <div className=" grid grid-cols-[60%_1fr] gap-2 | max-sm:grid-cols-[56%_1fr] | |">
          <Testimonials />
          <WorkProcess />
        </div>
        <div className="grid grid-cols-[1fr_60%] gap-2">
          <SocialMedia />
          <Contact />
        </div>
        <div className="lg:hidden"></div>
      </div>
    </div>
  );
};

export default Test;
