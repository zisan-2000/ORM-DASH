import React from "react";
import { FaGlobeAmericas, FaRss } from "react-icons/fa"; // Import icons
import { footerData } from "../Data/Data"; // Importing data for the footer

const FooterSection = () => {
  return (
    <footer className="footer-section py-4 text-center">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
        {/* Left Section - Logo and Copyright */}
        <div className="footer-left flex items-center">
          <FaRss className="footer-logo" /> {/* RSS icon */}
          <span className="ml-2 text-gray-600">
            © {footerData.year} {footerData.name}
          </span>
        </div>

        {/* Center Section - Links */}
        <div className="footer-links mt-4 md:mt-0">
          {footerData.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="mx-2 text-gray-600 hover:underline"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Section - Language Switcher */}
        <div className="footer-right mt-4 md:mt-0">
          <FaGlobeAmericas className="inline-block h-6 w-6" />{" "}
          {/* Globe icon for language */}
          <span className="ml-1">{footerData.language}</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
