const HeroStats = () => {
  return (
    <div className="flex flex-wrap mt-6 gap-8 justify-center md:justify-start">
      <div className="flex gap-3 items-center">
        <h2 className="text-3xl font-medium text-[#264968]">29</h2>
        <p className="text-[#667085] font-light text-sm w-[3.5rem]">
          Success Partners
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <h2 className="text-3xl font-medium text-[#264968]">92+</h2>
        <p className="text-[#667085] font-light text-sm w-[3.75rem]">
          Strategic Location
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <h2 className="text-3xl font-medium text-[#264968]">120K</h2>
        <p className="text-[#667085] font-light text-sm w-[4.063rem]">
          Satisfying Customer
        </p>
      </div>
    </div>
  );
};

export default HeroStats;
