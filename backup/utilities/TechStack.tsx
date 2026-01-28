import Image from "next/image";
import Carousel from "../Carousel";

const TechStack = () => {
  return (
    <div className="bg-[#101010] border-[#1C1C1C] border-2 rounded-xl flex flex-col p-5 gap-2 ">
      <div className=" flex justify-center items-center gap-2">
        <Image
          src="/asset/purple/stack.png"
          alt="stack"
          width={17.92}
          height={15}
          className="h-3.3"
        />
        <p className="text-[#999999] font-medium text-sm">My Stack</p>
      </div>
      <p className="text-[#E6E6E6] text-base font-medium flex justify-center ">
        Tech Asernal
      </p>
    </div>
  );
};

export default TechStack;
