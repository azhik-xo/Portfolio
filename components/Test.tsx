import TechStack from "./utilities/TechStack";
import Projects from "./utilities/Projects";
import Services from "./utilities/Services";
import Profile from "./utilities/Profile";
import Clients from "./utilities/Clients";
import Experties from "./utilities/Experties";

const Test = () => {
  return (
    // <<<<<<<<  ------------------------------------------------------------------------------------------  Main div >>>>>
    <div className="grid grid-cols-2 m-5 gap-2 w-screen | max-sm:grid-cols-1 | max-md:grid-cols-1 | ">
      {/* <<<<<<<< ------------------------------------------------------------------------------------------ Sub div-1>>>>> */}
      <div className="grid gap-2 grid-cols-2 | max-sm:grid-cols-1 | max-md:grid-cols-[48%_2fr] | max-lg:grid-cols-[48%_2fr] ">
        {/* <<<<<<<< ------------------------------------------------------------------------- Stack - Project - Service>>>>> */}
        <div className="grid grid-cols-1 grid-row-[1fr_1fr_1fr] gap-2  | sm:order-1 | | max-lg:order-2">
          <TechStack />
          <Projects />
          <Services />
        </div>
        {/* <<<<<<<< ---------------------------------------------------------------------------------  Profile - Client >>>>> */}
        <div className="grid grid-cols-1 grid-rows-[15%_1fr_1fr] gap-2 | max-sm:grid-rows-[20%_1fr_35%]  sm:order-2 | max-md:grid-rows-[15%_1fr_35%] | max-lg:order-1 ">
          <Experties />
          <Profile />
          <Clients />
        </div>
      </div>
      <div className="bg-white"></div>
    </div>
  );
};

export default Test;
