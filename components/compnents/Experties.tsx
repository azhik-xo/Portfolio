import CountUp from "../utilities/CountUp";
import Image from "next/image";

const Experties = () => {
  return (
    // <<<<<<<<  ------------------------------------------------------------------------------------------  Main div >>>>>
    <div className=" grid grid-cols-3 gap-2 |  ">
      {/* <<<<<<<< --------------------------------------------------------------------------------------------------  Projects >>>>> */}
      <div className="bg-[#090909] border-[#1C1C1C] border-2 rounded-xl flex flex-col p-2 gap-2 justify-center items-center ">
        <div className="flex items-center justify-center gap-2 max-md:gap-1 ">
          <CountUp
            from={0}
            to={20}
            separator=","
            direction="up"
            duration={3}
            className="count-up-text text-5xl font-medium text-transparent bg-clip-text bg-linear-to-b from-white to-sky-500/10 | "
          />
          <Image
            src={"/asset/purple/plus.png"}
            alt="plus"
            height={24}
            width={24}
            className="max-md:h-5 max-md:w-5"
          />
        </div>
        <div className="flex flex-row gap-2 justify-center items-center bg-[#161616] border border-[#1C1C1C] py-1 px-6 rounded-2xl max-sm:py-2">
          <Image
            src={"/asset/purple/flag.png"}
            alt="plus"
            height={5}
            width={14}
            className="h-3 w-2"
          />
          <p className="text-sm font-light max-sm:text-xs | max-md:text-xs">Projects</p>
        </div>
      </div>
      {/* <<<<<<<< --------------------------------------------------------------------------------------------------  Services >>>>> */}
      <div className="bg-[#090909] border-[#1C1C1C] border-2 rounded-xl flex flex-col p-2 gap-2 justify-center items-center">
        <div className="flex items-center justify-center gap-2 ">
          <CountUp
            from={0}
            to={5}
            separator=","
            direction="up"
            duration={3}
            className="count-up-text text-5xl font-medium text-transparent bg-clip-text bg-linear-to-b from-white to-sky-500/10"
          />
          <Image
            src={"/asset/purple/plus.png"}
            alt="plus"
            height={24}
            width={24}
          />
        </div>
        <div className="flex flex-row gap-2 justify-center items-center bg-[#161616] border border-[#1C1C1C] py-1 px-6 rounded-2xl max-sm:py-2">
          <Image
            src={"/asset/purple/service.png"}
            alt="plus"
            height={5}
            width={14}
            className="h-3 w-3"
          />
          <p className="text-sm font-light max-sm:text-xs | max-md:text-xs">Service</p>
        </div>
      </div>
      {/* <<<<<<<< --------------------------------------------------------------------------------------------------  Year Experties >>>>> */}
      <div className="bg-[#090909] border-[#1C1C1C] border-2 rounded-xl flex flex-col  gap-2 justify-center items-center">
        <div className="flex items-center justify-center gap-2 ">
          <CountUp
            from={0}
            to={3}
            separator=","
            direction="up"
            duration={3}
            className="count-up-text text-5xl font-medium text-transparent bg-clip-text bg-linear-to-b from-white to-sky-500/10"
          />
          <Image
            src={"/asset/purple/plus.png"}
            alt="plus"
            height={24}
            width={24}
          />
        </div>
        <div className="flex flex-row gap-2 justify-center items-center bg-[#161616] border border-[#1C1C1C] py-1 px-2 rounded-2xl max-sm:py-2">
          <Image
            src={"/asset/purple/star.png"}
            alt="plus"
            height={5}
            width={14}
            className="h-3 w-3"
          />
          <p className="text-sm font-light max-sm:text-xs | max-md:text-xs ">
            Year Expertise
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experties;
