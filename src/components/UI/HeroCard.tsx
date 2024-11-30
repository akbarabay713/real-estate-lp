const HeroCard = () => {
  return (
    <div className="relative bg-white rounded-lg shadow-md p-4 w-[435px] h-[165px] border border-[#A8AEE5] flex gap-4">
      <div className="w-[105px] h-[133px] rounded-md overflow-hidden">
        <img
          src="/image_card.png"
          alt="House"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Card Content */}
      <div className="flex flex-col justify-center">
        {/* Image Section */}
        <div className="flex items-center space-x-4">
          {/* Text Section */}
          <div>
            <p className="text-[#16161652] font-medium text-sm">
              Pandeyan, Yogyakarta
            </p>
            <h3 className="font-semibold text-xl text-[#161616]">
              Palm Tree Resident
            </h3>
          </div>
        </div>

        {/* Details Section */}
        <div className="flex items-center mt-4 space-x-6 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <img src="/squareFoot.svg" alt="Area" />
            <span className="text-[#303030A3] text-sm font-medium">120 M²</span>
          </div>
          <div className="flex items-center space-x-1">
            <img src="/bath.svg" alt="Bathroom" />
            <span className="text-[#303030A3] text-sm font-medium">2 Room</span>
          </div>
          <div className="flex items-center space-x-1">
            <img src="/bed.svg" alt="Bedroom" />
            <span className="text-[#303030A3] text-sm font-medium">4 Room</span>
          </div>
        </div>
      </div>

      {/* Arrow at Bottom */}
      <div
        className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-6 h-6  bg-[#A8AEE5]"
        style={{
          clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)",
        }}
      ></div>
    </div>
  );
};

export default HeroCard;
