import Image from "next/image";

const WorkProcess = () => {
  return (
    <div className="bg-[#090909] border-[#1C1C1C] border-2 rounded-xl ">
      <div className="flex justify-center p-2 flex-col gap-2 border-2   border-b-[#1C1C1C] border-t-[#1c1c1c00] border-r-[#1c1c1c00] border-l-[#1c1c1c00] ">
        <div className="flex justify-center items-center gap-2">
          <Image
            src={"/asset/purple/shine.png"}
            alt="plus"
            height={24}
            width={24}
            className="h-4 w-4"
          />
          <span className=" text-sm font-light text-[#999999] | max-sm:text-xs ">
            Work Process
          </span>
        </div>
        <span className="flex justify-center font-semibold | max-sm:text-sm">
          Workflow Highlights
        </span>
      </div>
      <div className=" flex flex-col  items-center gap-2 p-2 | max-sm:p-1">
        <div className="flex items-center p-2 border border-[#1C1C1C] gap-2 rounded-xl bg-[#191919] w-full">
          <div className="p-2 bg-[#282828] rounded-md">
            <Image
              src={"/asset/white/goal.png"}
              alt="plus"
              height={24}
              width={24}
              className=" h-4 w-4  | max-sm:h-3 max-sm:w-3 "
            />
          </div>
          <p className="| max-sm:text-xs">Goals & Objectives</p>
        </div>

        <div className="flex items-center p-2 border border-[#1C1C1C] gap-2 rounded-xl bg-[#191919] w-full">
          <div className="p-2 bg-[#282828] rounded-md">
            <Image
              src={"/asset/white/research.png"}
              alt="plus"
              height={24}
              width={24}
              className=" h-4 w-4  | max-sm:h-3 max-sm:w-3 "
            />
          </div>
          <p className="| max-sm:text-xs">Research</p>
        </div>

        <div className="flex items-center p-2 border border-[#1C1C1C] gap-2 rounded-xl bg-[#191919] w-full">
          <div className="p-2 bg-[#282828] rounded-md">
            <Image
              src={"/asset/white/wireframe.png"}
              alt="plus"
              height={24}
              width={24}
              className=" h-4 w-4  | max-sm:h-3 max-sm:w-3 "
            />
          </div>
          <p className="| max-sm:text-xs">Wireframe</p>
        </div>

        <div className="flex items-center p-2 border border-[#1C1C1C] gap-2 rounded-xl bg-[#191919] w-full">
          <div className="p-2 bg-[#282828] rounded-md">
            <Image
              src={"/asset/white/prototyping.png"}
              alt="plus"
              height={24}
              width={24}
              className=" h-4 w-4  | max-sm:h-3 max-sm:w-3 "
            />
          </div>
          <p className="| max-sm:text-xs">Prototyping</p>
        </div>

        <div className="flex items-center p-2 border border-[#1C1C1C] gap-2 rounded-xl bg-[#191919] w-full">
          <div className="p-2 bg-[#282828] rounded-md">
            <Image
              src={"/asset/white/finalize.png"}
              alt="plus"
              height={24}
              width={24}
              className=" h-4 w-4  | max-sm:h-3 max-sm:w-3 "
            />
          </div>
          <p className="| max-sm:text-xs">Finalize Design</p>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
