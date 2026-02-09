import Image from "next/image";
import ProjectMarquee from "../utilities/project_marquee/ProjectMarquee";

const Projects = () => {
  return (
    <div className="bg-[#090909] border-[#1C1C1C] border-2 rounded-xl  | flex flex-col gap-5 justify-center relative">
      <div className="flex flex-col ">
        <div className="flex justify-center p-2  max-md:p-3 flex-col gap-2">
          <div className="flex justify-center items-center gap-2">
            <Image
              src={"/asset/purple/works.png"}
              alt="plus"
              height={24}
              width={24}
              className="h-4 w-4"
            />
            <p className=" text-sm font-light text-[#999999] | max-sm:text-xs ">
              Projects
            </p>
          </div>
          <p className="flex justify-center font-semibold | max-sm:text-sm">
            Works Gallery
          </p>
        </div>
        <ProjectMarquee />
      </div>
      <div className=" absolute left-33 max-md:left-31 top-40 z-20 w-fit border-[#101010] border-2 px-8 py-3 flex items-center justify-center rounded-lg bg-[#916CE7] cursor-pointer">
        <p className="text-sm font-medium text-white">View All Services</p>
      </div>
    </div>
  );
};

export default Projects;
