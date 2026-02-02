import Image from "next/image";

type Props = {
  brand: {
    icon: string;
  };
};

const BrandCard = ({ brand }: Props) => {
  return (
    <div className="brand-card  flex items-center justify-center w-35 h-14 px-6 py-3">
      <Image
        src={brand.icon}
        alt="brand logo"
        width={500}
        height={24}
        priority
        className=""
      />
    </div>
  );
};

export default BrandCard;
