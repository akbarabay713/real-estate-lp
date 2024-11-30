interface NavbarMobileMenuButtonProps {
  toggleDrawer: () => void;
}

const NavbarMobileMenuButton = ({
  toggleDrawer,
}: NavbarMobileMenuButtonProps): JSX.Element => {
  return (
    <button onClick={toggleDrawer} className="md:hidden p-4 text-gray-700">
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
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
};

export default NavbarMobileMenuButton;
