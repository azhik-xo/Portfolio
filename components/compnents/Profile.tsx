import Image from "next/image";
import TiltedCard from "../utilities/ProfileCard";

const Profile = () => {
  return (
    <div className="bg-[#090909] border-[#1C1C1C] border-2 rounded-xl grid grid-rows-[1fr_1fr_20%] gap-4 p-4">
      {/* <<<<<<<<<<<<<<<<<<<<<<--------------------- Sub div_1---------------------->>>>>>>>>>>>>>>>>> */}
      <div className=" grid gap-3 grid-cols-[75%_25%] max-md:grid-cols-[1fr_8%] ">
        <div className="grid grid-cols-[35%_1fr] max-md:grid-cols-[30%_1fr] gap-4">
          <div className="  ">
            <TiltedCard
              imageSrc="/asset/profile/mehh2.svg"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Abdul Ashik"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip
              displayOverlayContent
              overlayContent={
                <p className="tilted-card-demo-text text-sm text-white"></p>
              }
            />
          </div>
          <div className="space-y-3  max-md:space-y-7">
            <div className="bg-[#141414] border border-[#1C1C1C] w-fit px-2 py-1 rounded-4xl flex items-center gap-3">
              <Image
                src={"/asset/green/notifi.svg"}
                alt="plus"
                height={24}
                width={24}
                className="max-md:h-4 max-md:w-4 h-4 w-4"
              />
              <p className="text-[#999999] text-sm">Available To Work</p>
            </div>

            <div className="">
              <p className="text-xl font-medium text-[#E6E6E6]">Abdul Ashik</p>
              <p className="text-[#999999] text-sm">i'm a</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-2 gap-2 w-fit h-fit justify-end items-center cursor-pointer">
          <p className="text-sm max-md:hidden text-[#CCCCCC]">Resume</p>
          <div className="bg-[#282828] h-fit w-fit p-2 rounded-md flex justify-center items-center">
            <Image
              src={"/asset/white/resume.png"}
              alt="plus"
              height={24}
              width={24}
              className="max-md:h-4 max-md:w-4 h-4 w-4 "
            />
          </div>
        </div>
      </div>

      {/* <<<<<<<<<<<<<<<<<<<<<<--------------------- Sub div_2---------------------->>>>>>>>>>>>>>>>>> */}
      <div className="bg-[#101010] border-[#1C1C1C] border rounded-md p-2  grid items-center  ">
        {/* <<<<<<<<<<<<<<<<<<<<<<--------------------- Sub sub div_1---------------------->>>>>>>>>>>>>>>>>> */}
        <div className="flex gap-3 w-fit h-fit">
          {/* <<<<<<<<<<<<<<<<<<<<<<--------------------- location ---------------------->>>>>>>>>>>>>>>>>> */}
          <div className=" bg-[#141414] border border-[#1C1C1C] h-fit w-fit flex gap-2 justify-center items-center px-2 py-1 rounded-full ">
            <Image
              src={"/asset/purple/location.png"}
              alt="plus"
              height={5}
              width={14}
              className="h-4 w-3"
            />
            <p className="text-sm font-light">India</p>
          </div>

          {/* <<<<<<<<<<<<<<<<<<<<<<--------------------- language ---------------------->>>>>>>>>>>>>>>>>> */}
          <div className=" bg-[#141414] border col-span-2 border-[#1C1C1C] h-fit w-fit flex gap-2 justify-center items-center px-2 py-1 rounded-full ">
            <Image
              src={"/asset/purple/lang.png"}
              alt="plus"
              height={5}
              width={14}
              className="h-3 w-3"
            />
            <p className="text-sm font-light">English, Tamil & Hindi</p>
          </div>

          {/* <<<<<<<<<<<<<<<<<<<<<<--------------------- IST ---------------------->>>>>>>>>>>>>>>>>> */}
          <div className=" bg-[#141414] border border-[#1C1C1C] h-fit w-fit flex gap-2 justify-center items-center px-2 py-1 rounded-full ">
            <Image
              src={"/asset/purple/time.png"}
              alt="plus"
              height={5}
              width={14}
              className="h-3 w-3"
            />
            <p className="text-sm font-light">IST</p>
          </div>
        </div>

        {/* <<<<<<<<<<<<<<<<<<<<<<--------------------- Sub sub div_2---------------------->>>>>>>>>>>>>>>>>> */}
        <div className="flex gap-3 w-fit h-fit">
          {/* <<<<<<<<<<<<<<<<<<<<<<--------------------- role ---------------------->>>>>>>>>>>>>>>>>> */}
          <div className=" bg-[#141414] border col-span-2 border-[#1C1C1C] h-fit w-fit flex gap-2 justify-center items-center px-2 py-1 rounded-full ">
            <Image
              src={"/asset/purple/flag.png"}
              alt="plus"
              height={5}
              width={14}
              className="h-3.5 w-2.5"
            />
            <p className="text-sm font-light">DevOps Engineer</p>
          </div>

          {/* <<<<<<<<<<<<<<<<<<<<<<--------------------- College ---------------------->>>>>>>>>>>>>>>>>> */}
          <div className=" bg-[#141414] border col-span-2 border-[#1C1C1C] h-fit w-fit flex gap-2 justify-center items-center px-2 py-1 rounded-full ">
            <Image
              src={"/asset/purple/edu.png"}
              alt="plus"
              height={5}
              width={14}
              className="h-3 w-3.5"
            />
            <p className="text-sm font-light">PSNCET</p>
          </div>
        </div>
      </div>

      {/* <<<<<<<<<<<<<<<<<<<<<<--------------------- Sub div_3---------------------->>>>>>>>>>>>>>>>>> */}
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-[#191919] rounded-md flex gap-3 justify-center items-center cursor-pointer">
          <Image
            src={"/asset/purple/insta.svg"}
            alt="plus"
            height={5}
            width={14}
            className="h-4 w-4"
          />
          <p className="text-sm font-light">DM me (instagram)</p>
        </div>
        <div className="bg-[#191919] rounded-md flex gap-3 justify-center items-center cursor-pointer">
          <Image
            src={"/asset/purple/whatsapp.png"}
            alt="plus"
            height={5}
            width={14}
            className="h-4 w-4"
          />
          <p className="text-sm font-light">WhatsApp Me</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
