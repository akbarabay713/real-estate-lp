// import location from "../../../public/location.svg";
// import house from "../../../public/house.svg";
// import search from "../../../public/search.svg";

const SearchBar = () => {
  return (
    <div className="flex items-center flex-col md:flex-row justify-between bg-white p-5 rounded-lg shadow-md lg:w-[50%] w-full lg:ml-20 ml-0 lg:mt-32 mt-8 md:mt-10 gap-4 md:gap-0 z-30">
      <div className="flex gap-6 w-full md:w-auto">
        <img src="/location.svg" alt="location" />
        <div className="flex flex-col w-full md:w-1/2">
          <label className="text-gray-500">Location</label>
          <input
            type="text"
            placeholder="Type your location"
            className="mt-2 bg-transparent outline-none text-[#667085] opacity-50 w-full"
          />
        </div>
      </div>
      <div className="flex flex-col w-full md:w-auto">
        <div className="flex gap-6 w-full md:w-auto">
          <img src="house.svg" alt="house" />
          <div className="flex flex-col w-full md:w-[8.75rem]">
            <label className="text-gray-500">Type</label>
            <select className="mt-2 bg-transparent outline-none text-[#667085] opacity-50 w-full">
              <option>Select your type</option>
              <option>Apartment</option>
              <option>House</option>
            </select>
          </div>
        </div>
      </div>
      <button className="bg-[#429BF4] text-white px-4 py-3 rounded-lg flex items-center gap-3 h-[3.375rem] mt-4 md:mt-0">
        <img src="/search.svg" alt="search" />
        <span>Search</span>
      </button>
    </div>
  );
};

export default SearchBar;
