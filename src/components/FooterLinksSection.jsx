import React from "react";
import { footerLinksData } from "../Data/footerLinksData"; // Importing data for the section

const FooterLinksSection = () => {
  return (
    <section className="footer-links-section ml-40 py-8 text-center">
      <div className="container mx-auto grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-6">
        {footerLinksData.map((category, index) => (
          <div key={index} className="footer-category">
            <h4 className="footer-category-title">{category.title}</h4>
            <ul className="footer-links-list">
              {category.links.map((link, linkIndex) => (
                <li key={linkIndex} className="footer-link">
                  <a href={link.url} className="text-blue-600 hover:underline">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FooterLinksSection;
