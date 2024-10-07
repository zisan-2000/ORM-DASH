import React from "react";
import { topFeaturesData } from "../Data/topFeaturesData"; // Importing top features data

const TopFeaturesSection = () => {
  return (
    <section className="top-features-section container">
      <h2 className="top-features-title">{topFeaturesData.title}</h2>
      <div className="top-features-grid">
        {topFeaturesData.features.map((feature, index) => (
          <div key={index} className="top-feature-card">
            {/* Render icon */}
            <div className="top-feature-icon">{feature.icon}</div>

            {/* Render title */}
            <h3 className="top-feature-title">{feature.title}</h3>

            {/* Render description */}
            <p className="top-feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopFeaturesSection;
