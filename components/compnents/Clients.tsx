import Image from "next/image";
import BrandMarquee from "../utilities/brand-marquee/BrandMarquee";

const Clients = () => {
  return (
    <div className="bg-[#090909] border-[#1C1C1C] border-2 rounded-xl | flex flex-col gap-5 justify-center" >
      <div className="flex justify-center p-2  max-md:p-3 flex-col gap-2 ">
        <div className="flex justify-center items-center gap-2">
          <Image
            src={"/asset/purple/rocket.png"}
            alt="plus"
            height={24}
            width={24}
            className="h-4 w-4"
          />
          <p className=" text-sm font-light text-[#999999] | max-sm:text-xs ">
            My Clients
          </p>
        </div>
        <p className="flex justify-center font-semibold | max-sm:text-sm">
          Satisfied Partners
        </p>
      </div>
      <BrandMarquee />
    </div>
  );
};

export default Clients;
