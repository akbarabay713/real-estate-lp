import { properties } from "../constants/property";
import PropertyCard from "./UI/Card";
import Slider from "./UI/Slider";

const Features = () => {
  return (
    <section id="portfolio" className="bg-white">
      {/* Title Section */}
      <div className="mb-8 px-12 flex flex-col md:flex-row items-center justify-between gap-3">
        <h2 className="text-5xl text-[#101828] flex-1">Upgrade Your Model.</h2>
        <p className="text-[#667085] text-base flex-1">
          Enhance your model with pre-designed add-ons like the Base Deck and
          the Base Deck+. Additional items are also available through key
          partnerships.
        </p>
      </div>

      {/* Show Slider on Larger Screens */}
      <div className="hidden md:block">
        <Slider properties={properties} itemsPerPage={1.75} />
      </div>

      {/* Show Property Cards on Mobile */}
      <div className="md:hidden flex items-center justify-center ">
        <div className="mt-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
