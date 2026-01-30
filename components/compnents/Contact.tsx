import Image from "next/image";

const Contact = () => {
  return (
    <div className="bg-[#090909] border-[#1C1C1C] border-2 rounded-xl flex gap-8 flex-col p-5">
      <div className=" flex flex-col items-center gap-7">
        <div className="bg-[#282828] rounded-full p-4 | max-sm:p-3 ">
          <Image
            src={"/asset/purple/crown.png"}
            alt="plus"
            height={24}
            width={24}
            className=" h-6 w-6  | max-sm:h-6 max-sm:w-6 "
          />
        </div>
        <div className="felx flex-col  justify-items-center">
          <p className="text-xl max-sm:text-base font-semibold mb-2">
            Let’s Work Together
          </p>
          <p className=" font-light text-[#999999] text-sm | max-sm:text-xs">
            Let’s Make Magic Happen Together!
          </p>
        </div>
      </div>

      <div className=" flex flex-col gap-2">
        <div className="bg-[#282828] flex  justify-center gap-3 items-center py-3 rounded-lg">
          <Image
            src={"/asset/purple/mail.png"}
            alt="plus"
            height={24}
            width={24}
            className=" h-4 w-5  | max-sm:h-3 max-sm:w-4 "
          />
          <p className="text-sm">Email Me</p>
        </div>
        <div className="bg-[#282828] flex  justify-center gap-3 items-center py-3 rounded-lg">
          <Image
            src={"/asset/purple/calander.png"}
            alt="plus"
            height={24}
            width={24}
            className=" h-5 w-5  | max-sm:h-4 max-sm:w-4 "
          />
          <p className=" text-sm">Schedule a Call</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
