// src/components/TrustedBySection.jsx

import React from "react";
import { trustedByData } from "../Data/Data"; // Importing trustedByData

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
            className="trusted-logo"
          />
        ))}
      </div>
    </section>
  );
};

export default TrustedBySection;
