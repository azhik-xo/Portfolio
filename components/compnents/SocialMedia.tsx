import Image from "next/image";

const SocialMedia = () => {
  return (
    <div className="bg-[#090909] border-[#1C1C1C] border-2 rounded-xl | max-md:p-1 ">
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
            Follow Me
          </p>
        </div>
        <p className="flex justify-center font-semibold | max-sm:text-sm">
          Online Presence
        </p>
      </div>

      <div className=" flex flex-col  items-center gap-2 p-2 | max-sm:p-1">
        <div className="flex items-center p-2 border border-[#1C1C1C] gap-2 rounded-xl max-md:rounded-md  bg-[#191919] w-full">
          <div className="p-2 bg-[#282828] rounded-md max-md:rounded-sm">
            <Image
              src={"/asset/white/insta.png"}
              alt="plus"
              height={24}
              width={24}
              className=" h-4 w-4  | max-sm:h-3 max-sm:w-3 "
            />
          </div>
          <p className="| max-sm:text-xs">
            <a
              href="https://www.instagram.com/azhik.xo__?igsh=bHNzNW1lczkxcWF3"
              className=""
            >
              azhik.xo__
            </a>
          </p>
        </div>

        <div className="flex items-center p-2 border border-[#1C1C1C] gap-2 rounded-xl max-md:rounded-md bg-[#191919] w-full">
          <div className="p-2 bg-[#282828] rounded-md max-md:rounded-sm">
            <Image
              src={"/asset/white/linkedin.png"}
              alt="plus"
              height={24}
              width={24}
              className=" h-4 w-4  | max-sm:h-3 max-sm:w-3 "
            />
          </div>
          <p className="| max-sm:text-xs">
            <a href="https://www.linkedin.com/in/abdul-ashik-k/" className="">
              Abdul Ashik K
            </a>
          </p>
        </div>

        <div className="flex items-center p-2 border border-[#1C1C1C] gap-2 rounded-xl max-md:rounded-md bg-[#191919] w-full">
          <div className="p-2 bg-[#282828] rounded-md max-md:rounded-sm">
            <Image
              src={"/asset/white/dribble.png"}
              alt="plus"
              height={24}
              width={24}
              className=" h-4 w-4  | max-sm:h-3 max-sm:w-3 "
            />
          </div>
          <p className="| max-sm:text-xs">
            <a href="https://dribbble.com/abdul-ashik" className="">
              Azex.lab
            </a>
          </p>
        </div>

        <div className="flex items-center p-2 border border-[#1C1C1C] gap-2 rounded-xl max-md:rounded-md bg-[#191919] w-full">
          <div className="p-2 bg-[#282828] rounded-md max-md:rounded-sm">
            <Image
              src={"/asset/white/github.png"}
              alt="plus"
              height={24}
              width={24}
              className=" h-4 w-4  | max-sm:h-3 max-sm:w-3 "
            />
          </div>
          <p className="| max-sm:text-xs">
            <a href="https://github.com/azhik-xo" className="">
              axhik-xo
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
