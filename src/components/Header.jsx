import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for the toggle button
import { Link } from "react-router-dom";
import { headerData } from "../Data/headerData";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-cyan-700 p-4">
      <div className="container flex items-center justify-between">
        {/* Logo with Icon for larger screens only */}
        <div className="hidden items-center text-2xl font-bold text-white md:flex">
          {headerData.logoIcon} {/* RSS Icon */}
          <Link to="/" className="ml-2">
            {headerData.logo}
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-white">
            {isMenuOpen ? <FaTimes /> : <FaBars />}{" "}
            {/* Toggle between bars and close icon */}
          </button>
        </div>

        {/* Navigation Menu for large screens */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-4">
            {headerData.navLinks.map((link, index) => (
              <li
                key={index}
                className="flex items-center text-white hover:underline"
              >
                <Link to={link.path}>{link.name}</Link>
                {/* Display dropdown icon if nav link has dropdown */}
                {link.hasDropdown && (
                  <span className="ml-1">{headerData.dropdownIcon}</span>
                )}
              </li>
            ))}
            <li className="rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600">
              <Link to={headerData.navLinks[5].path}>
                {headerData.navLinks[5].name}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Sidebar Menu for Mobile and Medium Devices */}
        <div
          className={`fixed left-0 top-0 h-full w-64 transform bg-blue-600 transition-transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } z-50 md:hidden`} // Ensure it's on top with a high z-index
        >
          <div className="flex items-center justify-between p-4">
            <div className="text-2xl font-bold text-white">
              {headerData.logoIcon} {/* RSS Icon */}
              <Link to="/" className="ml-2">
                {headerData.logo}
              </Link>
            </div>
            {/* FaTimes Icon to Close the Sidebar */}
            <button onClick={toggleMenu} className="text-2xl text-white">
              <FaTimes />
            </button>
          </div>
          <ul className="flex flex-col space-y-4 p-4">
            {headerData.navLinks.map((link, index) => (
              <li key={index} className="text-white hover:underline">
                {/* When a menu item is clicked, close the sidebar */}
                <Link to={link.path} onClick={toggleMenu}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Overlay to close the sidebar when clicking outside */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black opacity-50"
            onClick={toggleMenu}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;
