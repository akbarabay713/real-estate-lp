import { FC } from "react";

interface NavLinksProps {
  activeLink: string;
  setActiveLink: (link: string) => void;
}

const NavLinks: FC<NavLinksProps> = ({ activeLink, setActiveLink }) => {
  const links = [
    { href: "#about-us", label: "ABOUT US" },
    { href: "#portfolio", label: "PORTFOLIO" },
    { href: "#information", label: "INFORMATION" },
  ];

  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setActiveLink(link.href)}
          className={`${
            activeLink === link.href
              ? "text-[#429BF4] font-semibold"
              : "text-[#475467]"
          } text-base`}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
