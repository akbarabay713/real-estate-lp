import { useState } from "react";
import NavbarLogo from "./UI/NavbarLogo";
import NavbarLinks from "./UI/NavbarLinks";
import NavbarMobileMenuButton from "./UI/NavbarMobileMenuButton";
import Drawer from "./UI/Drawer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#about-us");

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#FFFFFF] w-full h-20 flex items-center justify-between px-4 sm:px-6 lg:px-20 fixed top-0 z-[999]">
      {/* Logo Section */}
      <NavbarLogo />

      {/* Desktop Links Section */}
      <NavbarLinks />

      {/* Mobile Menu Button */}
      <NavbarMobileMenuButton toggleDrawer={toggleDrawer} />

      {/* Mobile Drawer */}
      <Drawer
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />
    </nav>
  );
};

export default Navbar;
