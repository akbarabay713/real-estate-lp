import { useState, useEffect } from "react";

const NavbarLinks = () => {
  const [activeLink, setActiveLink] = useState("#about-us");

  useEffect(() => {
    // Create an intersection observer instance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Check if the section is in the viewport
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 } // 50% of the section should be in view to trigger the active state
    );

    // Watch each section
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Clean up the observer when the component is unmounted
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="hidden md:flex space-x-4">
      <a
        href="#about-us"
        onClick={() => setActiveLink("#about-us")}
        className={`${
          activeLink === "#about-us"
            ? "text-[#429BF4] font-semibold"
            : "text-[#475467]"
        } text-base`}
      >
        ABOUT US
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveLink("#portfolio")}
        className={`${
          activeLink === "#portfolio"
            ? "text-[#429BF4] font-semibold"
            : "text-[#475467]"
        } text-base`}
      >
        PORTFOLIO
      </a>
      <a
        href="#information"
        onClick={() => setActiveLink("#information")}
        className={`${
          activeLink === "#information"
            ? "text-[#429BF4] font-semibold"
            : "text-[#475467]"
        } text-base`}
      >
        INFORMATION
      </a>
    </div>
  );
};

export default NavbarLinks;
