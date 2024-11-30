const MapMarker = () => {
  return (
    <div className="relative bg-white rounded-lg shadow-md w-[72px] h-[72px] border-[5px] border-[#ECEEFF] flex gap-4">
      <div className="overflow-hidden">
        <div className="w-[105px] h-[133px] rounded-md overflow-hidden relative">
          <img
            src="/houses.png"
            alt="House"
            className="w-full h-full object-cover -top-8 -left-5 absolute"
          />
        </div>
      </div>

      {/* Arrow at Bottom */}
      <div
        className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-6 h-6  bg-[#ECEEFF]"
        style={{
          clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)",
        }}
      ></div>
    </div>
  );
};

export default MapMarker;
