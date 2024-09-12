// src/components/WhyUseUsSection.jsx

import React from "react";
import { whyUseUsData } from "../Data/Data"; // Import the data

const WhyUseUsSection = () => {
  return (
    <section className="why-use-us-section container">
      <h2 className="why-use-us-title">{whyUseUsData.title}</h2>
      <div className="why-use-us-grid">
        {whyUseUsData.reasons.map((reason, index) => (
          <div key={index} className="why-use-us-card ">
            {/* Render the icon */}
            {reason.icon}
            {/* Render the title and description */}
            <h3 className="why-use-us-title-card">{reason.title}</h3>
            <p className="why-use-us-description">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUseUsSection;
