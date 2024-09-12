import React from "react";
import { rssUseCasesData } from "../Data/Data"; // Importing data for the section

const RssUseCasesSection = () => {
  return (
    <section className="rss-use-cases-section container py-12 text-center">
      <div className="container mx-auto">
        <h2 className="rss-use-cases-title">{rssUseCasesData.title}</h2>
        <p className="rss-use-cases-description">
          {rssUseCasesData.description}
        </p>

        <div className="rss-use-cases-grid">
          {rssUseCasesData.useCases.map((useCase, index) => (
            <div key={index} className="rss-use-case-card">
              <div className="rss-use-case-icon flex gap-4">
                {useCase.icon}
                <h3 className="rss-use-case-title">{useCase.title}</h3>
              </div>
              <p className="rss-use-case-description">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RssUseCasesSection;
