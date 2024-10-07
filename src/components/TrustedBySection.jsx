// src/components/TrustedBySection.jsx

import React from "react";
import { trustedByData } from "../Data/trustedByData"; // Importing trustedByData

const TrustedBySection = () => {
  return (
    <section className="trusted-section ">
      <h2>{trustedByData.title}</h2>
      <div className="trusted-logos">
        {trustedByData.companies.map((company) => (
          <img
            key={company.name}
            src={company.logo}
            alt={`${company.name} logo`}
            className="trusted-logos img"
          />
        ))}
      </div>
    </section>
  );
};

export default TrustedBySection;
