import Image from "next/image";
import Main from "@/components/Main";
import Test from "@/components/Test";

export default function Home() {
  return (
    <div className="flex h-screen | max-sm:h-[2200px] | max-md:h-[1500px] |  | ">
      <Main />
    </div>
  );
}
