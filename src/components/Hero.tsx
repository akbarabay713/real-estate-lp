import HeroCard from "./UI/HeroCard";
import HeroStats from "./UI/HeroStats";
import MapMarker from "./UI/MapMarker";
import SearchBar from "./UI/SearchBar";

const Hero = () => {
  return (
    <section
      id="about-us"
      className="w-full h-screen bg-white flex flex-col relative overflow-y-hidden mt-20"
    >
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-12 md:px-20 py-16 z-20">
        {/* Left Section */}
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h1 className="md:text-6xl text-3xl text-[#303030] font-semibold">
            Let’s Find The Most{" "}
            <span className="text-[#429BF4]">Suitable Home</span> For You!
          </h1>
          <p className="text-gray-500 mt-4 text-base">
            We offer the best resident for you with a strategic location and the
            best home developer. Find your home right now !
          </p>
          <HeroStats />
        </div>

        {/* Right Section */}
        <div className="mt-8 md:mt-0 hidden lg:block absolute top-[180px] right-[88px] w-fit">
          <HeroCard />
        </div>
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* Map Image */}
      <img
        src="/map.png"
        alt="Map"
        className="w-fit absolute -top-20 right-0 z-10 hidden lg:block"
      />
      <div className="mt-8 md:mt-0 hidden lg:block absolute top-[364px] right-[126px] w-fit z-50">
        <MapMarker />
      </div>

      <div className="mt-8 md:mt-0 hidden lg:block absolute top-[429px] right-[360px] w-fit z-50">
        <MapMarker />
      </div>

      <div className="mt-8 md:mt-0 hidden lg:block absolute top-[-47px] right-[407px] w-fit z-50">
        <MapMarker />
      </div>
      <div className="mt-8 md:mt-0 hidden lg:block absolute top-[-13px] right-[53px] w-fit z-50">
        <MapMarker />
      </div>
    </section>
  );
};

export default Hero;
