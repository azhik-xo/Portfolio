import Image from "next/image";

type Props = {
  project: {
    icon: string;
    name: string;
  };
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="brand-card flex items-center gap-3 px-4 py-3  whitespace-nowrap min-w-fit">
      <div className=" bg-[#282828] rounded-sm max-md:rounded-sm p-2 min-w-fit">
       <img
        src={project.icon}
        alt={project.name}
        className="w-3.5 h-3.5 "
      />
      </div>
      <p className="text-sm font-medium">{project.name}</p>
    </div>
  );
};

export default ProjectCard;
