import ProjectCard from "./ProjectCard";
import { projects } from "./project.data";
import "@/styles/brand-marquee.css";

const ServiceMarquee = () => {
  return (
    <section className=" relative overflow-hidden ">
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-[#0D0D0D] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-[#0D0D0D] to-transparent z-10 pointer-events-none"></div>
      <div className="space-y-1">
        {/* Row 1 – Left to Right */}
        <div className="py-1 overflow-hidden">
          <div className="brand-scroll-left flex gap-2 w-fit">
            {[...projects, ...projects].map((project, i) => (
              <ProjectCard key={`left-${i}`} project={project} />
            ))}
          </div>
        </div>

        {/* Row 2 – Right to Left */}
        <div className="p-1 overflow-hidden">
          <div className="brand-scroll-right flex gap-2 w-fit">
            {[...projects, ...projects].map((project, i) => (
              <ProjectCard key={`right-${i}`} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMarquee;
