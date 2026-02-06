import Image from "next/image";
import ServiceMarquee from "../utilities/service_marquee/ServiceMarquee";

const TechStack = () => {
  return (
    <div className="bg-[#090909] border-[#1C1C1C] border-2 rounded-xl  p-2 grid grid-rows-[20%_60%]| | | ">
      <div className="flex justify-center p-2  max-md:p-3 flex-col gap-2 ">
        <div className="flex justify-center items-center gap-2">
          <Image
            src={"/asset/purple/stack.png"}
            alt="plus"
            height={24}
            width={24}
            className="h-3 w-4"
          />
          <p className=" text-sm font-light text-[#999999] | max-sm:text-xs ">
            My Stacks
          </p>
        </div>
        <p className="flex justify-center font-semibold | max-sm:text-sm">
          Tech Asernal
        </p>
      </div>
      <div className="grid grid-cols-2 border-2">
        {/* <div className="bg-amber-200"></div>
        <div className="bg-amber-200"></div>
        <div className="bg-amber-200"></div>
        <div className="bg-amber-200"></div> */}
      </div>
    </div>
  );
};

export default TechStack;
