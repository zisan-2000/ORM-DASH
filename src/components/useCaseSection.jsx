import React from "react";
import { useCaseData } from "../Data/useCaseData"; // Importing data for the section

const UseCaseSection = () => {
  return (
    <section className="use-case-section py-12 text-center">
      <div className="container mx-auto">
        <h2 className="use-case-title">{useCaseData.title}</h2>
        <p className="use-case-description">{useCaseData.description}</p>

        <div className="use-case-grid  flex  justify-center">
          {useCaseData.features.map((feature, index) => (
            <div key={index} className="use-case-card">
              <div className="use-case-icon flex gap-4">
                {feature.icon}
                <h3 className="use-case-feature-title">{feature.title}</h3>
              </div>
              <p className="use-case-feature-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCaseSection;
