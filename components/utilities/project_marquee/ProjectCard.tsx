type Props = {
  project: {
    name: string;
    image: string;
  };
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className=" brand-card flex w-[260px] md:w-[300px]  overflow-hidden relative rounded-full shrink-0 ">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover opacity-80 select-none pointer-events-none"
        draggable={false}
      />
    </div>
  );
};

export default ProjectCard;
