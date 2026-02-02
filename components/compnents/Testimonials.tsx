import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="bg-[#090909] border-[#1C1C1C] border-2 rounded-xl ">
      <div className="flex justify-center p-2 flex-col gap-2 border-2   border-b-[#1C1C1C] border-t-[#1c1c1c00] border-r-[#1c1c1c00] border-l-[#1c1c1c00] ">
        <div className="flex justify-center items-center gap-2">
          <Image
            src={"/asset/purple/mask.png"}
            alt="plus"
            height={24}
            width={24}
            className="h-4 w-4"
          />
          <span className=" text-sm font-light text-[#999999] | max-sm:text-xs ">
            Testimonials
          </span>
        </div>
        <span className="flex justify-center font-semibold | max-sm:text-sm">
          Reviews Showcase
        </span>
      </div>
    </div>
  );
};

export default Testimonials;
