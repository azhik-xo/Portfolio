import Image from "next/image";
import Main from "@/components/Main";

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Home() {
  await delay(3000);
  return (
    <div className="flex h-screen | max-sm:h-[2200px] | max-md:h-[1500px] |  | ">
      <Main />
    </div>
  );
}
