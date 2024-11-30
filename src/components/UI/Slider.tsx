import { useState } from "react";
import chevron_left from "../../assets/chevron-left.svg";
import chevron_right from "../../assets/chevron-right.svg";
import PropertyCard from "./Card";
import { SliderProps } from "../../types";

const Slider = ({ properties, itemsPerPage }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === Math.floor(properties.length / itemsPerPage)
        ? 0
        : prevSlide + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0
        ? Math.floor(properties.length / itemsPerPage)
        : prevSlide - 1
    );
  };

  return (
    <div className="relative">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentSlide * (100 / itemsPerPage)}%)`,
        }}
      >
        {Array.from({
          length: Math.ceil(properties.length / itemsPerPage),
        }).map((_, slideIndex) => (
          <div key={slideIndex} className="flex">
            {properties
              .slice(slideIndex * itemsPerPage, (slideIndex + 1) * itemsPerPage)
              .map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center w-full gap-3 mt-9">
        <button
          onClick={handlePrev}
          className="w-9 h-9 border rounded-lg flex items-center justify-center hover:bg-[#A8AEE5]"
        >
          <img src={chevron_left} alt="chevron_left" />
        </button>
        <button
          onClick={handleNext}
          className="w-9 h-9 border rounded-lg flex items-center justify-center hover:bg-[#A8AEE5]"
        >
          <img src={chevron_right} alt="chevron_right" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
