import Image from "next/image";

const Profile = () => {
  return (
    <div className="bg-[#101010] border-[#1C1C1C] border-2 rounded-xl grid grid-rows-[1fr_30%_20%] gap-2 p-2">
      {/* <<<<<<<<<<<<<<<<<<<<<<--------------------- Sub div_1---------------------->>>>>>>>>>>>>>>>>> */}
      <div className=" grid gap-2 grid-cols-[75%_25%] max-md:grid-cols-[1fr_10%] ">
        <div className="bg-[#a7a6a9] grid grid-cols-[38%_1fr] gap-1">
          <div className="bg-[#916CE7] rounded-2xl"></div>
          <div className="bg-[#916CE7]"></div>
        </div>
        <div className="flex flex-col-2 gap-2 border-2 w-fit h-fit justify-end items-center cursor-pointer">
          <p className="text-sm max-md:hidden text-[#CCCCCC]">Resume</p>
          <div className="bg-[#282828] h-fit w-fit p-2 rounded-md flex justify-center items-center">
            <Image
              src={"/asset/white/resume.png"}
              alt="plus"
              height={24}
              width={24}
              className="max-md:h-5 max-md:w-5 h-4 w-4 "
            />
          </div>
        </div>
      </div>

      {/* <<<<<<<<<<<<<<<<<<<<<<--------------------- Sub div_2---------------------->>>>>>>>>>>>>>>>>> */}
      <div className="bg-amber-50"></div>

      {/* <<<<<<<<<<<<<<<<<<<<<<--------------------- Sub div_3---------------------->>>>>>>>>>>>>>>>>> */}
      <div className="bg-amber-50"></div>
    </div>
  );
};

export default Profile;
