import ProperlyIcon from "../../assets/properly.svg";

const NavbarLogo = () => (
  <div className="flex gap-4 items-center">
    <img src={ProperlyIcon} alt="Properly Logo" />
    <p className="text-[#161616] font-bold text-xl">Properly.</p>
  </div>
);

export default NavbarLogo;
