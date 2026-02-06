import Image from "next/image";

type Props = {
  service: {
    icon: string;
    name: string;
  };
};

const ServiceCard = ({ service }: Props) => {
  return (
    <div className="brand-card flex items-center gap-3 px-4 py-3  whitespace-nowrap min-w-fit">
      <div className=" bg-[#282828] rounded-sm max-md:rounded-sm p-2 min-w-fit">
       <img
        src={service.icon}
        alt={service.name}
        className="w-3.5 h-3.5 "
      />
      </div>
      <p className="text-sm font-medium">{service.name}</p>
    </div>
  );
};

export default ServiceCard;
