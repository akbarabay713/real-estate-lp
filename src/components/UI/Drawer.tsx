import { FC } from "react";
import NavLinks from "./NavLinks";

interface DrawerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
  activeLink: string;
  setActiveLink: (link: string) => void;
}

const Drawer: FC<DrawerProps> = ({
  isOpen,
  toggleDrawer,
  activeLink,
  setActiveLink,
}) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDrawer}
      ></div>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-64 bg-white h-full shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleDrawer}
          className="p-4 text-gray-700 absolute top-4 right-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Drawer content */}
        <div className="flex flex-col p-6">
          <NavLinks activeLink={activeLink} setActiveLink={setActiveLink} />
        </div>
      </div>
    </>
  );
};

export default Drawer;
