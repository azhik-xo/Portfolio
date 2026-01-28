import TechStack from "./utilities/TechStack";
import Projects from "./utilities/Projects";
import Services from "./utilities/Services";
import Profile from "./utilities/Profile";
import Clients from "./utilities/Clients";
import Experties from "./utilities/Experties";

const Main = () => {
  return (
    // <<<<<<<<  ------------------------------------------------------------------------------------------  Main div >>>>>
    <div className="grid grid-cols-2 gap-2 w-screen m-5 max-md:grid-cols-1 sm:flex-wrap-reverse">
      {/* <<<<<<<< ------------------------------------------------------------------------------------------ Sub div-1>>>>> */}
      <div className=" grid grid-cols-[48%_2fr] gap-2 max-sm:grid-cols-1 ">
        {/* <<<<<<<< ------------------------------------------------------------------------- Stack - Project - Service>>>>> */}
        <div className="grid grid-cols-1 grid-row-[1fr_1fr_1fr] gap-2 order-2 md:order-1">
          <TechStack />
          <Projects />
          <Services />
        </div>
        {/* <<<<<<<< ---------------------------------------------------------------------------------  Profile - Client >>>>> */}
        <div className="grid grid-cols-1 grid-rows-[15%_1fr_1fr] gap-2 order-1 md:order-2">
          <Experties />
          <Profile />
          <Clients />
        </div>
      </div>
      {/* <<<<<<<< -------------------------------------------------------------------------------------------- Sub div-2>>>>> */}
      <div className="bg-white "></div>
    </div>
  );
};

export default Main;
