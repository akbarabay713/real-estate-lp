import React from "react";

interface Property {
  id: number;
  location: string;
  title: string;
  bedrooms: string;
  price: string;
  description: string;
  image: string;
}

const PropertyCard: React.FC<{ property: Property }> = ({ property }) => (
  <div className="md:w-[38.875rem] w-[95%] mx-3 md:my-0 my-3">
    <div className="w-full h-[25.063rem] overflow-hidden">
      <img
        src={property.image}
        alt={property.title}
        className="object-cover w-full h-[25.063rem] transform transition-transform duration-500 ease-in-out hover:scale-105"
      />
    </div>
    <div className="mt-4">
      <p className="text-[#16161652] font-medium text-base">
        {property.location}
      </p>
      <h3 className="text-3xl font-medium mt-2 text-[#101828]">
        {property.title}
      </h3>
      <div className="grid grid-cols-2 items-center">
        <div>
          <p className="text-[#101828] text-lg">{property.bedrooms}</p>
          <p className="text-[#667085] text-base">{property.price}</p>
        </div>
        <p className="text-[#667085] text-sm">{property.description}</p>
      </div>
    </div>
  </div>
);

export default PropertyCard;
