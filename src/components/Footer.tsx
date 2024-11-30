import NavbarLogo from "./UI/NavbarLogo";

const Footer = () => {
  return (
    <footer id="information" className="relative w-full bg-white">
      {/* info */}
      <div className="flex w-full justify-between mb-14 mt-[7rem] md:px-32 px-2 flex-wrap">
        <NavbarLogo />
        <div className="flex items-center w-fit gap-3 border-[#3376F8] border rounded-full py-2 px-3">
          <div className="w-1 h-1 rounded-full bg-[#3376F8]"></div>
          <p className="text-[#3376F8] text-base font-medium">
            Properly Indonesia
          </p>
        </div>

        <div className="flex gap-3 items-center">
          <img src="/location_footer.svg" alt="Footer icons" />
          <p className="font-medium text-base text-[#667085]">
            Yogyakarta, Bali{" "}
          </p>
        </div>
      </div>

      {/* Footer Image */}
      <div className="w-full">
        <img
          src="/footer.png"
          alt="Footer Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Footer Bottom Section */}
      <div className="absolute bottom-0 w-full py-4 text-center z-10">
        <p className="text-sm text-white font-medium">
          Copyright ©2024. All rights reserved. Powered by: MadeInIndonesia
        </p>
      </div>
    </footer>
  );
};

export default Footer;
