import BrandCard from "./BrandCard";
import { brands } from "./brands.data";
import "@/styles/brand-marquee.css";

const BrandMarquee = () => {
  return (
    <section className=" relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-[#0D0D0D] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-[#0D0D0D] to-transparent z-10 pointer-events-none"></div>
      <div className="space-y-3">
        {/* Row 1 – Left to Right */}
        <div className="relative overflow-hidden">
          <div className="brand-scroll-left flex gap-2 w-fit">
            {[...brands, ...brands].map((brand, i) => (
              <BrandCard key={`left-${i}`} brand={brand} />
            ))}
          </div>
        </div>

        {/* Row 2 – Right to Left */}
        <div className="relative overflow-hidden">
          <div className="brand-scroll-right flex gap-2 w-fit">
            {[...brands, ...brands].map((brand, i) => (
              <BrandCard key={`right-${i}`} brand={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
